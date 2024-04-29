import axios from 'axios'
import {
  loginFailed, loginStart, loginSuccess,
  registerSuccess, registerFailed, registerStart,
  logoutStart, logoutFailed, logoutSuccess,
  loginUserFailed, loginUserSuccess, loginUserStart, logoutUserFailed, logoutUserStart, logoutUserSuccess
} from './authSlice'
import {
  fetchListBlogError, fetchListBlogStart, fetchListBlogSuccess,
  createBlogError, createBlogStart, createBlogSuccess,
  fetchListBlogDeleteError, fetchListBlogDeleteStart, fetchListBlogDeleteSuccess,
  // fetchBlogDetailError, fetchBlogDetailStart, fetchBlogDetailSuccess,
  fetchBlogMienBacError, fetchBlogMienBacStart, fetchBlogMienBacSuccess,
  fetchBlogMienNamError, fetchBlogMienNamStart, fetchBlogMienNamSuccess,
  fetchBlogMienTrungError, fetchBlogMienTrungStart, fetchBlogMienTrungSuccess
} from './blogSlice'

import { API_ROOT } from '~/utils/conStants'
import { toast } from 'react-toastify'


// --------------------- AUTH --------------------------------
// ok
export const loginAdminApi = async (user, dispatch, navigate) => {
  dispatch(loginStart())
  try {
    const res = await axios.post(`${API_ROOT}/v1/auth/login`, user)
    dispatch(loginSuccess(res.data))
    navigate('/admin/create-blog')
    toast.success('Đăng nhập thành công!')
  } catch (error) {
    dispatch(loginFailed())
    toast.error('Tài khoản hoặc mật khẩu không chính xác!')
  }
}
// ok
export const loginUserApi = async (user, dispatch, navigate) => {
  dispatch(loginUserStart())
  try {
    const res = await axios.post(`${API_ROOT}/v1/auth/loginUser`, user)
    dispatch(loginUserSuccess(res.data))
    navigate('/')
    toast.success('Đăng nhập thành công!')
  } catch (error) {
    toast.error('Tài khoản hoặc mật khẩu không chính xác!')
    dispatch(loginUserFailed())
  }
}
// ok
export const registerUserApi = async (user, dispatch, navigate) => {
  dispatch(registerStart())
  try {
    await axios.post(`${API_ROOT}/v1/auth/register`, user)
    dispatch(registerSuccess())
    navigate('/login')
    toast.success('Tạo tài khoản mới thành công!')
  } catch (error) {
    dispatch(registerFailed())
  }
}

// ok
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
// ok
export const logOutUserApi =async (dispatch, id, navigate) => {
  dispatch(logoutUserStart())
  try {
    await axios.post(`${API_ROOT}/v1/auth/logoutUser`, id)
    dispatch(logoutUserSuccess())
    navigate('/')
    toast.success('Đăng xuất thành công')
  } catch (error) {
    dispatch(logoutUserFailed())
  }
}
// --------------------- BLOG --------------------------------
// ok
export const getAllBlogsApi =async(dispatch) => {
  dispatch(fetchListBlogStart())
  try {
    const res = await axios.get(`${API_ROOT}/v1/blogs`)
    dispatch(fetchListBlogSuccess(res.data))
  } catch (error) {
    dispatch(fetchListBlogError())
  }
}

// ok
export const getAllBlogsPaginationApi = async(page, limit) => {
  try {
    const res = await axios.get(`${API_ROOT}/v1/blogs/pagination?page=${page}&limit=${limit}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
// ok
export const getAllBlogsDeleteApi =async(dispatch) => {
  dispatch(fetchListBlogDeleteStart())
  try {
    const res = await axios.get(`${API_ROOT}/v1/blogs/deleted`)
    dispatch(fetchListBlogDeleteSuccess(res.data))
  } catch (error) {
    dispatch(fetchListBlogDeleteError())
  }
}
// ok
export const getBlogDetailApi =async(slug) => {

  try {
    const res = await axios.get(`${API_ROOT}/v1/blogs/${slug}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
// ok
export const getMienBacBlogsApi =async(dispatch) => {
  dispatch(fetchBlogMienBacStart())
  try {
    const res = await axios.get(`${API_ROOT}/v1/blogs/mien-bac`)
    dispatch(fetchBlogMienBacSuccess(res.data))
  } catch (error) {
    dispatch(fetchBlogMienBacError())
  }
}
// ok
export const getMienTrungBlogsApi =async(dispatch) => {
  dispatch(fetchBlogMienTrungStart())
  try {
    const res = await axios.get(`${API_ROOT}/v1/blogs/mien-trung`)
    dispatch(fetchBlogMienTrungSuccess(res.data))
  } catch (error) {
    dispatch(fetchBlogMienTrungError())
  }
}
// ok
export const getMienNamBlogsApi =async(dispatch) => {
  dispatch(fetchBlogMienNamStart())
  try {
    const res = await axios.get(`${API_ROOT}/v1/blogs/mien-nam`)
    dispatch(fetchBlogMienNamSuccess(res.data))
  } catch (error) {
    dispatch(fetchBlogMienNamError())
  }
}
// ok
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
// ok
export const updateBlogApi = async(id, data) => {
  try {
    const res =await axios.put(`${API_ROOT}/v1/blogs/${id}`, data)
    toast.success('Sửa bài viết thành công!')
    return res.data
  } catch (error) {
    toast.error('Sửa bài viết thất bại!')
  }
}
// ok
export const deleteBlogApi = async(id) => {
  try {
    const res =await axios.delete(`${API_ROOT}/v1/blogs/${id}`)
    toast.success('Xóa bài viết thành công!')
    return res.data
  } catch (error) {
    toast.error('Xóa bài viết thất bại!')
  }
}
// ok
export const hiddenBlogApi = async(id) => {
  try {
    const res =await axios.put(`${API_ROOT}/v1/blogs/hidden/${id}`)
    toast.success('Ẩn bài viết thành công!')
    return res.data
  } catch (error) {
    toast.error('Ẩn bài viết thất bại!')
  }
}
// ok
export const restoreBlogApi = async(id) => {
  try {
    const res =await axios.put(`${API_ROOT}/v1/blogs/restore/${id}`)
    toast.success('Khôi phục bài viết thành công!')
    return res.data
  } catch (error) {
    toast.error('Khôi phục bài viết thất bại!')
  }
}


// --------------------- COMMENT --------------------------------

export const commentApi = async(data) => {
  try {
    const res =await axios.post(`${API_ROOT}/v1/comment`, data)
    toast.success('Bình luận bài viết thành công!')
    return res.data
  } catch (error) {
    toast.error('Bình luận viết thất bại!')
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