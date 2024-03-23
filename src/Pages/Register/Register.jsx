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
    <div className="flex flex-col items-center justify-center w-full h-[100vh] bg-[url('/src/img/logo.png')] bg-no-repeat bg-center">
      <form className="border border-primary rounded-md h-fit p-6 w-[50vw] backdrop-blur-xl bg-slate-200/80 shadow-[0px_0px_90px_0px_#C0D6E8]" onSubmit={handleRegister}>
        <h1 className='my-5 text-3xl text-primary text-center font-bold'>Đăng ký</h1>
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
        <div className='flex flex-col items-center gap-3'>
          <button type="submit" className="mt-2 text-primary bg-white/90 hover:bg-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Đăng ký</button>
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