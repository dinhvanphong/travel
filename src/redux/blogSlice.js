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
      success: false,
      error: false
    },
    createBlog: {
      isFetching: false,
      success: false,
      error: false
    },
    // blogDetail: {
    //   blog: null,
    //   isFetching: false,
    //   success: false,
    //   error: false
    // },
    blogMienBac: {
      blogs: null,
      isFetching: false,
      success: false,
      error: false
    },
    blogMienNam: {
      blogs: null,
      isFetching: false,
      success: false,
      error: false
    },
    blogMienTrung: {
      blogs: null,
      isFetching: false,
      success: false,
      error: false
    }
  },
  reducers:{
    // List blog
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
    //  List blog delete
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
    // Create blog
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
    },
    // Blog detail
    // fetchBlogDetailStart: (state) => {
    //   state.blogDetail.isFetching = true
    // },
    // fetchBlogDetailSuccess: (state, action) => {
    //   state.blogDetail.isFetching = false
    //   state.blogDetail.success = true
    //   state.blogDetail.blog = action.payload
    // },
    // fetchBlogDetailError: (state) => {
    //   state.blogDetail.isFetching = false
    //   state.blogDetail.success = false
    //   state.blogDetail.error = true
    // },
    // Blog mienbac
    fetchBlogMienBacStart: (state) => {
      state.blogMienBac.isFetching = true
    },
    fetchBlogMienBacSuccess: (state, action) => {
      state.blogMienBac.isFetching = false
      state.blogMienBac.success = true
      state.blogMienBac.blogs = action.payload
    },
    fetchBlogMienBacError: (state) => {
      state.blogMienBac.isFetching = false
      state.blogMienBac.success = false
      state.blogMienBac.error = true
    },
    // Blog mien nam
    fetchBlogMienNamStart: (state) => {
      state.blogMienNam.isFetching = true
    },
    fetchBlogMienNamSuccess: (state, action) => {
      state.blogMienNam.isFetching = false
      state.blogMienNam.success = true
      state.blogMienNam.blogs = action.payload
    },
    fetchBlogMienNamError: (state) => {
      state.blogMienNam.isFetching = false
      state.blogMienNam.success = false
      state.blogMienNam.error = true
    },
    // Blog mien trung
    fetchBlogMienTrungStart: (state) => {
      state.blogMienTrung.isFetching = true
    },
    fetchBlogMienTrungSuccess: (state, action) => {
      state.blogMienTrung.isFetching = false
      state.blogMienTrung.success = true
      state.blogMienTrung.blogs = action.payload
    },
    fetchBlogMienTrungError: (state) => {
      state.blogMienTrung.isFetching = false
      state.blogMienTrung.success = false
      state.blogMienTrung.error = true
    },
  }
})

export const {
  fetchListBlogStart, fetchListBlogSuccess, fetchListBlogError,
  fetchListBlogDeleteError, fetchListBlogDeleteStart, fetchListBlogDeleteSuccess,
  createBlogError, createBlogStart, createBlogSuccess,
  // fetchBlogDetailError, fetchBlogDetailStart, fetchBlogDetailSuccess,
  fetchBlogMienBacError, fetchBlogMienBacStart, fetchBlogMienBacSuccess,
  fetchBlogMienNamError, fetchBlogMienNamStart, fetchBlogMienNamSuccess,
  fetchBlogMienTrungError, fetchBlogMienTrungStart, fetchBlogMienTrungSuccess
} = blogSlice.actions

export default blogSlice.reducer