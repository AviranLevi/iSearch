import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Providers from './Providers'

ReactDOM.render(
  <Providers>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Providers>,
  document.getElementById('root')
)
