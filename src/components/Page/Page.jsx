import React from 'react'
import Header from '../Header/'
import useStyles from './Page.css'

const Page = ({ children, displayWishlistBtn = false }) => {
  const classes = useStyles()
  return (
    <div className={classes.page}>
      <Header displayWishlistBtn={displayWishlistBtn} />
      <div className={classes.pageWrapper}>{children}</div>
    </div>
  )
}

export default Page
