import axios from 'axios'
import { googleSearchUrl } from '../config'

const api = axios.create({
  baseURL: googleSearchUrl,
})

export const getBooks = async (value, startIndex, maxResults = 20) => {
  try {
    const { data } = await api.get('/', {
      params: {
        q: value,
        startIndex,
        maxResults,
      },
    })
    return { ...data, startIndex }
  } catch (error) {
    return error
  }
}
