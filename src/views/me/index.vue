<template>
  <div class="user-container">
    <div class="user-info-content">
      <van-image class="avatar" round src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
      <div class="user-info">
        <span class="name">万物不及大肘子</span>
        <span class="status">无状态</span>
      </div>
    </div>
    <div class="user-option-content">

      <van-cell-group inset>
        <van-cell title="个人主页" is-link icon="user-o" />
        <van-cell title="退出" is-link icon="close" @click="handleQuit"/>
      </van-cell-group>

      <van-cell-group inset>
        <van-cell title="个人主页" is-link icon="user-o" />
        <van-cell title="退出" is-link icon="close" @click="handleQuit"/>
      </van-cell-group>



      <van-cell-group inset>
        <van-cell title="个人主页" is-link icon="user-o" />
        <van-cell title="退出" is-link icon="close" @click="handleQuit"/>
      </van-cell-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router'
import { showConfirmDialog } from 'vant'
import 'vant/es/dialog/style'

import {useUserStore} from '@/stores/user'


const user = useUserStore()
const router = useRouter()


const handleQuit = () => {
  showConfirmDialog({
  title: '能不能不退出啊',
  message:
    '咱确定要退出嘛',
})
  .then(() => {
    // 退出登录
    user.exit().then(() => {
      console.log('🍍wd: 到这里了', )
      router.push('/login')
    })
  })
  .catch(() => {
    // on cancel
    
  });
  
}

</script>

<style lang="less" scoped>
.van-cell-group {
  margin-bottom: 30px;
}
.user-container {
  padding: 56px 16px 16px 16px;


  .user-info-content {
    .avatar {
      width: 120px;
      height: 120px;
      display: block;
      margin: 0 auto;
    }

    .user-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 60px;

      .name {
        font-size: 27px;
        font-weight: bolder;
        text-align: center;
      }

      .status {
        font-size: 16px;
        color: #a0a8af;
      }
    }

  }
}
</style>