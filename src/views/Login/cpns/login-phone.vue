<template>
  <div class="login-phone">
    <el-form
    ref="ruleFormRef"
    :model="phone"
    status-icon
    label-width="60px"
    class="demo-ruleForm"
  >
    <el-form-item label="手机号" prop="name">
      <el-input v-model="phone.num"/>
    </el-form-item>
    <el-form-item label="验证码" prop="password">
      <el-input v-model="phone.code" type="password"/>
    </el-form-item>
  </el-form>
  </div>
</template>

<script lang="ts">
import { reactive } from '@vue/reactivity'
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    const phone=reactive({
      num:'',
      code:''
    })

    return {phone}
  }
})
</script>

<style scoped>

</style>