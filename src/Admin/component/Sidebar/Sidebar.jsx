
import { NavLink, useNavigate } from 'react-router-dom'

import { AiFillEdit } from 'react-icons/ai'
import { FaTableList } from 'react-icons/fa6'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { MdSwitchAccount } from 'react-icons/md'

import { useDispatch, useSelector } from 'react-redux'
import { logOutApi } from '~/redux/apiRequest'
import ImgAdmin from '~/img/admin.png'
import Logo from '~/img/logo.png'


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
  // {
  //   title: 'Quản lý tài khoản',
  //   to: 'account',
  //   icon: <MdSwitchAccount />
  // }
]
const active = 'bg-gray-700 text-[#ffffff]'
const normal = ''

const Sidebar = () => {
  // const [user, setUser] = useState(true)

  const user = useSelector((state) => state.auth.login.currentUser)
  // const accessToken = user?.accessToken
  const id = user?._id
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // let axiosJWT = createAxios(user, dispatch, logoutSuccess)
  const handleLogout = () => {
    logOutApi(dispatch, id, navigate)
  }
  return (
    <aside id="default-sidebar" className="w-[20%] h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className="relative h-full px-3 py-4 overflow-y-auto bg-gray-800">
        <h1 className='text-2xl text-white text-center pb-[18px] flex items-center justify-center gap-1'>
          <img className='w-8 h-8 rounded-[50%]' src={Logo} alt="logo" />
          TRAVEL
        </h1>
        {user &&
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
        }
        <img className='my-5' src={ImgAdmin} alt="sad" />
        <div className='absolute bottom-10 left-0 right-0 text-white'>
          {user
            ?
            <div className='flex flex-col justify-center items-center'>
              <p className='text-xl'>Hi, <span>{user.username}</span>!</p>
              <button className='bg-slate-600 px-3 py-1 rounded-md mt-3 hover:bg-slate-500 duration-200' onClick={handleLogout}>Đăng xuất</button>
            </div>
            :
            <div className='flex justify-center text-xl'>
              <p>Bạn chưa đăng nhập!</p>
            </div>
          }

        </div>
        <p className='absolute bottom-0 left-0 right-0 text-white text-[10px] text-center w-full py-[5px] bg-gray-700'>@2024-DinhVanPhong-2012111002</p>
      </div>
    </aside>
  )
}

export default Sidebar