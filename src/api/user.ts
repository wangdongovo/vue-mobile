import request from "@/utils/request"

const loginAPI = (data: { account: string; password: string }) => {
    setTimeout(() => {
        return {
            name: '路飞',
            age: 18,
            token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjpbeyJ0b29sdHQiOiJodHRwczovL3Rvb2x0dC5jb20ifV0sImlhdCI6MTY4NTYwODYzOSwiZXhwIjozMjAyODE5MjA0LCJhdWQiOiIiLCJpc3MiOiIiLCJzdWIiOiIifQ.44W7tHBDm2ibdT65V20ckLMi9PrKM-0O2F8lgBdVrV8`
        }
    }, 100)
}


export {
    loginAPI
}