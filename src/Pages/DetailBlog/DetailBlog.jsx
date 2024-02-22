import React from 'react'
import { useParams } from 'react-router-dom'

const DetailBlog = () => {
  const { slug } = useParams()
  console.log(slug)
  return (
    <div className='flex-1 px-7'>
      DetailBolg
      <p>{slug}</p>
    </div>
  )
}

export default DetailBlog