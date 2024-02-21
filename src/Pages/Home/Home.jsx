import NewBlogs from '~/components/NewBlogs/NewBlogs'
import SliderHome from '~/components/Slider/Slider'
import ImgTest from '~/img/mui-ne.jpg'
import ImgTest1 from '~/img/test.jpg'
import {
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaInstagramSquare,
  FaSoundcloud,
  FaLinkedinIn
} from 'react-icons/fa'
import { AiFillDingtalkCircle, AiFillCrown, AiFillSecurityScan } from 'react-icons/ai'

const dataNavbar= [
  {
    title: 'Miền Bắc',
    icon: <AiFillDingtalkCircle />
  },
  {
    title: 'Miền Trung',
    icon: <AiFillCrown/>
  },
  {
    title: 'Miền Nam',
    icon: <AiFillSecurityScan/>
  }
]

const dataSocial= [
  {
    title: 'youtube',
    icon: <FaYoutube />
  },
  {
    title: 'facebook',
    icon: <FaFacebookF/>
  },
  {
    title: 'twitter',
    icon: <FaTwitter/>
  },
  {
    title: 'instagram',
    icon: <FaInstagramSquare/>
  },
  {
    title: 'soundcloud',
    icon: <FaSoundcloud />
  },
  {
    title: 'linkedin',
    icon: <FaLinkedinIn />
  }
]

const Home = () => {
  return (
    <div className='mt-[100px] w-[1400px] max-w-full m-auto min-h-80 mb-10'>
      <SliderHome/>
{/* ================================= */}
      <div className='flex items-center justify-center gap-x-16 py-11'>
        {dataNavbar.map((i, ind) => (
          <div key={ind} className='flex flex-col justify-center items-center cursor-pointer'>
            <div className='flex items-center justify-center bg-primary w-[80px] h-[80px] rounded-[50%] duration-300 hover:scale-90'>
              <div className='text-white text-3xl'>{i.icon}</div>
            </div>
            <p className='text-2xl font-bold mt-3'>{i.title}</p>
          </div>
        ))}
      </div>
{/* =================================== */}
      <NewBlogs/>
      <div className='flex gap-16'>
{/* ==================================== */}
        <div className='flex-1'>
          <h2 className='uppercase text-xl font-bold py-5'>du lịch mới nhất</h2>
          <ul className='grid grid-cols-2 gap-3'>
            <li className='relative w-full h-[220px] group/item'>
              <div className='w-full h-full overflow-hidden rounded-md'>
                <img className='w-full h-full object-cover group-hover/item:brightness-50 duration-300 cursor-pointer' src={ImgTest} alt="ssad"/>
              </div>
              <p className='absolute text-white bottom-5 px-5 font-bold cursor-pointer'>48h Khám phá Quảng Ninh - Đi đâu, ăn gì, ở đâu tại Quảng Ninh</p>
            </li>
            <li className='relative w-full h-[220px] group/item'>
              <div className='w-full h-full overflow-hidden rounded-md'>
                <img className='w-full h-full object-cover group-hover/item:brightness-50 duration-300 cursor-pointer' src={ImgTest} alt="ssad"/>
              </div>
              <p className='absolute text-white bottom-5 px-5 font-bold cursor-pointer'>48h Khám phá Quảng Ninh - Đi đâu, ăn gì, ở đâu tại Quảng Ninh</p>
            </li>
            <li className='relative w-full h-[220px] group/item'>
              <div className='w-full h-full overflow-hidden rounded-md'>
                <img className='w-full h-full object-cover group-hover/item:brightness-50 duration-300 cursor-pointer' src={ImgTest} alt="ssad"/>
              </div>
              <p className='absolute text-white bottom-5 px-5 font-bold cursor-pointer'>48h Khám phá Quảng Ninh - Đi đâu, ăn gì, ở đâu tại Quảng Ninh</p>
            </li>
            <li className='relative w-full h-[220px] group/item'>
              <div className='w-full h-full overflow-hidden rounded-md'>
                <img className='w-full h-full object-cover group-hover/item:brightness-50 duration-300 cursor-pointer' src={ImgTest} alt="ssad"/>
              </div>
              <p className='absolute text-white bottom-5 px-5 font-bold cursor-pointer'>48h Khám phá Quảng Ninh - Đi đâu, ăn gì, ở đâu tại Quảng Ninh</p>
            </li>
          </ul>
        </div>
{/* ================================== */}
        <div className='flex-1'>
          <div>
            <div>
              <p className='uppercase px-3 py-2 font-semibold w-fit'>Kết nối tới mạng xã hội</p>
              <span className='block w-full h-[2px] bg-primary'></span>
            </div>
            <div>
              <ul className='my-5 flex items-center justify-start gap-3'>
                {dataSocial.map((i, ind) => (
                  <li key={ind} className='cursor-pointer w-[36px] h-[36px] flex items-center justify-center rounded-[50%] border hover:bg-primary duration-300 group/item'>
                    <div className='group-hover/item:text-white duration-300'>
                      {i.icon}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img src={ImgTest1} alt="Ảnh đẹp" />
            </div>
          </div>
        </div>
      </div>
{/* ====================================== */}
    </div>
  )
}

export default Home