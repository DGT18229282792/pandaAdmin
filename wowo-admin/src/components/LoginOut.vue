<template>
<div>
  <a-dropdown class="topRight">
    <a-menu slot="overlay" @click="handleMenuClick">
      <a-menu-item key="1"><a-icon type="user" />个人中心</a-menu-item>
      <a-menu-item key="2"><a-icon type="user" />设置管理</a-menu-item>
     <a-menu-item key="3"><a-icon type="user" /> <router-link to="/">退出登录</router-link></a-menu-item>
    </a-menu>
    <a-button style="margin-left: 8px">
        管理员
    <a-icon type="down" />
    </a-button>
  </a-dropdown>
</div>
</template>

<script>
export default {
  methods: {
    handleButtonClick(e) {
      console.log('click left button', e);
    },
    handleMenuClick(e) {
      console.log('click', e);
    },
  }
}
</script>
<style scoped>
.topRight{
    float: right;
    border: 0;
}
a{
    display: inline
}
</style>
