import * as types from '../types'

const initialState = {
  userName: '',
  wishlist: [],
  books: [],
  startIndex: 0,
  totalItems: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_NAME:
      return {
        ...state,
        userName: action.payload,
      }

    case types.GET_BOOKS:
      return {
        ...state,
        books: action.payload.items,
        startIndex: action.payload.startIndex,
        totalItems: action.payload.totalItems,
      }

    case types.ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
      }

    case types.REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
      }

    default:
      return state
  }
}

export default reducer
