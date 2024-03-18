import { useRef, useState } from 'react'
// import { createNewBlogAPI } from '~/apis/index'
import { createBlogApi } from '~/redux/apiRequest'
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// import jwt_decode from 'jwt-decode'

import TextArea from '~/Admin/component/TextArea/TextArea'
import axios from 'axios'

const AdminBlog = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // let axiosJWT = axios.create()

  const inputRef = useRef()
  const [loading, setLoading] = useState(false)
  // const [valueChecked, setValueChecked] = useState('Miền Bắc')
  const [blog, setBlog] = useState({
    title:'',
    time: '',
    description: '',
    note: '',
    zones: 'mien-bac',
    imgList: []
  })

  // const handleRadioButton = (value) => {
  //   setValueChecked(value)
  // }
  // console.log(valueChecked)
  console.log(blog)

  const uploadFiles =async ( files ) => {
    if (files.length > 0) {
      const CLOUD_NAME = 'dwjfx8vv7'
      const PRESET_NAME = 'travel'
      const FOLDER_NAME = 'travel'
      const urls = []
      const API = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

      const formData = new FormData()
      formData.append('upload_preset', PRESET_NAME)
      formData.append('folder', FOLDER_NAME)

      for (const file of files) {
        formData.append('file', file)
        const response = await axios.post(API, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        urls.push(response.data.url)
      }
      console.log(urls)
      setBlog({ ...blog, imgList: urls })
      return
    }
    console.log('0')
    return
  }

  const createNew =async (e) => {
    e.preventDefault()
    if (blog.title === '' || blog.time === '' || blog.description === '' || blog.note === '') {
      toast.error('Các dữ liệu không được phép để trống!')
      return
    }
    setLoading(true)
    await uploadFiles(inputRef.current.files)
    const formData = {
      title: blog.title,
      time: blog.time,
      description: blog.description,
      note: blog.note,
      zones: blog.zones,
      imgList: blog.imgList
    }
    if (blog.imgList.length <= 0) {
      toast.error('Mời bạn thêm ảnh!')
      setLoading(false)
      return
    }
    createBlogApi(formData, dispatch, navigate)
    setLoading(false)
  }


  return (
    <div className='w-[80%] px-5 py-5 h-[100vh] overflow-auto'>
      <h1 className='text-center text-2xl font-bold text-gray-800 p-[10px]'>Tạo bài viết mới</h1>
      <form onSubmit={createNew}>
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
                onChange={() => setBlog({ ...blog, zones:'Miền Bắc' })}
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


        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="multiple_files">Thêm ảnh</label>
        <input
          className="block mb-6 w-[30%] text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
          id="multiple_files"
          type="file"
          multiple
          ref={inputRef}
          onChange={() => uploadFiles(inputRef.current.files)}
        />

        <div className='flex items-center justify-center'>
          { loading
            ?
            <button disabled type="button" className="text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 inline-flex items-center">
              <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
              </svg>
              Đang tạo mới...
            </button>
            :
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[100px] px-5 py-2.5 text-center">Tạo mới</button>
          }
        </div>
      </form>
    </div>
  )
}

export default AdminBlog