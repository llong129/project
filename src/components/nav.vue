<template>
  
  <div id="homepage">
    <div class="header">
      <el-menu
        :router="true"
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#ceb8bb8e"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="/homepage">首页</el-menu-item>
        <el-submenu index="/emotion">
          <template slot="title">生活贴</template>
          <el-menu-item index="use">我在用</el-menu-item>
          <el-menu-item index="music">我在听</el-menu-item>
          <el-menu-item index="motion">我在想</el-menu-item>
        </el-submenu>
        <el-menu-item index="/study">学习贴</el-menu-item>
        <el-menu-item index="/todolist">待办栏</el-menu-item>
        <el-submenu index="/study">
          <template slot="title">个人中心</template>
          <el-menu-item index="#">消息</el-menu-item>
          <el-menu-item index="/personal">详情</el-menu-item>
          <el-menu-item index="/"> 退出 </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div> 
</template>

<script >
// import bj from "../js/bj.js";
   export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang='less'scope>
#homepage {
  background: url("../assets/pbj.png") no-repeat;
  background-size: cover;
  
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  overflow-y: scroll;

  
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999999;
  }

  .container {
    margin-top: 60px;
  }
}




.el-menu-demo{
  width: 100%;   
}
</style>
