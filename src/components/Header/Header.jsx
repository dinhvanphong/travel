import { useState } from 'react'
import {
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaInstagramSquare,
  FaSoundcloud,
  FaLinkedinIn
} from 'react-icons/fa'

const dataSocial= [
  {
    icon: <FaYoutube />
  },
  {
    icon: <FaFacebookF/>
  },
  {
    icon: <FaTwitter/>
  },
  {
    icon: <FaInstagramSquare/>
  },
  {
    icon: <FaSoundcloud />
  },
  {
    icon: <FaLinkedinIn />
  }
]

const dataNavbar = [
  {
    title: 'Trang chủ'
  },
  {
    title: 'Miền Bắc'
  },
  {
    title: 'Miền Trung'
  },
  {
    title: 'Miền Nam'
  }
]


const Header = () => {
  const [user, setUser] = useState(null)
  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
      <div className="max-w-[1400px] w-full flex flex-wrap items-center justify-between mx-auto py-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"/>
          <span className="self-center text-2xl font-semibold whitespace-nowrap">TRAVEL</span>
        </a>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            {dataNavbar.map((i, ind) => (
              <li key={ind}>
                <a href="#" className="block py-2 px-3 font-bold text-gray-900 rounded hover:text-primary duration-200">{i.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className='md:order-2 flex items-center justify-center gap-4'>
          <ul className='flex items-center justify-center gap-2'>
            {dataSocial.map((i, ind) => (
              <li className='text-xs hover:text-primary duration-200 cursor-pointer' key={ind}>{i.icon}</li>
            ))}
          </ul>
          <span className='block h-6 w-[1px] bg-[#999]'></span>
          {user
            ?<div className="flex justify-center items-center gap-5 md:space-x-0 rtl:space-x-reverse">
              <p className='font-bold'>Hi, <span className='text-primary'>Phóng</span></p>
              <button type="button" className="text-white outline outline-1 outline-primary bg-primary hover:bg-blue-500 rounded-lg text-sm px-4 py-2 text-center">Đăng xuất</button>
            </div>
            :<div className="flex gap-1 md:space-x-0 rtl:space-x-reverse">
              <button type="button" className="text-gray-900 outline outline-1 rounded-lg text-sm px-4 py-2 text-center">Đăng ký</button>
              <button type="button" className="text-white outline outline-1 outline-primary bg-primary hover:bg-blue-500 rounded-lg text-sm px-4 py-2 text-center">Đăng nhập</button>
            </div>
          }
        </div>
      </div>
    </nav>

  )
}

export default Header