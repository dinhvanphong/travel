import { createSlice } from '@reduxjs/toolkit'

const blogMienNamSlice = createSlice({
  name:'blogMienNam',
  initialState: {
    blogMienNam: {
      blog: null,
      isFetching: false,
      success: false,
      error: false
    }
  },
  reducers:{
    fetchBlogMienNamStart: (state) => {
      state.blogMienNam.isFetching = true
    },
    fetchBlogMienNamSuccess: (state, action) => {
      state.blogMienNam.isFetching = false
      state.blogMienNam.success = true
      state.blogMienNam.blog = action.payload
    },
    fetchBlogMienNamError: (state) => {
      state.blogMienNam.isFetching = false
      state.blogMienNam.success = false
      state.blogMienNam.error = true
    },
  }
})

export const {
  fetchBlogMienNamError,
  fetchBlogMienNamStart,
  fetchBlogMienNamSuccess
} = blogMienNamSlice.actions

export default blogMienNamSlice.reducer