
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NewBlogs = () => {
  const listBlogs = useSelector((state) => state.blog.listBlogs.allBlogs)

  let newListBlog = listBlogs.slice()
  newListBlog = newListBlog.reverse()
  return (
    <div className='w-[25%]'>
      <p className='uppercase px-3 py-2 font-semibold w-fit'>Bài viết mới nhất</p>
      <span className='block w-full h-[2px] bg-primary'></span>
      <div>
        <ul className='flex flex-col gap-3 mt-5 group/item'>
          {newListBlog && newListBlog.slice(0, 6).map(i => (
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