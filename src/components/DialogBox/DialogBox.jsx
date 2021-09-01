import React, { useEffect, useState } from 'react'
import Title from '../Title'
import { useSelector, useDispatch } from 'react-redux'
import useStyles from './DialogBox.css'
import * as actions from '../../stores/actions'
import Button from '../Button'

const DialogBox = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [alreadyInWishList, setAlreadyInWishList] = useState(false)

  const { book, user } = useSelector((state) => state)
  const { id, volumeInfo } = book
  const { title, authors, description, categories, publisher, publishedDate, imageLinks } = volumeInfo
  const { wishlist } = user
  const unknown = 'Unknown'

  const addToWishList = () => dispatch(actions.addToWishlist(book))
  const removeFromWishList = () => dispatch(actions.removeFromWishlist(book))

  useEffect(() => {
    const bookAlreadyInWishlist = wishlist.some((book) => book.id === id)
    if (bookAlreadyInWishlist) {
      setAlreadyInWishList(true)
    } else {
      setAlreadyInWishList(false)
    }
  }, [wishlist])

  const closeDialog = () => dispatch(actions.toggleDisplayDialog(false))

  return (
    <div className={classes.dialogBox}>
      <div className={classes.dialogBoxWrapper}>
        <div className={classes.closeBtn} onClick={closeDialog}>
          X
        </div>
        <img className={classes.bookImage} src={imageLinks.thumbnail || ''} alt={title} />

        <div className={classes.bookInfo}>
          <Title title={title || unknown} fontSize='1.4rem' />

          <div className={classes.info}>
            <Title title='Publishers:' fontSize='1rem' fontWeight='normal' />
            <Title title={publisher || unknown} fontSize='1rem' fontWeight='normal' />
          </div>
          <div className={classes.info}>
            <Title title='Published Date:' fontSize='1rem' fontWeight='normal' />
            <Title title={publishedDate || unknown} fontSize='1rem' fontWeight='normal' />
          </div>

          <div className={classes.info}>
            <Title title='Authors:' fontSize='1rem' fontWeight='normal' />
            {authors &&
              authors.length > 0 &&
              authors.map((author) => <Title title={author || unknown} fontSize='1rem' fontWeight='normal' />)}
          </div>

          <div className={classes.info}>
            <Title title='Categories:' fontSize='1rem' fontWeight='normal' />
            {categories &&
              categories.length > 0 &&
              categories.map((category) => <Title title={category || unknown} fontSize='1rem' fontWeight='normal' />)}
          </div>
          <Button
            title={`${alreadyInWishList ? 'Remove from' : 'Add to'} my wishlist`}
            className={classes.addToMyWishListBtn}
            onClick={alreadyInWishList ? removeFromWishList : addToWishList}
          />
        </div>
        {description && (
          <div className={classes.desc}>
            <Title title='Description:' fontSize='1rem' fontWeight='normal' />
            <p> {description} </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default DialogBox
