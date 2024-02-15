import axios from 'axios'
import { loginFailed, loginStart, loginSuccess, registerSuccess, registerFailed, registerStart } from './authSlice'
import { API_ROOT } from './../utils/conStants'

import { toast } from 'react-toastify'


export const loginUserApi = async (user, dispatch, navigate) => {
  dispatch(loginStart())
  try {
    const res = await axios.post(`${API_ROOT}/v1/auth/login`, user)
    console.log(res.data)
    dispatch(loginSuccess(res.data))
    navigate('/admin/create-blog')
    toast.success('Đăng nhập thành công!')
  } catch (error) {
    dispatch(loginFailed)
  }
}

export const registerUserApi = async (user, dispatch, navigate) => {
  dispatch(registerStart())
  try {
    const res = await axios.post(`${API_ROOT}/v1/auth/register`, user)
    dispatch(registerSuccess(res.data))
    // navigate('/admin/create-blog')
    toast.success('Tạo tài khoản mới thành công!')
  } catch (error) {
    dispatch(registerFailed())
  }
}