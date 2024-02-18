import axios from 'axios'
import { loginFailed, loginStart, loginSuccess, registerSuccess, registerFailed, registerStart, logoutStart, logoutFailed, logoutSuccess } from './authSlice'
import { fetchListBlogError, fetchListBlogStart, fetchListBlogSuccess, createBlogError, createBlogStart, createBlogSuccess } from './blogSlice'
import { API_ROOT } from '~/utils/conStants'

import { toast } from 'react-toastify'


export const loginUserApi = async (user, dispatch, navigate) => {
  dispatch(loginStart())
  try {
    const res = await axios.post(`${API_ROOT}/v1/auth/login`, user)
    dispatch(loginSuccess(res.data))
    navigate('/admin/create-blog')
    toast.success('Đăng nhập thành công!')
  } catch (error) {
    dispatch(loginFailed())
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

export const getAllBlogsApi =async(dispatch) => {
  dispatch(fetchListBlogStart())
  try {
    const res = await axios.get(`${API_ROOT}/v1/blogs`)
    dispatch(fetchListBlogSuccess(res.data))
  } catch (error) {
    dispatch(fetchListBlogError())
  }
}

export const createBlogApi = async(data, dispatch, navigate) => {
  dispatch(createBlogStart())
  try {
    const res = await axios.post(`${API_ROOT}/v1/blogs`, data)
    dispatch(createBlogSuccess(res.data))
    toast.success('Tạo bài viết thành công!')
    navigate('/admin/blog-list')
  } catch (error) {
    dispatch(createBlogError())
    toast.error('Tạo bài viết thất bại!')
  }
}


export const logOutApi =async (dispatch, id, navigate) => {
  dispatch(logoutStart())
  try {
    await axios.post(`${API_ROOT}/v1/auth/logout`, id)
    dispatch(logoutSuccess())
    navigate('/admin')
    toast.success('Đăng xuất thành công')
  } catch (error) {
    dispatch(logoutFailed())
  }
}

// export const logOutApi =async (dispatch, id, navigate, accessToken, axiosJWT) => {
//   dispatch(logoutStart())
//   try {
//     await axiosJWT.post(`${API_ROOT}/v1/auth/logout`, id, {
//       headers: { token: `Bearer ${accessToken}` }
//     })
//     dispatch(logoutSuccess())
//     navigate('/admin')
//     toast.success('Đăng xuất thành công')
//   } catch (error) {
//     dispatch(logoutFailed())
//   }
// }