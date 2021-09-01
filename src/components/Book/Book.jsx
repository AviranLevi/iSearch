import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import Title from '../Title'
import useStyles from './Book.css'
import * as actions from '../../stores/actions'

const Book = ({ book }) => {
  const [onHover, setOnHover] = useState(false)

  const dispatch = useDispatch()

  const { volumeInfo, id } = book

  const { title, publishedDate, imageLinks } = volumeInfo
  const { thumbnail } = imageLinks
  const classes = useStyles({ thumbnail })

  const yearDate = publishedDate && publishedDate.split('-')[0]

  const onMouseOver = () => setOnHover(true)
  const onMouseOut = () => setOnHover(false)

  const displayBook = () => {
    dispatch(actions.getBook({ volumeInfo, id }))
    dispatch(actions.toggleDisplayDialog(true))
  }
  return (
    thumbnail && (
      <div className={classes.book} onMouseEnter={onMouseOver} onMouseLeave={onMouseOut} onClick={displayBook}>
        {onHover && <div className={classes.backgroundOnHover}></div>}
        {onHover && (
          <div className={classes.infoOnHover}>
            <Title title={title} fontSize='.9rem' />
            <Title title={yearDate} fontSize='.9rem' />
          </div>
        )}
      </div>
    )
  )
}

export default Book
