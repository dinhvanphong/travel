import React from 'react'

const TextArea = ({ title, placeholder, rows, value, onChange, isRequired }) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {title}
        {isRequired && <span className='text-red-600'>*</span>}
      </label>
      <textarea
        rows={rows}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  )
}

export default TextArea