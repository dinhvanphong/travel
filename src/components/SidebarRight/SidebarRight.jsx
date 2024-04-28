import React from 'react'
import ImgTest from '~/img/test.jpg'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const SidebarRight = () => {
  const listBlogs = useSelector((state) => state.blog.listBlogs.allBlogs)

  return (
    <div className='w-[300px]'>
      <div className='mb-7'>
        <p className='uppercase px-3 py-2 font-semibold w-fit'>Bài viết mới nhất</p>
        <span className='block w-full h-[2px] bg-primary'></span>
        <ul>
          {listBlogs && listBlogs.slice(0, 6).reverse().map(i => (
            <Link to={`/${i.slug}`} key={i._id}>
              <li className='text-color' >
                <p className='hover:text-primary duration-200 font-normal text-[15px] text-[#333] py-4 cursor-pointer'>{i.title}</p>
                <span className='block w-full h-[1px] bg-[#d7d7d7]'></span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='mb-7'>
        <p className='uppercase px-3 py-2 font-semibold w-fit'>Phản hồi gần đây</p>
        <span className='block w-full h-[2px] bg-primary'></span>
      </div>
      <div>
        <p className='uppercase px-3 py-2 font-semibold w-fit'>about us</p>
        <span className='block w-full h-[2px] bg-primary mb-6'></span>
        <img src={ImgTest} alt="fasd" />
      </div>
    </div>
  )
}

export default SidebarRight