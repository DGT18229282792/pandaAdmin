<template>
<main class="main">
 <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <a-form-item>
      <a-input
        v-decorator="[
          'userName',
          { rules: [{ required: true, message: '请输入用户名!' }] }
        ]"
        placeholder="用户名"
      >
        <a-icon
          slot="prefix"
          type="user"
          style="color: rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入密码!' }] }
        ]"
        type="password"
        placeholder="密码"
      >
        <a-icon
          slot="prefix"
          type="lock"
          style="color: rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          }
        ]"
      >
        记住密码
      </a-checkbox>
      <a
        class="login-form-forgot"
        href=""
      >
        忘记密码
      </a>
      <!-- <router-link to="/admin/admin1"> -->
  <a-button
        type="primary"
        html-type="submit"
        class="login-form-button"
      >
        登录
      </a-button>
      <!-- </router-link> -->
    
      Or <a href="">
        注册
      </a>
    </a-form-item>
  </a-form>
</main>
 
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      info:'',
      userName:'',
      password:''
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {        
          this.$http.get('/users').then(response=>{

              let data = response.data;
              console.log(data)
              this.userName = data.list[0].userName;
              this.password = data.list[0].userPwd                      
          })
             if(values.userName == this.userName&&values.password == this.password){
                this.$router.push({path:'/admin/admin1'});
              } else{
            this.$message.error('输入有误，请重新输入！');
            }        
          }else{
            this.$message.error('请输入用户名或密码！');
          }
      });
    },
  },
};
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
.main{
    width: 18.75rem;
    margin-top: -121px;
    top: 50%;
    position: absolute;
    margin-left: -9.37rem;
    left: 50%;
}
</style>