import Cookies from 'js-cookie'

const TokenKey = 'mobile_token'
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjpbeyJ0b29sdHQiOiJodHRwczovL3Rvb2x0dC5jb20ifV0sImlhdCI6MTY4NTU4NTc2OCwiZXhwIjoxNjg4MDU0Mzk5LCJhdWQiOiIiLCJpc3MiOiIiLCJzdWIiOiIifQ.W57Z-1-GruXKhmnPL45vO1QWmCSkfe3JNgglVB4hKz8'
const getToken = () => {
    return Cookies.get(TokenKey)
}

const setToken = (token: string) => {
    return Cookies.set(TokenKey, token)
}

const removeToken = (TokenKey: string) => {
    return Cookies.remove(TokenKey)
}


export {
    TokenKey,
    getToken,
    setToken,
    removeToken
}