import React from 'react'
import { NavLink } from 'react-router-dom'

import { AiFillEdit } from 'react-icons/ai'

const dataMenu = [
  {
    title: 'Tạo bài viết mới',
    to: 'create-blog',
    icon: <AiFillEdit />
  },
  {
    title: 'Danh sách bài viết',
    to: 'blog-list',
    icon: <AiFillEdit />
  },
  {
    title: 'Bài viết đã xóa',
    to: 'deleted-blog',
    icon: <AiFillEdit />
  },
  {
    title: 'Quản lý tài khoản',
    to: 'account',
    icon: <AiFillEdit />
  }
]
const active = 'bg-gray-700 text-[#ffffff]'
const normal = ''
// fixed top-0 left-0 z-40
const Sidebar = () => {
  return (
    <aside id="default-sidebar" className="w-[20%] h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className="relative h-full px-3 py-4 overflow-y-auto bg-gray-800">
        <h1 className='text-2xl text-white text-center pb-[18px]'>TRAVEL</h1>
        <ul className="space-y-2 font-medium">
          {dataMenu.map((i, index) => (
            <li key={index}>
              <NavLink
                to={i.to}
                // className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">
                className={({ isActive }) => `${isActive ? active : normal + 'text-white hover:bg-gray-700'} flex items-center p-2 rounded-lg group`}
              >
                {i.icon}
                <span className="ms-3">{i.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <p className='absolute bottom-0 left-0 right-0 text-white text-[10px] text-center w-full py-[5px] bg-gray-700'>@2024-DinhVanPhong-2012111002</p>
      </div>
    </aside>
  )
}

export default Sidebar