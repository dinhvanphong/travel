import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Comment from '~/components/Comment/Comment'
import { getBlogDetailApi } from '~/redux/apiRequest'
import { useDispatch, useSelector } from 'react-redux'

const DetailBlog = () => {
  const { slug } = useParams()
  const dispatch = useDispatch()
  const blog = useSelector((state) => state.blogDetail.blogDetail.blog)

  useEffect(() => {
    getBlogDetailApi(dispatch, slug)
  }, [slug])


  return (
    <div className='flex-1 px-7 mt-4'>
      <div>
        <h1 className='text-4xl font-bold text-[#313131]'>{blog.title}</h1>
        <p className='text-[#777] font-bold py-3'>{blog.title}</p>
        <img className='bg-center' src={blog.imgList[0]} alt="asd" />
        <div>
          <p className='py-4 text-lg font-bold text-primary'>Thời điểm thích hợp nhất để bạn đến đây:</p>
          <p className='pl-4 '>{blog.time}</p>
        </div>
        <div>
          <p className='py-4 text-lg font-bold text-primary'>Giới thiệu</p>
          <p className='pl-4'>{blog.description}</p>
        </div>
        <div>
          <p className='py-4 text-lg font-bold text-primary'>Một số lưu ý:</p>
          <p className='pl-4'>{blog.note}</p>
        </div>
        <div className='grid grid-cols-3 gap-3 my-4'>
          {blog.imgList.map((i, ind) => (
            <div className='w-full h-full rounded overflow-hidden' key={ind}>
              <img className='w-full h-full object-cover hover:scale-110 duration-200' src={i} alt="sda" />
            </div>
          ))}

        </div>
      </div>
      <Comment/>
    </div>
  )
}

export default DetailBlog