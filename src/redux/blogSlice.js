import { createSlice } from '@reduxjs/toolkit'

const blogSlice = createSlice({
  name:'blog',
  initialState: {
    listBlogs: {
      allBlogs: null,
      isFetching: false,
      error: false
    },
    listBlogsDelete: {
      allBlogs: null,
      isFetching: false,
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
    fetchListBlogDeleteStart: (state) => {
      state.listBlogsDelete.isFetching = true
    },
    fetchListBlogDeleteSuccess: (state, action) => {
      state.listBlogsDelete.isFetching = false
      state.listBlogsDelete.allBlogs = action.payload
    },
    fetchListBlogDeleteError: (state) => {
      state.listBlogsDelete.isFetching = false
      state.listBlogsDelete.error = true
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
  fetchListBlogDeleteError,
  fetchListBlogDeleteStart,
  fetchListBlogDeleteSuccess,
  createBlogError,
  createBlogStart,
  createBlogSuccess
} = blogSlice.actions

export default blogSlice.reducer