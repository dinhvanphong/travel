import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getMienNamBlogsApi } from '~/redux/apiRequest'
import { useEffect } from 'react'


const MienNam = () => {
  const dispatch = useDispatch()
  const blogMienNam = useSelector((state) => state.blog.blogMienNam.blogs)
  useEffect(() => {
    getMienNamBlogsApi(dispatch)
  }, [])
  return (
    <div className='flex-1 px-7'>
      <h2 className='uppercase text-center text-[24px] font-bold my-4'>khu vực: <span className='text-primary'> miền nam</span></h2>
      <div>
        {blogMienNam && blogMienNam.map(i => (
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

        ))}

      </div>
    </div>
  )
}

export default MienNam