import React from 'react'

const TableBlogList = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr className='grid justify-items-stretch grid-cols-12'>
            <th className="px-6 py-3 col-span-3">
                Tiêu đề
            </th>
            <th className="px-6 py-3 col-span-3">
                Mô tả
            </th>
            <th className="px-6 py-3 col-span-3">
                Thời gian
            </th>
            <th className="px-6 py-3 col-span-2">
                Price
            </th>
            <th className="px-6 py-3 col-span-1">
              <span className="sr-only"></span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="grid grid-cols-12 bg-white border-b hover:bg-gray-50 w-full ">
            <th className="col-span-3 px-6 py-4 font-medium text-gray-900 whitespace-wrap truncate">
                Apple MacBook Pro Apple MacBook Pro Apple MacBook Pro Apple MacBook
            </th>
            <td className="col-span-3 px-6 py-4 truncate">
                Silver Apple MacBook Pro Apple MacBook Pro Apple MacBook Pro Apple MacBook
            </td>
            <td className="col-span-3 px-6 py-4 truncate">
                Laptop
            </td>
            <td className="col-span-2 px-6 py-4 truncate">
                $2999
            </td>
            <td className="col-span-1 px-6 py-4 text-right">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Sửa</a>
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Xóa</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TableBlogList