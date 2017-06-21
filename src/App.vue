<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };

</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  .center {
    text-align: center;
  }

  body {
    background-color: #fbf9fe;
  }

</style>
