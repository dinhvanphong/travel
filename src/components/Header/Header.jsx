import { useState} from 'react'
import {
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaInstagramSquare,
  FaSoundcloud,
  FaLinkedinIn
} from 'react-icons/fa'
import Logo from '~/img/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { logOutUserApi } from '~/redux/apiRequest'

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
    title: 'Trang chủ',
    to: '/'
  },
  {
    title: 'Miền Bắc',
    to: '/mien-bac'
  },
  {
    title: 'Miền Trung',
    to: '/mien-trung'
  },
  {
    title: 'Miền Nam',
    to: '/mien-nam'
  }
]

const active = 'text-primary'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.loginUser.currentUser)
  const id = user?._id
  const [valueSearch, setValueSearch] = useState('')
  const handleLogout = () => {
    logOutUserApi(dispatch, id, navigate)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/search/${valueSearch}`)
    console.log(valueSearch)
  }
  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
      <div className="max-w-[1400px] w-full flex flex-wrap items-center justify-between mx-auto py-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-8" alt="travel Logo"/>
          <span className="self-center text-2xl font-semibold whitespace-nowrap">TRAVEL</span>
        </Link>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            {dataNavbar.map((i, ind) => (
              <li key={ind}>
                <NavLink
                  to={i.to}
                  className={({ isActive }) => `${isActive ? active : ''} block py-2 px-3 font-bold text-gray-900 rounded hover:text-primary duration-200`}
                >
                  <p className="">{i.title}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className='md:order-2 flex items-center justify-center gap-4'>
          {/* Search */}
          <form onSubmit={handleSearch} className="mx-auto border border-[#666] rounded-md h-full">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input
                type="search" id="default-search"
                value={valueSearch}
                onChange={(e) => setValueSearch(e.target.value)}
                className="block w-full h-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 placeholder:text-[12px]"
                placeholder="Bạn muốn tìm gì..." required />
            </div>
          </form>

          <ul className='flex items-center justify-center gap-2'>
            {dataSocial.map((i, ind) => (
              <li className='text-xs hover:text-primary duration-200 cursor-pointer' key={ind}>{i.icon}</li>
            ))}
          </ul>
          <span className='block h-6 w-[1px] bg-[#999]'></span>
          {user
            ?<div className="flex justify-center items-center gap-5 md:space-x-0 rtl:space-x-reverse">
              <p className='font-bold'>Hi, <span className='text-primary'>{user?.username}</span></p>
              <button onClick={handleLogout} type="button" className="text-white outline outline-1 outline-primary bg-primary hover:bg-blue-500 rounded-lg text-sm px-4 py-2 text-center">Đăng xuất</button>
            </div>
            :<div className="flex gap-1 md:space-x-0 rtl:space-x-reverse">
              <button onClick={() => navigate('/register')} type="button" className="text-gray-900 outline outline-1 rounded-lg text-sm px-4 py-2 text-center">Đăng ký</button>
              <button onClick={() => navigate('/login')} type="button" className="text-white outline outline-1 outline-primary bg-primary hover:bg-blue-500 rounded-lg text-sm px-4 py-2 text-center">Đăng nhập</button>
            </div>
          }
        </div>
      </div>
    </nav>

  )
}

export default Header