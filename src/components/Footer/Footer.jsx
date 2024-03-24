import { list } from 'postcss'
import {
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaInstagramSquare,
  FaSoundcloud,
  FaLinkedinIn
} from 'react-icons/fa'
import ImgFooterBg from '~/img/footer-bg.png'

const Footer = () => {
  const backgroundImageUrl = `url(${ImgFooterBg})`
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
  return (
    <div className='bg-[#1e1e1e] bg-bottom bg-cover bg-no-repeat min-h-9 pt-7 pb-3' style={{ backgroundImage: backgroundImageUrl }}>
      <div className='w-[1400px] max-w-full m-auto'>
        <div className='flex justify-center items-center gap-7'>
          {dataSocial.map((i, ind) =>
            <div key={ind} className='group/item text-[#999] text-[14px] font-semibold uppercase flex justify-center items-center gap-2 cursor-pointer'>
              <div className='group-hover/item:text-white duration-300'>{i.icon}</div>
              <p className='group-hover/item:text-primary duration-300'>{i.title}</p>
            </div>
          )}
        </div>
        <span className='block w-full h-[0.5px] bg-[#616161] my-4'></span>
        <div className='flex justify-center items-center text-[#999] text-[12px]'>
          <p>@2024-Đinh Văn Phóng-2012111002</p>
        </div>
      </div>
    </div>
  )
}

export default Footer