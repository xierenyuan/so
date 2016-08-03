/**
 *
 * @Class
 * @auther xierenhong
 * @date 16/6/2
 */
class Util {
    static Factory(constructorFn) {
        constructorFn = this._normalizeConstructor(constructorFn);
        var factoryArray = this._createFactoryArray(constructorFn);
        return factoryArray;
    }

    static Directive(constructorFn) {
        constructorFn = this._normalizeConstructor(constructorFn);

        if (!constructorFn.prototype.compile) {
            // create an empty compile function if none was defined.
            constructorFn.prototype.compile = () => {
            };
        }

        var originalCompileFn = this._cloneFunction(constructorFn.prototype.compile);

        // Decorate the compile method to automatically return the link method (if it exists)
        // and bind it to the context of the constructor (so `this` works correctly).
        // This gets around the problem of a non-lexical "this" which occurs when the directive class itself
        // returns `this.link` from within the compile function.
        this._override(constructorFn.prototype, 'compile', function () {
            return function () {
                originalCompileFn.apply(this, arguments);

                if (constructorFn.prototype.link) {
                    return constructorFn.prototype.link.bind(this);
                }
            };
        });

        var factoryArray = this._createFactoryArray(constructorFn);
        return factoryArray;
    }

    static _normalizeConstructor(input) {
        var constructorFn;
        if (input.constructor === Array) {
            //
            var injected = input.slice(0, input.length - 1);
            constructorFn = input[input.length - 1];
            constructorFn.$inject = injected;
        } else {
            constructorFn = input;
        }
        return constructorFn;
    }

    static _createFactoryArray(constructorFn) {
        // get the array of dependencies that are needed by this component (as contained in the `$inject` array)
        var args = constructorFn.$inject || [];
        var factoryArray = args.slice(); // create a copy of the array
        // The factoryArray uses Angular's array notation whereby each element of the array is the name of a
        // dependency, and the final item is the factory function itself.
        factoryArray.push((...args) => {
            //return new constructorFn(...args);
            var instance = new constructorFn(...args);
            for (var key in instance) {
                instance[key] = instance[key];
            }
            return instance;
        });

        return factoryArray;
    }

    static _cloneFunction(original) {
        return function () {
            return original.apply(this, arguments);
        };
    }

    static _override(object, methodName, callback) {
        object[methodName] = callback(object[methodName])
    }

    static _formatDate(date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '-' + m + '-' + d;
    };

    static _splicParams(object) {
        var str = '?';
        var i = 0;
        _.forEach(object, function (n, key) {
            var s = '';
            if (i) {
                s = '&&' + key + '=' + n;
            } else {
                s = key + '=' + n;
                i++;
            }
            str += s;
        })
        return str;
    }

    /**
     * Only call a function once in the given interval.
     *
     * @param func {Function} the function to call
     * @param wait {int} how long to wait before/after to allow function calls
     * @param immediate {boolean} whether to call immediately or after the wait interval
     */
    static debounce(func, wait, immediate) {
        var timeout, args, context, timestamp, result;
        return function () {
            context = this;
            args = arguments;
            timestamp = new Date();
            var later = function () {
                var last = (new Date()) - timestamp;
                if (last < wait) {
                    timeout = setTimeout(later, wait - last);
                } else {
                    timeout = null;
                    if (!immediate) result = func.apply(context, args);
                }
            };
            var callNow = immediate && !timeout;
            if (!timeout) {
                timeout = setTimeout(later, wait);
            }
            if (callNow) result = func.apply(context, args);
            return result;
        };
    }

