import React, { useEffect } from 'react'
import Page from '../../components/Page'
import Title from '../../components/Title'
import useStyles from './Wishlist.css'
import { useSelector } from 'react-redux'
import Book from '../../components/Book'
import { useHistory } from 'react-router'
import DialogBox from '../../components/DialogBox'

const Wishlist = () => {
  const classes = useStyles()
  const history = useHistory()
  const { user, features } = useSelector((state) => state)
  const { wishlist } = user
  const { userNameSubmit, toggleDisplayDialog } = features

  useEffect(() => {
    if (!userNameSubmit) {
      history.push('/')
    }
  }, [userNameSubmit])

  return (
    <Page>
      <div className={classes.wishlist}>
        <Title title='My Wishlist' fontSize='3rem' />

        <div className={classes.userWishlist}>
          {wishlist.length > 0 ? (
            wishlist.map((book) => <Book book={book} />)
          ) : (
            <Title className={classes.nothingToDisplay} title={`You didn't save anything yet :(`} />
          )}
        </div>
      </div>
      {toggleDisplayDialog && <DialogBox />}
    </Page>
  )
}

export default Wishlist
