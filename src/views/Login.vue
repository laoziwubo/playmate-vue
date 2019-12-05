<template>
  <el-row type="flex" justify="center">
    <el-form ref="loginForm" :model="user" :rules="rules" status-icon label-width="50px">
      <el-form-item label="账号" prop="name">
        <el-input v-model="user.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input v-model="user.pwd" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-upload" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </el-row>
</template>

<script>
export default {
  methods: {
    login: function() {
      let that = this;
      that.$store.commit("tokenHandler", "");
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$api.post(
            "login",
            { name: that.user.name, pwd: that.user.pwd },
            s => {
              that.$store.commit("tokenHandler", s.payload);
              this.$notify({
                type: "success",
                message: "欢迎你," + this.user.name + "!",
                duration: 3000
              });
              let rpath = this.$route.query.redirect
                ? this.$route.query.redirect
                : "/";
              this.$router.replace(rpath);
            },
            f => {
              this.$message({
                type: "error",
                message: f.msg,
                showClose: true
              });
            }
          );
        } else {
          return false;
        }
      });
    },
    loginOut() {
      this.isLogin = false;
      this.$store.commit("tokenHandler", "");
    }
  },
  data() {
    return {
      isLogin: false,
      user: {},
      rules: {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        pwd: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  created() {
    if (window.localStorage.token && window.localStorage.token.length >= 128) {
      this.isLogin = true;
    }
  }
};
</script>