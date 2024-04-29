import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getFindBlogApi } from '~/redux/apiRequest'


const Search = () => {
  const { title } = useParams()
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    getFindBlogApi(title)
      .then(res => setBlogs(res))
  }, [title])

  return (
    <div className='flex-1 px-7'>
      <h2 className='uppercase text-center text-[24px] font-bold my-4'>kết quả tìm kiếm với: <span className='text-primary'>{title}</span></h2>
      <div>
        {blogs.length > 0
          ?
          blogs.map(i => (
            <div key={i._id} className=' cursor-pointer'>
              <div className='flex gap-4'>
                <div className='w-[320px] h-[215px] overflow-hidden rounded-sm'>
                  <img className='w-full h-full object-cover' src={i.imgList[0]} alt="sda" />
                </div>
                <Link className='flex-1' to={`/${i.slug}`}>
                  <span className='text-primary text-[13px] cursor-pointer'>Travel</span>
                  <h3 className='text-[18px] font-semibold my-2'>{i.title}</h3>
                  <p className='line-clamp-3 overflow-hidden text-[#333]'>{i.description}</p>
                </Link>
              </div>
              <span className='block w-full h-[1px] bg-[#d7d7d7] my-7'></span>
            </div>
          ))
          :
          <p className='text-center'>Không tìm thấy kết quả.</p>
        }
      </div>
    </div>
  )
}

export default Search