    static DelegateService(methodNames) {
        if (methodNames.indexOf('$getByHandle') > -1) {
            throw new Error("Method '$getByHandle' is implicitly added to each delegate service. Do not list it as a method.");
        }
        function trueFn() {
            return true;
        }
        return ['$log', function ($log) {

            /*
             * Creates a new object that will have all the methodNames given,
             * and call them on the given the controller instance matching given
             * handle.
             * The reason we don't just let $getByHandle return the controller instance
             * itself is that the controller instance might not exist yet.
             *
             * We want people to be able to do
             * `var instance = $ionicScrollDelegate.$getByHandle('foo')` on controller
             * instantiation, but on controller instantiation a child directive
             * may not have been compiled yet!
             *
             * So this is our way of solving this problem: we create an object
             * that will only try to fetch the controller with given handle
             * once the methods are actually called.
             */
            function DelegateInstance(instances, handle) {
                this._instances = instances;
                this.handle = handle;
            }

            methodNames.forEach(function (methodName) {
                DelegateInstance.prototype[methodName] = instanceMethodCaller(methodName);
            });


            /**
             * The delegate service (eg $ionicNavBarDelegate) is just an instance
             * with a non-defined handle, a couple extra methods for registering
             * and narrowing down to a specific handle.
             */
            function DelegateService() {
                this._instances = [];
            }

            DelegateService.prototype = DelegateInstance.prototype;
            DelegateService.prototype._registerInstance = function (instance, handle, filterFn) {
                var instances = this._instances;
                instance.$$delegateHandle = handle;
                instance.$$filterFn = filterFn || trueFn;
                instances.push(instance);

                return function deregister() {
                    var index = instances.indexOf(instance);
                    if (index !== -1) {
                        instances.splice(index, 1);
                    }
                };
            };
            DelegateService.prototype.$getByHandle = function (handle) {
                return new DelegateInstance(this._instances, handle);
            };

            return new DelegateService();

            function instanceMethodCaller(methodName) {
                return function caller() {
                    var handle = this.handle;
                    var args = arguments;
                    var foundInstancesCount = 0;
                    var returnValue;

                    this._instances.forEach(function (instance) {
                        if ((!handle || handle == instance.$$delegateHandle) && instance.$$filterFn(instance)) {
                            foundInstancesCount++;
                            var ret = instance[methodName].apply(instance, args);
                            //Only return the value from the first call
                            if (foundInstancesCount === 1) {
                                returnValue = ret;
                            }
                        }
                    });

                    if (!foundInstancesCount && handle) {
                        return $log.warn(
                            'Delegate for handle "' + handle + '" could not find a ' +
                            'corresponding element with delegate-handle="' + handle + '"! ' +
                            methodName + '() was not called!\n' +
                            'Possible cause: If you are calling ' + methodName + '() immediately, and ' +
                            'your element with delegate-handle="' + handle + '" is a child of your ' +
                            'controller, then your element may not be compiled yet. Put a $timeout ' +
                            'around your call to ' + methodName + '() and try again.'
                        );
                    }
                    return returnValue;
                };
            }

        }];
    }

    /**
     * 格式化 传入的参数为后台接受 的参数格式
     */
    static parse(params) {
        let _params = {};
        if (_.isObject(params)) {
            _.each(params, (val, key) => {
                if (_.isNull(val) || _.isUndefined(val)) {
                    _params[key] = '';
                } else if (_.isNaN(val)) {
                    _params[key] = 0;
                }
                //数组格式化
                else if (_.isArray(val)) {
                    _params[key] = val.length > 0 ? val.join(',') : '';
                }
                //时间格式化
                else if (_.isObject(val)) {
                    if (!_.isUndefined(val['startDate'])) {
                        _params['start_date'] = val['startDate'].format('YYYY-MM-DD');
                    }
                    if (!_.isUndefined(val['endDate'])) {
                        _params['end_date'] = val['endDate'].format('YYYY-MM-DD');
                    }
                } else {
                    _params[key] = val;
                }

            });
            return _params;
        }
        return {};
    }

    /**
     *
     * url 转成参数  get 方式时使用
     * @static
     * @param {object} params 需要转换的参数
     * @returns
     */
    static parseUrl(params) {
        if (_.isObject(params)) {
            var url = [];
            _.each(params, function (val, key) {
                if (!_.isUndefined(key) && !_.isUndefined(val)) {
                    url.push(`${key}=${encodeURI(val)}`);
                }
            });
            return url.join('&');
        }
        return params;
    }

}
export default Util;
