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
import ImgFooterBg from '~/img/footer-bg.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const dataNavbar= [
  {
    title: 'Miền Bắc',
    icon: <AiFillDingtalkCircle />,
    to: 'mien-bac'
  },
  {
    title: 'Miền Trung',
    icon: <AiFillCrown/>,
    to: 'mien-trung'
  },
  {
    title: 'Miền Nam',
    icon: <AiFillSecurityScan/>,
    to: 'mien-nam'
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
  const backgroundImageUrl = `url(${ImgFooterBg})`
  const listBlogs = useSelector((state) => state.blog.listBlogs.allBlogs)

  return (
    <div className='mt-[100px] w-[1400px] max-w-full m-auto min-h-80 mb-10 bg-[#040404b6] bg-fixed bg-bottom' style={{ backgroundImage: backgroundImageUrl }}>
      <SliderHome/>
{/* ================================= */}
      <div className='flex items-center justify-center gap-x-16 py-11 bg-transparent'>
        {dataNavbar.map((i, ind) => (
          <div key={ind} className='flex flex-col justify-center items-center cursor-pointer'>
            <Link className='flex items-center justify-center bg-primary w-[80px] h-[80px] rounded-[50%] duration-300 hover:scale-90'
              to={i.to}
            >
              <div className='text-white text-3xl'>{i.icon}</div>
            </Link>
            <p className='text-2xl text-white font-bold mt-3'>{i.title}</p>
          </div>
        ))}
      </div>
{/* =================================== */}
      <div className='bg-white flex gap-5'>
        <NewBlogs/>
        <div className='w-[100%] min-h-[600px] flex items-center relative'>
          <div className='w-[620px] h-[550px] absolute right-0 rounded-2xl overflow-hidden'>
            <img className='w-full h-full object-cover' src={ImgTest} alt="dasd" />
          </div>
          <div className='w-[620px] min-h-[480px] bg-primary p-8 absolute right-[40%] rounded-2xl opacity-90'>
            <p className='text-xl font-bold text-white mb-4'>Travel là đối tác lý tưởng đồng hành cùng bạn. </p>
            <h2 className='text-5xl mb-4 text-yellow-400'>Chúng tôi tự hào khi giúp bạn khám phá những địa điểm tuyệt vời nhất khắp Việt Nam</h2>
            <p className='text-white'>
              - Tận hưởng danh lam thắng cảnh tuyệt vời, bãi biển tuyệt diệu, và các đô thị hiện đại với danh sách không ngừng các điểm đến hấp dẫn. <br/>
              - Trước khi quyết định, hãy chiêm ngưỡng những hình ảnh đẹp như tranh của những địa điểm bạn sắp đến, giúp bạn dễ dàng lựa chọn nơi phù hợp với mong muốn cá nhân của mình. <br/>
              - Từ những chuyến du lịch thám hiểm đến những kỳ nghỉ thư giãn, chúng tôi mang đến cho bạn nhiều lựa chọn đa dạng phù hợp với mọi sở thích và ngân sách.
            </p>
          </div>
        </div>
      </div>
      <div className='flex gap-16 bg-white'>
{/* ==================================== */}
        <div className='flex-1'>
          <h2 className='uppercase text-xl font-bold py-5'>du lịch mới nhất</h2>
          <ul className='grid grid-cols-2 gap-3'>
            {listBlogs && listBlogs.map(i => (
              <li className='relative w-full h-[220px] group/item' key={i._id}>
                <div className='w-full h-full overflow-hidden rounded-md'>
                  <img className='w-full h-full object-cover group-hover/item:brightness-50 duration-300 cursor-pointer' src={i.imgList[0]} alt="ssad"/>
                </div>
                <p className='absolute text-white bottom-5 px-5 font-bold cursor-pointer'>{i.title}</p>
              </li>
            ))}
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