import React from 'react'
import Comment from '~/components/Comment/Comment'
import ImgTest from '~/img/quang-ninh.jpg'
// import { useParams } from 'react-router-dom'

const DetailBlog = () => {

  return (
    <div className='flex-1 px-7 mt-4'>
      <div>
        <h1 className='text-4xl font-bold text-[#313131]'>48h Khám phá Quảng Ninh – Đi đâu, ăn gì, ở đâu tại Quảng Ninh ?</h1>
        <p className='text-[#777] font-bold py-3'>48h Khám phá Quảng Ninh – Đi đâu, ăn gì, ở đâu tại Quảng Ninh ?</p>
        <img className='bg-center' src={ImgTest} alt="asd" />
        <div>
          <p className='py-4 text-lg font-bold text-primary'>Thời điểm thích hợp nhất để bạn đến đây:</p>
          <p className='pl-4 '>Quảng Ninh là mảnh đất ven biển thuộc vùng Đông Bắc Việt Nam. Được ví như một “Việt Nam thu nhỏ”, có cả biển, đảo, đồng bằng, trung du, đồi núi và biên giới. Là nơi tọa lạc của Vịnh Hạ Long – di sản, kỳ quan thiên nhiên thế giới. Bên cạnh đó, Quảng Ninh còn có hơn 600 di tích, lịch sử, danh lam thắng cảnh khác. Ngoài ra, những điểm đến du lịch văn hóa tâm linh cũng nhận được sự quan tâm rất nhiều đến từ phía khách du lịch.</p>
        </div>
        <div>
          <p className='py-4 text-lg font-bold text-primary'>Giới thiệu</p>
          <p className='pl-4'>Quảng Ninh là mảnh đất ven biển thuộc vùng Đông Bắc Việt Nam. Được ví như một “Việt Nam thu nhỏ”, có cả biển, đảo, đồng bằng, trung du, đồi núi và biên giới. Là nơi tọa lạc của Vịnh Hạ Long – di sản, kỳ quan thiên nhiên thế giới. Bên cạnh đó, Quảng Ninh còn có hơn 600 di tích, lịch sử, danh lam thắng cảnh khác. Ngoài ra, những điểm đến du lịch văn hóa tâm linh cũng nhận được sự quan tâm rất nhiều đến từ phía khách du lịch. Quảng Ninh là mảnh đất ven biển thuộc vùng Đông Bắc Việt Nam. Được ví như một “Việt Nam thu nhỏ”, có cả biển, đảo, đồng bằng, trung du, đồi núi và biên giới. Là nơi tọa lạc của Vịnh Hạ Long – di sản, kỳ quan thiên nhiên thế giới. Bên cạnh đó, Quảng Ninh còn có hơn 600 di tích, lịch sử, danh lam thắng cảnh khác. Ngoài ra, những điểm đến du lịch văn hóa tâm linh cũng nhận được sự quan tâm rất nhiều đến từ phía khách du lịch. Quảng Ninh là mảnh đất ven biển thuộc vùng Đông Bắc Việt Nam. Được ví như một “Việt Nam thu nhỏ”, có cả biển, đảo, đồng bằng, trung du, đồi núi và biên giới. Là nơi tọa lạc của Vịnh Hạ Long – di sản, kỳ quan thiên nhiên thế giới. Bên cạnh đó, Quảng Ninh còn có hơn 600 di tích, lịch sử, danh lam thắng cảnh khác. Ngoài ra, những điểm đến du lịch văn hóa tâm linh cũng nhận được sự quan tâm rất nhiều đến từ phía khách du lịch.</p>
        </div>
        <div>
          <p className='py-4 text-lg font-bold text-primary'>Một số lưu ý:</p>
          <p className='pl-4'>Trên đây là một số chia sẻ mà Blog Riviu gửi đến bạn để bạn hiểu rõ hơn về vùng đất vùng đất Quảng Ninh. Chúc bạn cũng người thân có một chuyến đi đáng nhớ. Và đừng quên đồng hành cùng Blog Riviu ở những địa điểm tuyệt vời tiếp theo.</p>
        </div>
        <div className='grid grid-cols-3 gap-3 my-4'>
          <div className='w-full h-full rounded overflow-hidden'>
            <img className='w-full h-full object-cover hover:scale-110 duration-200' src={ImgTest} alt="sda" />
          </div>

        </div>
      </div>
      <Comment/>
    </div>
  )
}

export default DetailBlog