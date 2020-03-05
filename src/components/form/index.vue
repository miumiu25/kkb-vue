<template>
  <div class="index">
    <KForm :model="model" :rules="rules" ref="loginForm">
      <KFormItem label="用户名" prop="username">
        <KInput v-model="model.username"></KInput>
      </KFormItem>
      <KFormItem label="密码" prop="password">
        <KInput v-model="model.password" type="password"></KInput>
      </KFormItem>
      <KFormItem>
        <button @click="onLogin">登录</button>
      </KFormItem>
    </KForm>
    {{model}}
  </div>
</template>
<script>
  import KForm from "./KForm";
  import KInput from "./KInput";
  import KFormItem from "./KFormItem";

  export default {
    name: "index",
    components: {
      KForm,
      KInput,
      KFormItem
    },
    data() {
      return {
        model: {
          username: "",
          password: ""
        },
        rules: {
          username: [{ required: true, message: "用户名必填" }],
          password: [{ required: true, message: "密码必填" }]
        }
      };
    },
    methods:{
      onLogin(){
        this.$refs.loginForm.validate((isValid)=>{
          if(isValid){
            alert('登录成功')
          }else{
            alert('有错！！')
          }
        })
      }
    },
    created() {},
    mounted() {}
  };
</script>
<style>
</style>
