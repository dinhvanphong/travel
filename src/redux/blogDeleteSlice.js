import { createSlice } from '@reduxjs/toolkit'

const blogDeleteSlice = createSlice({
  name:'blogDelete',
  initialState: {
    blogDelete: {
      blog: null,
      isFetching: false,
      success: false,
      error: false
    }
  },
  reducers:{
    fetchBlogDeleteStart: (state) => {
      state.blogDelete.isFetching = true
    },
    fetchBlogDeleteSuccess: (state, action) => {
      state.blogDelete.isFetching = false
      state.blogDelete.success = true
      state.blogDelete.blog = action.payload
    },
    fetchBlogDeleteError: (state) => {
      state.blogDelete.isFetching = false
      state.blogDelete.success = false
      state.blogDelete.error = true
    }
  }
})

export const {
  fetchBlogDeleteError,
  fetchBlogDeleteStart,
  fetchBlogDeleteSuccess
} = blogDeleteSlice.actions

export default blogDeleteSlice.reducer