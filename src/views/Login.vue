<template>
    <div class="login">
        <input type="text" v-model="username">
        <button @click="login">登录</button>
    </div>
</template>
<script>
    export default {
      name: "Login",
      data() {
        return {
          username: "admin"
        };
      },
      methods: {
        login() {
          this.$store
            .dispatch("user/login", { username: this.username })
            .then(() => {
              this.$router.push({
                path: this.$route.query.redirect || "/"
              });
            });
          开课吧web全栈架构师.catch(error => {
            alert(error);
          });
        }
      }
    };
</script>
<style>
</style>
