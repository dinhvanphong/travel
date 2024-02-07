import axios from 'axios'
import { API_ROOT } from './../utils/conStants'

export const createNewBlogAPI = async (blogData) => {
  const response = await axios.post(`${API_ROOT}/v1/blogs`, blogData)
  return response
}