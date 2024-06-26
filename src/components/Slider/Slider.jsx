
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import { getAllBlogsApi } from '~/redux/apiRequest'
// import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#00b0ff',
        borderRadius: '50%',
        position: 'absolute',
        right: '10px',
        zIndex: 10

      }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background:'#00b0ff',
        borderRadius:'50%',
        position: 'absolute',
        left: '10px',
        zIndex: 10
      }}
      onClick={onClick}
    />
  )
}

function SlideItem(props) {
  const { i } = props
  const navigate = useNavigate()
  return (
    <div className='relative h-[350px] w-ful mx-1'>
      <div className='w-full h-full rounded-lg overflow-hidden'>
        <img className='w-full h-full object-cover' src={i.imgList[0]} alt="dfad" />
      </div>
      <p onClick={() => navigate(`/${i.slug}`)} className='absolute bottom-4 text-xl text-white px-4 font-bold hover:underline duration-200 cursor-pointer'>{i.title}</p>
    </div>
  )
}

const SliderHome = () => {
  // const dispatch = useDispatch()
  const listBlogs = useSelector((state) => state.blog.listBlogs.allBlogs)

  let newListBlog = listBlogs.slice()
  newListBlog = newListBlog.reverse()
  // useEffect(() => {
  //   getAllBlogsApi(dispatch)
  // }, [])
  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 3,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>
  }
  return (
    <div className="h-[400px] w-full bg-white">
      <Slider {...settings}>
        {newListBlog && newListBlog.slice(0, 10).map(i => <SlideItem key={i._id} i={i}/>)}
      </Slider>
    </div>
  )
}

export default SliderHome