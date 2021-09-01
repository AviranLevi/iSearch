import React from 'react'
import useStyles from './App.css'
import Routes from './routes'

const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.app}>
      <Routes />
    </div>
  )
}

export default App
