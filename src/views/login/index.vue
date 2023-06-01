<template>
  <div class="login-container">

    <div class="userinfo-content">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]" />
          <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]" />
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>


    </div>


  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import {useUserStore} from '@/stores/user'


const user = useUserStore()

const route:any = useRoute()
const router = useRouter()


const username = ref('')
const password = ref('')
const onSubmit = (values: any) => {
  user.userInfo.account = username.value
  user.userInfo.password = password.value
  user.login().then(() => {
    console.log('🍍wd: huilail', )
    router.push(route.query.redirect || '/')
  }).catch(() => {
    console.log('🍍wd: 登陆出问题了', )
  })
  
}




</script>

<style lang="less" scoped>
.login-container {
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  .userinfo-content {
    padding: 14px;
    background: #ffffff;
    border-radius: 20px;
    overflow: auto;
  }
}
</style>