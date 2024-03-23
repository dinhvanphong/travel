
import { Link } from 'react-router-dom'
import ImgTest from '~/img/mui-ne.jpg'
import { useSelector } from 'react-redux'

const NewBlogs = (props) => {
  // const { listBlogs } = props
  const listBlogs = useSelector((state) => state.blog.listBlogs.allBlogs)
  return (
    <div className='w-[25%]'>
      <p className='uppercase px-3 py-2 font-semibold w-fit'>Bài viết mới nhất</p>
      <span className='block w-full h-[2px] bg-primary'></span>
      <div>
        <ul className='flex flex-col gap-3 mt-5 group/item'>
          {listBlogs && listBlogs.slice(0, 5).reverse().map(i => (
            <Link to={`/${i.slug}`} key={i._id}>
              <li className='cursor-pointer'>
                <div className='flex gap-3'>
                  <div className='w-[120px] h-[80px] overflow-hidden rounded-[4px]'>
                    <img className='hover:scale-110 w-full h-full object-cover duration-300' src={i.imgList[0]} alt="asdsad" />
                  </div>
                  <p className='hover:text-primary duration-300 text-sm font-semibold w-[150px]'>{i.title}</p>
                </div>
                <span className='block w-full h-[2px] bg-[#d7d7d7] mt-5'></span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NewBlogs