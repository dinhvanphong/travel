import { createSlice } from '@reduxjs/toolkit'

const blogMienBacSlice = createSlice({
  name:'blogMienBac',
  initialState: {
    blogMienBac: {
      blog: null,
      isFetching: false,
      success: false,
      error: false
    }
  },
  reducers:{
    fetchBlogMienBacStart: (state) => {
      state.blogMienBac.isFetching = true
    },
    fetchBlogMienBacSuccess: (state, action) => {
      state.blogMienBac.isFetching = false
      state.blogMienBac.success = true
      state.blogMienBac.blog = action.payload
    },
    fetchBlogMienBacError: (state) => {
      state.blogMienBac.isFetching = false
      state.blogMienBac.success = false
      state.blogMienBac.error = true
    }
  }
})

export const {
  fetchBlogMienBacError,
  fetchBlogMienBacStart,
  fetchBlogMienBacSuccess
} = blogMienBacSlice.actions

export default blogMienBacSlice.reducer