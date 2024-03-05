import { createSlice } from '@reduxjs/toolkit'

const blogDetailSlice = createSlice({
  name:'blogDetail',
  initialState: {
    blogDetail: {
      blog: null,
      isFetching: false,
      success: false,
      error: false
    }
  },
  reducers:{
    fetchBlogDetailStart: (state) => {
      state.blogDetail.isFetching = true
    },
    fetchBlogDetailSuccess: (state, action) => {
      state.blogDetail.isFetching = false
      state.blogDetail.success = true
      state.blogDetail.blog = action.payload
    },
    fetchBlogDetailError: (state) => {
      state.blogDetail.isFetching = false
      state.blogDetail.success = false
      state.blogDetail.error = true
    }
  }
})

export const {
  fetchBlogDetailError,
  fetchBlogDetailStart,
  fetchBlogDetailSuccess
} = blogDetailSlice.actions

export default blogDetailSlice.reducer