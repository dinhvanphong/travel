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
    <div className="relative flex flex-col items-center justify-center w-full h-[100vh]">
      <img className='absolute w-full h-full object-cover' src="/src/img/auth.jpg" alt="adsa" />
      <form className="border border-white rounded-md h-fit p-6 w-[50vw] backdrop-blur-sm bg-transparent" onSubmit={handleRegister}>
        <h1 className='my-5 text-3xl text-white text-center font-bold'>Đăng ký</h1>
        <div className="mb-5">
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">Nhập tên người dùng</label>
          <input
            type="text"
            id="username"
            className="bg-white/30 border border-primary text-white placeholder:text-white/80 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-[0px_0px_10px_#424242]"
            placeholder="Nhập tên người dùng..."
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Nhập email</label>
          <input
            type="email"
            id="email"
            className="bg-white/30 border border-primary text-white placeholder:text-white/80 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-[0px_0px_10px_#424242]"
            placeholder="Nhập email..."
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-1">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Nhập mật khẩu</label>
          <input
            type="password"
            id="password"
            className="bg-white/30 border border-primary text-white placeholder:text-white/80 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-[0px_0px_10px_#424242]"
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