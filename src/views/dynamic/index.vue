<template>
  <div>
    dynamic
    <button @click="handleDetail">跳转到详情页面</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'


const router = useRouter()

const handleDetail = () => {
  router.push('/detail')
}

</script>

<style lang="less" scoped></style>