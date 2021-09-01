import * as types from '../types'

const initialState = {
  id: '',
  volumeInfo: {
    title: '',
    authors: [],
    description: '',
    categories: [],
    publisher: '',
    publishedDate: '',
    imageLinks: {},
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BOOK:
      return {
        ...state,
        id: action.payload.id,
        volumeInfo: action.payload.volumeInfo,
      }

    default:
      return state
  }
}

export default reducer
