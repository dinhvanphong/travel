
import './App.css'
import { Navigate, Outlet, Route, Routes } from 'react-router'
import { lazy, Suspense } from 'react'
import SidebarAd from './Admin/component/Sidebar/Sidebar'

const AdminBlog = lazy(() => import('./Admin/Pages/AdminBlog/AdminBlog'))
const Test = lazy(() => import('./Admin/Pages/test/test'))

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
        <Route path='admin-blog' element={<AdminBlog/>}/>
        <Route path='addposts' element={<Test/>}/>
      </Route>
    </Routes>
  )
}

export default App
