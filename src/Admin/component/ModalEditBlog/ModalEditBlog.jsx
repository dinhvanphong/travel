import React, { useState } from 'react'
import TextArea from '../TextArea/TextArea'
import { updateBlogApi } from '~/redux/apiRequest'

const ModalEditBlog = (props) => {
  const { blogEdit, setBlogEdit, setIsOpenModalEdit } = props
  const [loading, setLoading] = useState(false)
  const [blog, setBlog] = useState({
    title:blogEdit.title,
    time: blogEdit.time,
    description: blogEdit.description,
    note: blogEdit.note,
    zones: blogEdit.zones
    // imgList: []
  })
  const handleUpdate =async (e) => {
    e.preventDefault()
    setLoading(true)
    await updateBlogApi(blogEdit._id, blog)
      .then(() => setBlogEdit({}))
      .then(() => setIsOpenModalEdit(false))
    setLoading(false)
  }
  return (
    <div id="static-modal" data-modal-backdrop="static" tabIndex="-1" aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 px-2 z-50 justify-center items-center w-full md:inset-0 h-[100vh] bg-[#1e1e1e6f]">
      <form onSubmit={handleUpdate} className='relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[80%] max-h-[80%]'>
        <div className="">
          {/* <!-- Modal content --> */}
          <div className="relative w-full p-5 bg-white rounded-lg shadow">
            <button onClick={() => setIsOpenModalEdit(false)} type="button" className="w-8 h-8 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm ms-auto flex justify-center items-center" data-modal-hide="default-modal">
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </button>
            {/* Thông tin cá nhân */}
            <div className='w-full flex flex-col items-center'>
              <h3 className="text-xl sm:text-2xl font-semibold pb-[20px] text-primary">
                Thông tin cá nhân
              </h3>
              <div className="w-full">
                <div className="grid gap-6 mb-6 grid-cols-2">
                  <TextArea
                    title='Tiêu đề của bài viết'
                    placeholder='Viết tiêu đề của bài viết tại đây...'
                    rows='3'
                    value={blog.title}
                    onChange={(e) => setBlog({ ...blog, title: e.target.value })}
                  />
                  <TextArea
                    title='Thời gian'
                    placeholder='Thời điểm đẹp nhất để đến địa điểm này?'
                    rows='3'
                    value={blog.time}
                    onChange={(e) => setBlog({ ...blog, time: e.target.value })}
                  />
                </div>
                <div className="mb-6">
                  <TextArea
                    title='Mô tả'
                    placeholder='Viết mô tả của bài viết tại đây...'
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
                <div>
                  <p className='text-sm font-medium text-gray-900 mb-1'>Khu vực</p>
                  <div className="flex flex-wrap mb-6">
                    <div className="flex items-center me-4">
                      <input
                        id="red-radio"
                        type="radio"
                        value="mien-bac"
                        checked={blog.zones === 'mien-bac'}
                        onChange={() => setBlog({ ...blog, zones:'mien-bac' })}
                        name="colored-radio"
                        className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500"
                      />
                      <label htmlFor="red-radio" className="ms-2 text-sm font-medium text-gray-500">Miền Bắc</label>
                    </div>
                    <div className="flex items-center me-4">
                      <input
                        id="green-radio" type="radio" value="mien-trung" name="colored-radio"
                        checked= {blog.zones === 'mien-trung'}
                        onChange={() => setBlog({ ...blog, zones:'mien-trung' })}
                        className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500"
                      />
                      <label htmlFor="green-radio" className="ms-2 text-sm font-medium text-gray-500">Miền Trung</label>
                    </div>
                    <div className="flex items-center me-4">
                      <input
                        id="purple-radio" type="radio" value="mien-nam" name="colored-radio"
                        checked={blog.zones === 'mien-nam'}
                        onChange={() => setBlog({ ...blog, zones:'mien-nam' })}
                        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500"
                      />
                      <label htmlFor="purple-radio" className="ms-2 text-sm font-medium text-gray-500">Miền Nam</label>
                    </div>
                  </div>
                </div>
              </div>
              {/* Button */}
              <div className='w-full  flex items-center justify-center mt-5'>
                {loading
                  ?
                  <button className='w-full sm:w-auto px-4 py-2 bg-[#0083C2] text-white rounded-md'>
                    <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                    </svg>
                    Đang cập nhật...
                  </button>
                  :
                  <button type='submit' className='w-full sm:w-auto px-4 py-2 bg-primary text-white rounded-md dark:bg-primary/80 dark:hover:bg-primary'>Cập nhật</button>
                }
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ModalEditBlog