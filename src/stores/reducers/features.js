import * as types from '../types'

const initialState = {
  userNameSubmit: false,
  isLoading: false,
  isLoadingMore: false,
  toggleDisplayDialog: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_NAME_SUBMIT:
      return {
        ...state,
        userNameSubmit: action.payload,
      }

    case types.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }

    case types.IS_LOADING_MORE:
      return {
        ...state,
        isLoadingMore: action.payload,
      }

    case types.TOGGLE_DISPLAY_DIALOG:
      return {
        ...state,
        toggleDisplayDialog: action.payload,
      }
    default:
      return state
  }
}

export default reducer
