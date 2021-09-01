import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import Title from '../Title'
import useStyles from './Book.css'
import * as actions from '../../stores/actions'

const Book = ({ book }) => {
  const [onHover, setOnHover] = useState(false)
  const [alreadyInWishList, setAlreadyInWishList] = useState(false)

  const dispatch = useDispatch()
  const { wishlist } = useSelector(({ user }) => user)

  const { volumeInfo } = book

  const { title, publishedDate, imageLinks } = volumeInfo
  const { thumbnail } = imageLinks
  const classes = useStyles({ thumbnail })

  const yearDate = publishedDate && publishedDate.split('-')[0]

  const onMouseOver = () => setOnHover(true)
  const onMouseOut = () => setOnHover(false)

  const addToWishList = () => dispatch(actions.addToWishlist(book))
  const removeFromWishList = () => dispatch(actions.removeFromWishlist(book))

  useEffect(() => {
    const bookAlreadyInWishlist = wishlist.some(({ id }) => id === book.id)
    if (bookAlreadyInWishlist) {
      setAlreadyInWishList(true)
    } else {
      setAlreadyInWishList(false)
    }
  }, [wishlist])

  return (
    thumbnail && (
      <div className={classes.book} onMouseEnter={onMouseOver} onMouseLeave={onMouseOut}>
        {onHover && <div className={classes.backgroundOnHover}></div>}
        {onHover && (
          <div className={classes.infoOnHover}>
            <Title title={title} fontSize='.9rem' />
            <Title title={yearDate} fontSize='.9rem' />
            <Button
              title={`${alreadyInWishList ? 'Remove from' : 'Add to'} my wishlist`}
              className={classes.addToMyWishListBtn}
              onClick={alreadyInWishList ? removeFromWishList : addToWishList}
            />
          </div>
        )}
      </div>
    )
  )
}

export default Book
