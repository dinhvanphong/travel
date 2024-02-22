import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginAdminApi } from '~/redux/apiRequest'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const msg = useSelector(state => state.auth.login.msg)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const handleLogin = (e) => {
    e.preventDefault()
    const newUser = {
      username: username,
      password: password
    }
    loginAdminApi(newUser, dispatch, navigate)
  }
  return (
    <div className='flex items-center justify-center w-full'>
      <form className="border rounded-md h-fit p-6 w-[50%]" onSubmit={handleLogin}>
        <div className="mb-5">
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Nhập tên người dùng</label>
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
        <div className="mb-1">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Nhập mật khẩu</label>
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
        <p className='mt-2 text-red-500'>{msg}</p>
        <button type="submit" className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
      </form>
    </div>
  )
}

export default Login