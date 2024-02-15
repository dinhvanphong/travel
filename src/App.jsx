
import './App.css'
import { Navigate, Outlet, Route, Routes } from 'react-router'
import { lazy, Suspense } from 'react'
import SidebarAd from './Admin/component/Sidebar/Sidebar'

const CreateBlog = lazy(() => import('./Admin/Pages/AdminBlog/CreateBlog'))
const BlogList = lazy(() => import('./Admin/Pages/BlogList/BlogList'))
const DeletedBlog = lazy(() => import('./Admin/Pages/DeletedBlog/DeletedBlog'))
const Login = lazy(() => import('./Admin/Pages/Login/Login'))
const Register = lazy(() => import('./Admin/Pages/Register/Register'))


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

function App() {

  return (
    <Routes>
      <Route path='/admin' element={<MainLayoutAdmin/>}>
        <Route index element={<Login/>}/>
        <Route path='create-blog' element={<CreateBlog/>}/>
        <Route path='blog-list' element={<BlogList/>}/>
        <Route path='deleted-blog' element={<DeletedBlog/>}/>
      </Route>
    </Routes>
  )
}

export default App
