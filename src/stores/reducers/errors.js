import * as types from '../types'

const initialState = {
  userName: {
    empty: false,
    tooShort: false,
    onlyLetters: false,
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USERNAME_EMPTY:
      return {
        ...state,
        userName: {
          ...state.userName,
          empty: action.payload,
        },
      }

    case types.USERNAME_TOO_SHORT:
      return {
        ...state,
        userName: {
          ...state.userName,
          tooShort: action.payload,
        },
      }

    case types.USERNAME_ONLY_LETTERS:
      return {
        ...state,
        userName: {
          ...state.userName,
          onlyLetters: action.payload,
        },
      }

    default:
      return state
  }
}

export default reducer
