import * as types from '../types'

export const getBook = (book) => ({
  type: types.GET_BOOK,
  payload: book,
})
