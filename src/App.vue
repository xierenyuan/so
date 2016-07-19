<template>
  <div>
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <p>
      Welcome to your Vue.js app!
    </p>
    <router-view transition="fade" transition-mode="out-in" keep-alive></router-view>
  </div>
</template>
<script>
    import Hello from './components/Hello'
    export default {
        components: {
            Hello
        }
    }
</script>
<style>
    html {
        height: 100%;
    }
    
    body {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    
    #app {
        color: #2c3e50;
        margin-top: -100px;
        max-width: 600px;
        font-family: Source Sans Pro, Helvetica, sans-serif;
        text-align: center;
    }
    
    #app a {
        color: #42b983;
        text-decoration: none;
    }
    
    .logo {
        width: 100px;
        height: 100px
    }
    
    [v-cloak] {
        display: none;
    }
    
    .fade-transition {
        transition: opacity .3s ease;
    }
    
    .fade-enter,
    .fade-leave {
        opacity: 0;
    }
</style>