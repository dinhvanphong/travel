import React from 'react'
import { NavLink } from 'react-router-dom'

import { AiFillEdit } from 'react-icons/ai'

const dataMenu = [
  {
    title: 'Quản lý bài viết',
    to: 'admin-blog',
    icon: <AiFillEdit />
  },
  {
    title: 'Quản lý tài khoản',
    to: 'addposts',
    icon: <AiFillEdit />

  },
  {
    title: 'Bài viết đã xóa',
    to: 'deleteposts',
    icon: <AiFillEdit />
  }
]
const active = ' bg-gray-700 text-[#ffffff]'
const normal = ''
// fixed top-0 left-0 z-40
const Sidebar = () => {
  return (
    <aside id="default-sidebar" className="w-[20%] h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
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
                {/* <svg className="w-5 h-5 transition duration-75text-gray-400 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                </svg> */}
                <span className="ms-3">{i.title}</span>
              </NavLink>
              {/* <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">
                <svg className="w-5 h-5 transition duration-75text-gray-400 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                </svg>
                <span className="ms-3">Dashboard</span>
              </a> */}
            </li>

          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar