import * as types from '../types'
import { userNameEmpty, userNameOnlyLetters, userNameTooShort } from './errors'
import { userNameSubmit, isLoading, isLoadingMore } from './features'

import * as googleAPI from '../../api/google'

export const userNameHandler = (value) => ({
  type: types.USER_NAME,
  payload: value,
})

export const userSubmit = () => (dispatch, getState) => {
  const { userName } = getState().user
  const reg = /^[a-z]+$/i
  const containOnlyLetters = reg.test(userName)

  if (!userName) {
    dispatch(userNameEmpty(true))
  } else {
    dispatch(userNameEmpty(false))
  }

  if (userName.length < 3) {
    dispatch(userNameTooShort(true))
  } else {
    dispatch(userNameTooShort(false))
  }

  if (!containOnlyLetters) {
    dispatch(userNameOnlyLetters(true))
  } else {
    dispatch(userNameOnlyLetters(false))
  }

  if (userName.length >= 3 && containOnlyLetters) {
    dispatch(userNameSubmit(true))
  }
}

export const getBooks = (value, startIndex) => (dispatch, getState) => {
  if (startIndex === 0) {
    dispatch(isLoading(true))

    googleAPI
      .getBooks(value, startIndex)
      .then((response) => {
        const { items, startIndex, totalItems } = response

        dispatch({ type: types.GET_BOOKS, payload: { items, startIndex, totalItems } })
        dispatch(isLoading(false))
      })
      .catch((error) => console.log(error))
  } else {
    dispatch(isLoadingMore(true))

    googleAPI
      .getBooks(value, startIndex)
      .then((response) => {
        const { items, startIndex, totalItems } = response
        const { books } = getState().user
        dispatch({ type: types.GET_BOOKS, payload: { items: [...books, ...items], startIndex, totalItems } })
        dispatch(isLoadingMore(false))
      })
      .catch((error) => console.log(error))
  }
}

export const addToWishlist = (book) => (dispatch, getState) => {
  const { wishlist: userCurrentWishList } = getState().user
  const updatedWishList = [...userCurrentWishList, book]

  dispatch({
    type: types.ADD_TO_WISHLIST,
    payload: updatedWishList,
  })
}

export const removeFromWishlist = (book) => (dispatch, getState) => {
  const { wishlist: userCurrentWishList } = getState().user
  const updatedWishList = userCurrentWishList.filter(({ id }) => id !== book.id)

  dispatch({
    type: types.ADD_TO_WISHLIST,
    payload: updatedWishList,
  })
}
