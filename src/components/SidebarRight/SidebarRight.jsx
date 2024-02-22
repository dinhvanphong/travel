import React from 'react'
import ImgTest from '~/img/test.jpg'

const SidebarRight = () => {
  return (
    <div className='w-[300px]'>
      <div className='mb-7'>
        <p className='uppercase px-3 py-2 font-semibold w-fit'>Bài viết mới nhất</p>
        <span className='block w-full h-[2px] bg-primary'></span>
        <ul>
          <li className=''>
            <p className='hover:text-primary duration-200 font-normal text-[15px] text-[#333] py-4 cursor-pointer'>48h Khám phá Quảng Ninh.</p>
            <span className='block w-full h-[2px] bg-[#d7d7d7]'></span>
          </li>
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