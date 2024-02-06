
import './App.css'
import { Navigate, Outlet, Route, Routes } from 'react-router'
import { lazy, Suspense } from 'react'
import SidebarAd from './Admin/component/Sidebar/Sidebar'

const CreateBlog = lazy(() => import('./Admin/Pages/AdminBlog/CreateBlog'))
const BlogList = lazy(() => import('./Admin/Pages/BlogList/BlogList'))

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
        <Route path='create-blog' element={<CreateBlog/>}/>
        <Route path='blog-list' element={<BlogList/>}/>
      </Route>
    </Routes>
  )
}

export default App
