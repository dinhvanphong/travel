
import './App.css'
import { Navigate, Outlet, Route, Routes } from 'react-router'
import { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'

import SidebarAd from '~/Admin/component/Sidebar/Sidebar'
import Header from '~/components/Header/Header'
import Footer from '~/components/Footer/Footer'
import NewBlogs from '~/components/NewBlogs/NewBlogs'
import SidebarRight from '~/components/SidebarRight/SidebarRight'
// Admin
const CreateBlog = lazy(() => import('./Admin/Pages/AdminBlog/CreateBlog'))
const BlogList = lazy(() => import('./Admin/Pages/BlogList/BlogList'))
const DeletedBlog = lazy(() => import('./Admin/Pages/DeletedBlog/DeletedBlog'))
const Login = lazy(() => import('./Admin/Pages/Login/Login'))
// const Register = lazy(() => import('./Admin/Pages/Register/Register'))
// User
const Home = lazy(() => import('./Pages/Home/Home'))
// const Detail = lazy(() => import('./Pages/Detail/Detail'))
const DetailBlog = lazy(() => import('./Pages/DetailBlog/DetailBlog'))
const MienBac = lazy(() => import('./Pages/MienBac/MienBac'))
const MienTrung = lazy(() => import('./Pages/MienTrung/MienTrung'))
const MienNam = lazy(() => import('./Pages/MienNam/MienNam'))
import LoginUser from '~/Pages/LoginUser/LoginUser'
import Register from '~/Pages/Register/Register'
import ScrollToTopButton from '~/components/ScrollToTopButton/ScrollToTopButton'


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
      <ScrollToTopButton/>
    </div>
  )
}

const MainLayoutDetail = () => {
  return (
    <div className="">
      <Header/>
      <div className='flex mt-[100px] w-[1400px] max-w-full m-auto min-h-80 mb-10'>
        <NewBlogs/>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet/>
        </Suspense>
        <SidebarRight/>
      </div>
      <Footer/>
    </div>
  )
}

function App() {

  const user = useSelector((state) => state.auth.login.currentUser)
  return (
    <Routes>
      <Route path='/' element={<MainLayoutHome/>}>
        <Route index element={<Home/>}/>
      </Route>

      <Route path='/' element={<MainLayoutDetail/>}>
        <Route path='mien-bac' element={<MienBac/>}/>
        <Route path='mien-trung' element={<MienTrung/>}/>
        <Route path='mien-nam' element={<MienNam/>}/>
      </Route>

      <Route path='/:slug' element={<MainLayoutDetail/>}>
        <Route index element={<DetailBlog/>}/>
      </Route>

      <Route path='login' element={<LoginUser/>}/>
      <Route path='register' element={<Register/>}/>

      <Route path='/admin' element={<MainLayoutAdmin/>}>
        <Route index element={user ? <CreateBlog/> : <Login/>}/>
        <Route path='create-blog' element={user ? <CreateBlog/> : <Navigate to={'/admin'}/>}/>
        <Route path='blog-list' element={user ? <BlogList/> : <Navigate to={'/admin'}/>}/>
        <Route path='deleted-blog' element={user ? <DeletedBlog/> : <Navigate to={'/admin'}/>}/>
      </Route>
    </Routes>
  )
}

export default App
