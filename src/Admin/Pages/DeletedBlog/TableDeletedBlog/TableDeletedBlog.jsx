import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlogsDeleteApi, deleteBlogApi, restoreBlogApi } from '~/redux/apiRequest'
import Swal from 'sweetalert2'

const TableDeletedBlog = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const allBlogs = useSelector((state) => state.blogDelete.blogDelete.blog)

  useEffect(() => {
    getAllBlogsDeleteApi(dispatch)
  }, [])

  const handleRestore = async (id) => {
    await restoreBlogApi(id)
      .then(() => getAllBlogsDeleteApi(dispatch))
  }

  const handleClickDelete = (id) => {
    Swal.fire({
      title: 'Bạn có chắc chắn không?',
      text: 'Bài viết này sẽ bị xóa vĩnh viễn!',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#00b0ff',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Hủy',
      confirmButtonText: 'Xóa',
      showLoaderOnConfirm: () => !Swal.isLoading(),
      preConfirm:async () => {
        await deleteBlogApi(id)
          .then(() => getAllBlogsDeleteApi(dispatch))
      }
    })
  }
  return (
    <>
      <div>
        <h1 className='text-center text-2xl font-bold text-gray-800 p-[10px]'>Danh sách bài viết đã xóa</h1>
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>
  {/* TABLE */}
        <div className="relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr className='grid justify-items-stretch grid-cols-12'>
                <th className="px-6 py-3 col-span-4">
                    Tiêu đề
                </th>
                <th className="px-6 py-3 col-span-3">
                    Mô tả
                </th>
                <th className="px-6 py-3 col-span-2">
                    Hình ảnh
                </th>
                <th className="px-6 py-3 col-span-2">
                    Khu vực
                </th>
                <th className="px-6 py-3 col-span-1">
                  <span className="sr-only"></span>
                </th>
              </tr>
            </thead>
            <tbody>
              {allBlogs && allBlogs.filter(item => {
                return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search)
              }).map(blog => (
                <tr key={blog._id} className="grid grid-cols-12 bg-white border-b hover:bg-gray-50 w-full h-[90px]">
                  <th className="col-span-4 px-6 py-4 font-medium text-gray-900">
                    <p className='h-full w-full line-clamp-3 overflow-hidden'>{blog?.title}</p>
                  </th>
                  <td className="col-span-3 px-6 py-4">
                    <p className='h-full w-full line-clamp-3 overflow-hidden'>{blog?.description}</p>
                  </td>
                  <td className="col-span-2 px-6 py-4 truncate">
                    <div className='w-full h-full'>
                      <img className='object-cover w-full h-full' src={blog.imgList[0]} alt="anh" />
                    </div>
                  </td>
                  <td className="col-span-2 px-6 py-4 truncate">
                    {blog?.zones === 'mien-bac' && 'Miền Bắc'}
                    {blog?.zones === 'mien-trung' && 'Miền Trung'}
                    {blog?.zones === 'mien-nam' && 'Miền Nam'}
                  </td>
                  <td className="col-span-1 px-0 py-4 text-center flex justify-center gap-3">
                    <p onClick={() => handleRestore(blog._id)} className="font-medium text-blue-600 cursor-pointer hover:underline">Khôi phục</p>
                    <p onClick={() => handleClickDelete(blog._id)} className="font-medium text-red-600 cursor-pointer hover:underline">Xóa vĩnh viễn</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default TableDeletedBlog