import { ref } from 'vue'
import { defineStore } from 'pinia'
import { setToken, removeToken,TokenKey } from '@/utils/auth'

const useUserStore = defineStore('user', () => {
  const userInfo = ref({
    account: '',
    password: ''
  })

  const setAccount = () => {}

  // 登陆
  const login = async () => {
    return new Promise<void>((resolve, reject) => {
      console.log(`[🍍] wd: 设置token`, userInfo.value)
      const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjpbeyJ0b29sdHQiOiJodHRwczovL3Rvb2x0dC5jb20ifV0sImlhdCI6MTY4NTYwODYzOSwiZXhwIjozMjAyODE5MjA0LCJhdWQiOiIiLCJpc3MiOiIiLCJzdWIiOiIifQ.44W7tHBDm2ibdT65V20ckLMi9PrKM-0O2F8lgBdVrV8`
      setToken(token)
      resolve()
    })
  }

// 退出
const exit = ()=> {
  return new Promise<void>((resolve, reject) => {
    removeToken(TokenKey)
    resolve()
  })
  
} 

  return {
    userInfo,
    setAccount,
    login,
    exit
  }
})

export { useUserStore }
