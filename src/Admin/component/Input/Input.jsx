import React from 'react'

const Input = ({ type='text', title, value, onChange, isRequire, className, classNameInput, disabled, id, htmlFor }) => {
  return (
    <div className={`group relative z-0 w-full h-9 ${className}`}>
      <input
        id={id}
        disabled={disabled}
        type={type}
        className={`peer block px-3 w-full h-full appearance-none rounded-[5px] border border-gray-300 bg-gray-50 py-2.5 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0 transition-colors ${classNameInput}`}
        placeholder=''
        value={value}
        onChange={onChange}
      />
      <label
        htmlFor={htmlFor}
        className='bg-gray-50 cursor-text absolute left-3 top-2 z-10 origin-[0] px-1 -translate-y-[18px] scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-1 peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-primary peer-focus:bg-white peer-focus:px-[5px]'
      >
        {title}
        {isRequire ? (
          <span className='text-red-500 font-bold'> *</span>
        ): <></>}
      </label>
    </div>
  )
}

export default Input