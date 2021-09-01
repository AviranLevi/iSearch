import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'react-jss'
import theme from './assets/theme'
import store from './stores'

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  )
}

export default Providers
