import * as types from '../types'

export const userNameSubmit = (bool) => ({
  type: types.USER_NAME_SUBMIT,
  payload: bool,
})

export const isLoading = (bool) => ({
  type: types.IS_LOADING,
  payload: bool,
})

export const isLoadingMore = (bool) => ({
  type: types.IS_LOADING_MORE,
  payload: bool,
})

export const toggleDisplayDialog = (bool) => ({
  type: types.TOGGLE_DISPLAY_DIALOG,
  payload: bool,
})
