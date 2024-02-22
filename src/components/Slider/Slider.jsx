
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ImgTest from '~/img/quang-ninh.jpg'

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
  // const { index, ...otherProps } = props
  return (
    <div className='relative h-[350px] w-ful mx-1'>
      <div className='w-full h-full rounded-lg overflow-hidden'>
        <img className='w-full h-full object-cover' src={ImgTest} alt="dfad" />
      </div>
      <p className='absolute bottom-4 text-xl text-white px-4 font-bold hover:underline duration-200 cursor-pointer'>48h Tại Quảng Ninh - Ăn gì, chơi gì, ở đâu ?</p>
    </div>
  )
}

const SliderHome = () => {
  const settings = {
    className: 'center',
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: '30px',
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>
  }
  return (
    <div className="h-[400px] w-full bg-white">
      <Slider {...settings}>
        <SlideItem/>
        <SlideItem/>
        <SlideItem/>
        <SlideItem/>
        <SlideItem/>
        <SlideItem/>
      </Slider>
    </div>
  )
}

export default SliderHome