<template>
  <div class="login">
    <div class="login-box">
      <div class="img-box">
        <Logo class="logo" />
      </div>
      <div class="title"><span class="name"> 后台系统 </span></div>
      <el-form class="form" :model="form" :rules="rules" ref="loginform">
        <el-form-item prop="phone">
          <el-input
            v-model.trim="form.phone"
            clearable
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model.trim="form.password"
            clearable
            placeholder="请输入密码"
            show-password
            type="password"
          >
          </el-input>
        </el-form-item>
        <el-form-item
          ><el-checkbox v-model="isRemember" label="记住密码" size="large" />
        </el-form-item>
        <el-form-item class="btn-box">
          <el-button
            @click="login"
            style="width: 100%; height: 42px"
            type="primary"
          >
            登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import localCache from "@/utils/cache";
import cache from "@/utils/cache";
import { userlogin } from "@/service/login/index";
import { useRouter } from "vue-router";
import { firstRoute } from "@/utils/map-menu";
import { useUserStore } from "@/store/user";
import Logo from "@/assets/img/logo.svg";
const rules = {
  phone: [
    {
      required: true,
      message: "请输入手机号",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
    },
  ],
};
const form = ref({});
const router = useRouter();
const isRemember = ref(false);
const loginStore = useUserStore();
const init = () => {
  const rememberForm = localCache.getCathe("userPassword");
  if (!rememberForm) return;
  isRemember.value = true;
  form.value = rememberForm;
};
onMounted(() => {
  init();
});

const login = () => {
  userlogin(form.value).then(async (res) => {
    localCache.setCache("token", res.data.token);
    isRemember.value
      ? cache.setCache("userPassword", form.value)
      : cache.deleteCatche("userPassword");
    await loginStore.getUserInfoAction();

    router.push({
      path: firstRoute.path,
    });
  });
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background: url("@/assets/img/bgc-login.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-box {
    width: 336px;
    height: 450px;
    background: #ffffff;
    box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.05);
    border-radius: 10px 10px 10px 10px;
    opacity: 1;
    padding: 0 28px;

    .img-box {
      margin: 30px 0 16px;
      display: flex;
      justify-content: center;

      .logo {
        width: 86px;
        height: 86px;
      }
    }
  }

  .title {
    font-size: 18px;
    font-family: PingFang SC-Bold, PingFang SC;
    font-weight: bold;
    color: #131414;
    text-align: center;
    margin-bottom: 40px;
  }
}
</style>
