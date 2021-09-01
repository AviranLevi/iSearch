import React from 'react'
import useStyles from './Title.css'

const Title = ({ title, fontSize = '24px', fontWeight = 'bold', className = '' }) => {
  const classes = useStyles({ fontSize, fontWeight })
  return <div className={`${classes.title} ${className}`}>{title}</div>
}

export default Title
