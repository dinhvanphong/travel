import { createSlice } from '@reduxjs/toolkit'

const blogSlice = createSlice({
  name:'blog',
  initialState: {
    listBlogs: {
      allBlogs: null,
      isFetching: false,
      error: false
    },

    blogDetail: {
      blog: null,
      isFetching: false,
      success: false,
      error: false
    },

    createBlog: {
      isFetching: false,
      success: false,
      error: false
    }
  },
  reducers:{
    fetchListBlogStart: (state) => {
      state.listBlogs.isFetching = true
    },
    fetchListBlogSuccess: (state, action) => {
      state.listBlogs.isFetching = false
      state.listBlogs.allBlogs = action.payload
    },
    fetchListBlogError: (state) => {
      state.listBlogs.isFetching = false
      state.listBlogs.error = true
    },
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
    },
    createBlogStart: (state) => {
      state.createBlog.isFetching = true
    },
    createBlogSuccess: (state) => {
      state.createBlog.isFetching = false
      state.createBlog.success = true
    },
    createBlogError: (state) => {
      state.createBlog.isFetching = false
      state.createBlog.success = false
      state.createBlog.error = true
    }
  }
})

export const {
  fetchListBlogStart,
  fetchListBlogSuccess,
  fetchListBlogError,
  fetchBlogDetailError,
  fetchBlogDetailStart,
  fetchBlogDetailSuccess,
  createBlogError,
  createBlogStart,
  createBlogSuccess
} = blogSlice.actions

export default blogSlice.reducer