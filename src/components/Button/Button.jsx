import React from 'react'
import useStyles from './Button.css'

const Button = ({ title, className = '', style = {}, onClick }) => {
  const classes = useStyles()
  return (
    <button className={`${classes.btn} ${className}`} style={style} onClick={onClick}>
      {title}
    </button>
  )
}

export default Button
