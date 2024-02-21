
import './App.css'
import { Navigate, Outlet, Route, Routes } from 'react-router'
import { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'

import SidebarAd from '~/Admin/component/Sidebar/Sidebar'
import Header from '~/components/Header/Header'
import Footer from '~/components/Footer/Footer'
import NewBlogs from '~/components/NewBlogs/NewBlogs'
// Admin
const CreateBlog = lazy(() => import('./Admin/Pages/AdminBlog/CreateBlog'))
const BlogList = lazy(() => import('./Admin/Pages/BlogList/BlogList'))
const DeletedBlog = lazy(() => import('./Admin/Pages/DeletedBlog/DeletedBlog'))
const Login = lazy(() => import('./Admin/Pages/Login/Login'))
// const Register = lazy(() => import('./Admin/Pages/Register/Register'))
// User
const Home = lazy(() => import('./Pages/Home/Home'))
import LoginUser from '~/Pages/LoginUser/LoginUser'



const MainLayoutAdmin = () => {
  return (
    <div className="flex mx-auto">
      <SidebarAd/>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  )
}

const MainLayoutHome = () => {
  return (
    <div className="">
      <Header/>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
      <Footer/>
    </div>
  )
}

const MainLayoutDetail = () => {
  return (
    <div className="flex mx-auto">
      <Header/>
      <div className='flex'>
        <NewBlogs/>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet/>
        </Suspense>
      </div>
      <Footer/>
    </div>
  )
}

function App() {

  const user = useSelector((state) => state.auth.login.currentUser)
  return (
    <Routes>
      <Route path='login' element={<LoginUser/>}/>
      <Route path='/' element={<MainLayoutHome/>}>
        <Route index element={<Home/>}/>
      </Route>
      <Route path='/admin' element={<MainLayoutAdmin/>}>
        <Route index element={<Login/>}/>
        <Route path='create-blog' element={user ? <CreateBlog/> : <Navigate to={'/admin'}/>}/>
        <Route path='blog-list' element={user ? <BlogList/> : <Navigate to={'/admin'}/>}/>
        <Route path='deleted-blog' element={user ? <DeletedBlog/> : <Navigate to={'/admin'}/>}/>
      </Route>
    </Routes>
  )
}

export default App
