<template>
  <div>
    <mt-header :fixed="true" title="列表">
      <mt-button v-link="'/'" icon="back" slot="left">返回</mt-button>
      <mt-button @click="show()" icon="more" slot="right"></mt-button>
    </mt-header>
    <filter></filter>
  </div>
</template>
<style>

</style>
<script>
  import Filter from '../components/Filter.vue'
  export default {
    components: {
      Filter
    }
  }
</script>
