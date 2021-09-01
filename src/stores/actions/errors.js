import * as types from '../types'

//userName
export const userNameEmpty = (bool) => ({
  type: types.USERNAME_EMPTY,
  payload: bool,
})

export const userNameTooShort = (bool) => ({
  type: types.USERNAME_TOO_SHORT,
  payload: bool,
})

export const userNameOnlyLetters = (bool) => ({
  type: types.USERNAME_ONLY_LETTERS,
  payload: bool,
})
