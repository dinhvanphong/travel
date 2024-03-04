
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { getAllBlogsApi } from '~/redux/apiRequest'
import ImgTest from '~/img/quang-ninh.jpg'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
  return (
    <div className='relative h-[350px] w-ful mx-1'>
      <div className='w-full h-full rounded-lg overflow-hidden'>
        <img className='w-full h-full object-cover' src={i.imgList[0]} alt="dfad" />
      </div>
      <p className='absolute bottom-4 text-xl text-white px-4 font-bold hover:underline duration-200 cursor-pointer'>{i.title}</p>
    </div>
  )
}

const SliderHome = () => {
  const dispatch = useDispatch()
  const listBlogs = useSelector((state) => state.blog.listBlogs.allBlogs)
  useEffect(() => {
    getAllBlogsApi(dispatch)
  }, [])
  console.log(listBlogs)
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
        {listBlogs && listBlogs.map(i => <SlideItem key={i._id} i={i}/>)}
      </Slider>
    </div>
  )
}

export default SliderHome