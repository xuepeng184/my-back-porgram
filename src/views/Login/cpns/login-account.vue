<template>
  <div class="login-account">
    <el-form
    ref="formRef"
    :model="account"
    status-icon
    :rules="rules"
    label-width="60px"
    class="demo-ruleForm"
  >
    <el-form-item label="账号" prop="name">
      <el-input v-model="account.name"/>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="account.password" show-password/>
    </el-form-item>
  </el-form>
  </div>
</template>

<script lang="ts">

import { ElForm } from 'element-plus'
import LocalCache from '../../../utils/cache'
import { defineComponent ,reactive,ref} from 'vue'
import {rules} from '../config/account-config'
import {useStore} from 'vuex'

export default defineComponent({
  setup () {
    const store=useStore()
    const account=reactive({
      name:LocalCache.getCache('name') ?? '',
      password:LocalCache.getCache('password') ?? ""
    })
 
    const formRef=ref<InstanceType<typeof ElForm>>()
    //验证逻辑
    const loginAction=(isKeepPassword:boolean)=>{
      formRef.value?.validate((valid)=>{
        if(valid){
          //记住密码
          if(isKeepPassword){
            LocalCache.setCache('name',account.name)
            LocalCache.setCache('password',account.password) 
          }else{
            LocalCache.deleteCache('name')
            LocalCache.deleteCache('password') 
          }
          store.dispatch('login/accountLoginAction',{...account})
        }
      })
    }

    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped>

</style>