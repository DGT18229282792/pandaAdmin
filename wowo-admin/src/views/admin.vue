<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider
      collapsible
      v-model="collapsed"
    >
      <div class="logo" />
      <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline">
        <a-menu-item key="1">
            <router-link to="/admin/admin1">
            <a-icon type="pie-chart" />
            <span>商品管理</span>
            </router-link>      
        </a-menu-item>
        <a-menu-item key="2">
            <router-link to="/admin/admin2">
            <a-icon type="desktop" />
            <span>人员管理</span>
            </router-link>       
        </a-menu-item>
        <a-sub-menu
          key="sub1"
        >
          <span slot="title"><a-icon type="user" /><span>地址管理</span></span>
          <a-menu-item key="3">管理3.1</a-menu-item>
          <a-menu-item key="4">管理3.2</a-menu-item>
          <a-menu-item key="5">管理3.3</a-menu-item>
        </a-sub-menu>
        <a-sub-menu
          key="sub2"
        >
          <span slot="title"><a-icon type="team" /><span>购物车管理</span></span>
          <a-menu-item key="6">管理4.1</a-menu-item>
          <a-menu-item key="8">管理4.2</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <a-icon type="file" />
          <span>订单管理</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <header class="adminHeader">
      <LoginOut></LoginOut>
      </header>
      <router-view></router-view>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import LoginOut from '@/components/LoginOut'
export default {
  data() {
    return {
      collapsed: false,
    }
  },
  components:{
    LoginOut
  }
}
</script>

<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
.adminHeader{
    position: relative;
    height: 64px;
    padding: 16px;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
}
</style>