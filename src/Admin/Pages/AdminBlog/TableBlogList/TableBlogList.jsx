import React from 'react'

const TableBlogList = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
                Product name
            </th>
            <th scope="col" className="px-6 py-3">
                Color
            </th>
            <th scope="col" className="px-6 py-3">
                Category
            </th>
            <th scope="col" className="px-6 py-3">
                Price
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b  hover:bg-gray-50 ">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                Apple MacBook Pro
            </th>
            <td className="px-6 py-4">
                Silver
            </td>
            <td className="px-6 py-4">
                Laptop
            </td>
            <td className="px-6 py-4">
                $2999
            </td>
            <td className="px-6 py-4 text-right">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
          </tr>
          <tr className="bg-white border-b  hover:bg-gray-50 ">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                Microsoft Surface Pro
            </th>
            <td className="px-6 py-4">
                White
            </td>
            <td className="px-6 py-4">
                Laptop PC
            </td>
            <td className="px-6 py-4">
                $1999
            </td>
            <td className="px-6 py-4 text-right">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TableBlogList