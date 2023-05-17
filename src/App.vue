<template>
  <div id="app">
    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
        
    }
  },

}
</script>

<style>
.el-breadcrumb{
    margin-bottom: 15px;
}
.el-table {
    margin-top: 15px;
    font-size: 12px;
}
.el-pagination{
    margin-top: 15px;
}

</style>
