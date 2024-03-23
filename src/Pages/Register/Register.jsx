import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { registerUserApi } from '~/redux/apiRequest'

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()
    const newUser = {
      username: username,
      password: password,
      email: email
    }
    registerUserApi(newUser, dispatch, navigate)
  }
  return (
    <div className='flex flex-col items-center justify-center w-full h-[100vh]'>
      <h1 className='my-5 text-3xl text-primary font-bold'>Đăng ký</h1>
      <form className="border rounded-md h-fit p-6 w-[50vw]" onSubmit={handleRegister}>
        <div className="mb-5">
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-primary">Nhập tên người dùng</label>
          <input
            type="text"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Nhập tên người dùng..."
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-primary">Nhập email</label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Nhập email..."
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-1">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-primary">Nhập mật khẩu</label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Nhập mật khẩu..."
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* <p className='mt-2 text-red-500'>{msg}</p> */}
        <div className='flex items-center justify-between'>
          <button type="submit" className="mt-2 text-white bg-primary hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Đăng ký</button>
          <div className='flex gap-3'>
            <Link to='/' className='cursor-pointer italic text-white hover:underline duration-200'>Trang chủ</Link>
            <Link to='/login' className='cursor-pointer italic text-white hover:underline duration-200'>Đăng nhập</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register