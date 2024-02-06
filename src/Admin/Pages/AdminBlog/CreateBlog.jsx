import React, { useState } from 'react'

import TextArea from '../../component/TextArea/TextArea'
const AdminBlog = () => {
  const [blog, setBlog] = useState({
    title:'',
    time: '',
    description: '',
    note: '',
    imgList: []
  })

  const createNew = (e) => {
    e.preventDefault()
    console.log(blog)
  }
  return (
    <div className='w-[80%] px-5 py-5 h-[100vh] overflow-auto'>
      <h1 className='text-center text-2xl font-bold text-gray-800 p-[10px]'>Tạo bài viết mới</h1>
      <form onSubmit={createNew}>
        <div className="grid gap-6 mb-6 grid-cols-2">
          <TextArea
            title='Tiêu đề của bài viết'
            placeholder='Viết tiêu đề của bạn tại đây...'
            rows='3'
            value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          />
          <TextArea
            title='Thời gian'
            placeholder='Viết thời gian của bạn tại đây...'
            rows='3'
            value={blog.time}
            onChange={(e) => setBlog({ ...blog, time: e.target.value })}
          />
        </div>
        <div className="mb-6">
          <TextArea
            title='Mô tả'
            placeholder='Viết mô tả của bạn tại đây...'
            rows='10'
            value={blog.description}
            onChange={(e) => setBlog({ ...blog, description: e.target.value })}
          />
        </div>
        <div className="mb-6">
          <TextArea
            title='Lưu ý'
            placeholder='Viết lưu ý của bạn tại đây...'
            rows='3'
            value={blog.note}
            onChange={(e) => setBlog({ ...blog, note: e.target.value })}
          />
        </div>

        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="multiple_files">Thêm ảnh</label>
        <input className="block mb-6 w-[30%] text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" id="multiple_files" type="file" multiple/>

        <div className='flex items-center justify-center'>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[100px] px-5 py-2.5 text-center">Tạo</button>
        </div>
      </form>
    </div>
  )
}

export default AdminBlog