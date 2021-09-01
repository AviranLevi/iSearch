import React from 'react'
import Title from '../Title'
import useStyles from './Header.css'
import { Link } from 'react-router-dom'

const Header = ({ displayWishlistBtn = false }) => {
  const classes = useStyles()
  return (
    <div className={classes.header}>
      <Link to='/' className={classes.logoLink}>
        <Title title='iSearch' fontSize='2rem' className={classes.logo} />
      </Link>

      {displayWishlistBtn && (
        <Link to='/wishlist' className={classes.myWishlistBtn}>
          My Wishlist
        </Link>
      )}
    </div>
  )
}

export default Header
