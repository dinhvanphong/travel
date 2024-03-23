import { createSlice } from '@reduxjs/toolkit'

const blogMienTrungSlice = createSlice({
  name:'blogMienTrung',
  initialState: {
    blogMienTrung: {
      blog: null,
      isFetching: false,
      success: false,
      error: false
    }
  },
  reducers:{
    fetchBlogMienTrungStart: (state) => {
      state.blogMienTrung.isFetching = true
    },
    fetchBlogMienTrungSuccess: (state, action) => {
      state.blogMienTrung.isFetching = false
      state.blogMienTrung.success = true
      state.blogMienTrung.blog = action.payload
    },
    fetchBlogMienTrungError: (state) => {
      state.blogMienTrung.isFetching = false
      state.blogMienTrung.success = false
      state.blogMienTrung.error = true
    },
  }
})

export const {
  fetchBlogMienTrungError,
  fetchBlogMienTrungStart,
  fetchBlogMienTrungSuccess
} = blogMienTrungSlice.actions

export default blogMienTrungSlice.reducer