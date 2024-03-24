import React from 'react'
import TableBlogList from '~/Admin/Pages/BlogList/TableBlogList/TableBlogList'

const BlogList = () => {
  return (
    <div className='w-[80%] px-5 py-5 h-[100vh] overflow-auto'>
      <TableBlogList/>
    </div>
  )
}

export default BlogList