
import ImgTest from '~/img/mui-ne.jpg'

const NewBlogs = () => {
  return (
    <div className='w-[25%]'>
      <p className='uppercase px-3 py-2 font-semibold w-fit'>Bài viết mới nhất</p>
      <span className='block w-full h-[2px] bg-primary'></span>
      <div>
        <ul className='flex flex-col gap-3 mt-5 group/item'>
          <li className='cursor-pointer'>
            <div className='flex gap-3'>
              <div className='w-full h-[100px] overflow-hidden rounded-[4px]'>
                <img className='hover:scale-110 w-full h-full object-cover duration-300' src={ImgTest} alt="asdsad" />
              </div>
              <p className='hover:text-primary duration-300 text-sm font-semibold'>48h Khám phá Quảng Ninh - Đi đâu, ăn gì, ở đâu tại Quảng Ninh</p>
            </div>
            <span className='block w-full h-[2px] bg-[#d7d7d7] mt-5'></span>
          </li>
          <li className='cursor-pointer'>
            <div className='flex gap-3'>
              <div className='w-full h-[100px] overflow-hidden rounded-[4px]'>
                <img className='hover:scale-110 w-full h-full object-cover duration-300' src={ImgTest} alt="asdsad" />
              </div>
              <p className='hover:text-primary duration-300 text-sm font-semibold'>48h Khám phá Quảng Ninh - Đi đâu, ăn gì, ở đâu tại Quảng Ninh</p>
            </div>
            <span className='block w-full h-[2px] bg-[#d7d7d7] mt-5'></span>
          </li>
          <li className='cursor-pointer'>
            <div className='flex gap-3'>
              <div className='w-full h-[100px] overflow-hidden rounded-[4px]'>
                <img className='hover:scale-110 w-full h-full object-cover duration-300' src={ImgTest} alt="asdsad" />
              </div>
              <p className='hover:text-primary duration-300 text-sm font-semibold'>48h Khám phá Quảng Ninh - Đi đâu, ăn gì, ở đâu tại Quảng Ninh</p>
            </div>
            <span className='block w-full h-[2px] bg-[#d7d7d7] mt-5'></span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NewBlogs