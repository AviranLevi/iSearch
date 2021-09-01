import React from 'react'
import useStyles from './ErrorMessage.css'

const ErrorMessage = ({ message, className, style = {} }) => {
  const classes = useStyles()
  return (
    <span className={`${classes.errorMessage} ${className}`} style={style}>
      {message}
    </span>
  )
}

export default ErrorMessage
