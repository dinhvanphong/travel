import React from 'react'
import imgUser from '~/img/user.png'
import TextArea from '~/Admin/component/TextArea/TextArea'

const Comment = () => {
  return (
    <div className='w-full mt-7'>
      <span className='block my-5 w-full h-[0.5px] bg-[#d7d7d7]'></span>
      <p className='uppercase text-center font-semibold'>bình luận</p>

      <div className='w-full mb-5'>

        <div className='w-full min-h-5 flex items-center gap-3 my-4'>
          <div className='w-11 h-11 border border-primary rounded-[50%] overflow-hidden p-1 bg-[#efecec]'>
            <img className='w-full h-full object-cover' src={imgUser} alt="user" />
          </div>
          <div>
            <p className='font-bold'>phong</p>
            <p>dep lam fasuf fdsafsda fdsafosdf fsafsadf sfdsfsa fsdfsa</p>
          </div>
        </div>

      </div>

      <div className=''>
        <TextArea
          rows= '5'
          placeholder = 'Bình luận của bạn...'
        />
        <div className='flex flex-col items-center mt-5'>
          <button className='px-6 py-2 font-medium rounded bg-slate-200 hover:bg-primary hover:text-white duration-200'>Bình luận</button>
        </div>
      </div>
    </div>
  )
}

export default Comment