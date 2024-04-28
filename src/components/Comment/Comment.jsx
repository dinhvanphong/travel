import React, { useState } from 'react'
import imgUser from '~/img/user.png'
import TextArea from '~/Admin/component/TextArea/TextArea'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { commentApi } from '~/redux/apiRequest'

const Comment = (props) => {
  const { blog, toggle, setToggle } = props
  const navigate = useNavigate()
  const user = useSelector((state) => state.auth.loginUser.currentUser)
  const [comment, setComment] = useState('')
  const handleComment =async () => {
    if (user) {
      const dataComment = {
        blogId : blog._id,
        usernameId: user._id,
        comment: comment,
        username: user.username
      }
      if (comment.trim() != '') {
        await commentApi(dataComment)
          .then(() => setToggle(!toggle))
          .then(() => setComment(''))
      }
    } else {
      navigate('/login')
    }
  }
  return (
    <div className='w-full mt-7'>
      <span className='block my-5 w-full h-[0.5px] bg-[#d7d7d7]'></span>
      <p className='uppercase text-center font-semibold'>bình luận</p>

      <div className='w-full mb-5'>
        {blog.comments.map(i => (
          <div key={i._id} className='w-full min-h-5 flex items-center gap-3 my-4 p-2 rounded-md bg-primary/5'>
            <div className='w-11 h-11 border border-primary rounded-[50%] overflow-hidden p-1 bg-[#efecec]'>
              <img className='w-full h-full object-cover' src={imgUser} alt="user" />
            </div>
            <div>
              <p className='font-bold text-primary'>{i.username}</p>
              <p className='text-[#666]'>{i.comment}</p>
            </div>
          </div>
        ))}
      </div>

      <div className=''>
        <TextArea
          rows= '5'
          placeholder = 'Bình luận của bạn...'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div className='flex flex-col items-center mt-5'>
          <button onClick={handleComment} className='px-6 py-2 font-medium rounded bg-slate-200 hover:bg-primary hover:text-white duration-200'>Bình luận</button>
        </div>
      </div>
    </div>
  )
}

export default Comment