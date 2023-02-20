<template>
  <el-row>
    <el-col :span="24">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
      >
        <el-menu-item index="1">
          <router-link to="/">Main</router-link></el-menu-item
        >
        <el-menu-item index="2">
          <router-link to="/favourite">Favourite</router-link></el-menu-item
        >
        <el-menu-item index="3">
          <router-link to="/vote">Vote</router-link></el-menu-item
        >
      </el-menu>
    </el-col>
  </el-row>
  <router-view />
</template>

<script>
export default {};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
