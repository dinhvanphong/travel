import React from 'react'
import TableBlogList from '~/Admin/Pages/AdminBlog/TableBlogList/TableBlogList'

const BlogList = () => {
  return (
    <div className='w-[80%] px-5 py-5 h-[100vh] overflow-auto'>
      <h1 className='text-center text-2xl font-bold text-gray-800 p-[10px]'>Danh sách bài viết</h1>
      <form className='w-[40%] my-5 border border-gray-400 rounded-md'>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Tìm kiếm theo tên bài viết..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >Tìm kiếm</button>
        </div>
      </form>

      <TableBlogList/>
    </div>
  )
}

export default BlogList