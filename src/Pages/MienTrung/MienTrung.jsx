import React from 'react'
import ImgTest from '~/img/quang-ninh.jpg'


const MienTrung = () => {
  return (
    <div className='flex-1 px-7'>
      <h2 className='uppercase text-center text-[24px] font-bold my-4'>khu vực: <span className='text-primary'> miền trung</span></h2>
      <div>
        <div className=' cursor-pointer'>
          <div className='flex gap-4'>
            <div className='w-[320px] h-[215px] overflow-hidden rounded-sm'>
              <img className='w-full h-full object-cover' src={ImgTest} alt="sda" />
            </div>
            <div className='flex-1'>
              <span className='text-primary text-[13px] cursor-pointer'>Travel</span>
              <h3 className='text-[18px] font-semibold my-2'>48h kham pha quang ninh</h3>
              <p className='line-clamp-3 overflow-hidden text-[#333]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni ad doloremque maxime tempore delectus nostrum modi quod, non molestias at, doloribus nemo repellat ipsam, ea perspiciatis quam sapiente sit. Voluptatem quaerat at provident molestias a rerum, hic eligendi ratione? Cupiditate corrupti, aspernatur omnis necessitatibus nobis quaerat natus repellat esse minima!</p>
            </div>
          </div>
          <span className='block w-full h-[1px] bg-[#d7d7d7] my-7'></span>
        </div>

      </div>
    </div>
  )
}

export default MienTrung