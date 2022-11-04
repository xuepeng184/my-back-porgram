<template>
  <div class="login-panel">
    <h1 class="title">xp后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
    <el-tab-pane name="account">
      <template #label>
        <span class="custom-tabs-label">
          <span>账号登录</span>
        </span>
      </template>
      <login-account ref="accountRef"></login-account>
    </el-tab-pane>
    <el-tab-pane name="phone">
      <template #label>
        <span class="custom-tabs-label">
          <span>手机登录</span>
        </span>
      </template>
      <login-phone ref="phoneRef"></login-phone>
    </el-tab-pane>
  </el-tabs>
  <div class="account-control">
    <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
    <el-link type="primary">忘记密码</el-link>
  </div>

  <el-button @click="handleLoginClick" type="primary" class="login-button">立即登录</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components:{
    LoginAccount,
    LoginPhone
  },
  setup () {
    const isKeepPassword=ref(true)
    const accountRef=ref<InstanceType<typeof LoginAccount>>()
      const phoneRef=ref<InstanceType<typeof LoginPhone>>()
    const currentTab=ref<string>('account')
    //登录按钮点击回调
    const handleLoginClick=()=>{
      //调用子组件去验证
      if(currentTab.value==='account'){
        accountRef.value?.loginAction(isKeepPassword.value)
      }else{
        //手机登录
      }
    }

    return {
      isKeepPassword,
      handleLoginClick,
      accountRef,
      currentTab,
      phoneRef
    }
  }
})
</script>

<style scoped lang="less">
.login-panel{
  margin-top: -200px;
  width: 320px;
  .title{
    text-align: center;
  }

  .account-control{
    margin-top: 0px;
    display: flex;
    justify-content: space-between;
  }
  .login-button{
    width: 100%;
  }
}

</style>  