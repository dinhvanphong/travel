import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { AiFillEdit } from 'react-icons/ai'
import { FaTableList } from 'react-icons/fa6'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { MdSwitchAccount } from 'react-icons/md'

import { useSelector } from 'react-redux'

const dataMenu = [
  {
    title: 'Tạo bài viết mới',
    to: 'create-blog',
    icon: <AiFillEdit />
  },
  {
    title: 'Danh sách bài viết',
    to: 'blog-list',
    icon: <FaTableList />
  },
  {
    title: 'Bài viết đã xóa',
    to: 'deleted-blog',
    icon: <RiDeleteBin6Fill />
  },
  {
    title: 'Quản lý tài khoản',
    to: 'account',
    icon: <MdSwitchAccount />
  }
]
const active = 'bg-gray-700 text-[#ffffff]'
const normal = ''

const Sidebar = () => {
  // const [user, setUser] = useState(true)

  const user = useSelector((state) => state.auth.login.currentUser)

  return (
    <aside id="default-sidebar" className="w-[20%] h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className="relative h-full px-3 py-4 overflow-y-auto bg-gray-800">
        <h1 className='text-2xl text-white text-center pb-[18px]'>TRAVEL</h1>
        <ul className="space-y-2 font-medium">
          {dataMenu.map((i, index) => (
            <li key={index}>
              <NavLink
                to={user ? i.to : '/admin'}
                // className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">
                className={({ isActive }) => `${isActive ? active : normal + 'text-white hover:bg-gray-700'} flex items-center p-2 rounded-lg group`}
              >
                {i.icon}
                <span className="ms-3">{i.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className='absolute bottom-9 left-0 right-0 text-white'>
          {user
            ?
            <div>
              <p>Hi, <span>{user.username}</span>!</p>
              <button>Đăng xuất</button>
            </div>
            :
            <div>
              <p>Bạn chưa đăng nhập</p>
            </div>
          }

        </div>
        <p className='absolute bottom-0 left-0 right-0 text-white text-[10px] text-center w-full py-[5px] bg-gray-700'>@2024-DinhVanPhong-2012111002</p>
      </div>
    </aside>
  )
}

export default Sidebar