<template>
  <RouterView />
  <van-tabbar v-model="active" active-color="#ee0a24" route v-if="navType">
    <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/dynamic" icon="search">动态</van-tabbar-item>
    <van-tabbar-item replace to="/me" icon="friends-o">我的</van-tabbar-item>
  </van-tabbar>
</template>


<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { ref, computed } from 'vue'
const active = ref(0)
const navType = computed(() => {
  // 在这里根据当前路由的meta字段来判断是否显示底部导航
  return !route.meta.hideNav;
})

const route = useRoute()


</script>

<style lang="less" scoped>
.van-hairline--top-bottom:after, .van-hairline-unset--top-bottom:after {
  border-width: 0px;
}

</style>
