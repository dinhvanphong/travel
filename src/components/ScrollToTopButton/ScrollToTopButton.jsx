import { useEffect, useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div className={`${isVisible ? '' : 'hidden'} fixed bottom-5 right-5 cursor-pointer w-8 h-8 bg-primary text-white text-center font-bold rounded flex items-center justify-center overflow-hidden`} onClick={scrollToTop}>
      <span className='block font-bold'><IoIosArrowUp /></span>
    </div>
  )
}

export default ScrollToTopButton