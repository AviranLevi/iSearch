import React, { useEffect, useState } from 'react'
import useStyles from './Search.css'
import { useSelector, useDispatch } from 'react-redux'
import TextInput from '../../components/TextInput'
import Page from '../../components/Page'
import { useHistory } from 'react-router'
import Button from '../../components/Button'
import Title from '../../components/Title'
import * as actions from '../../stores/actions'
import Spinner from '../../components/Spinner'
import Book from '../../components/Book'
import DialogBox from '../../components/DialogBox'

const Search = () => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('')

  const { user, features } = useSelector((state) => state)
  const { userName, books, startIndex, totalItems } = user
  const { isLoading, isLoadingMore, toggleDisplayDialog } = features

  useEffect(() => {
    if (!userName) {
      history.push('/')
    }
  }, [userName])

  useEffect(() => {
    setTimeout(() => {
      searchOnClick()
    }, 500)
  }, [searchValue])

  const searchOnChange = (e) => setSearchValue(e.target.value)

  const searchOnClick = () => {
    if (searchValue) {
      dispatch(actions.getBooks(searchValue, 0))
    }
  }

  const nextPage = () => {
    let nextPageNumber = startIndex + 20
    dispatch(actions.getBooks(searchValue, nextPageNumber))
  }

  const noMoreToLoad = totalItems <= books.legnth + 1

  return (
    <Page displayWishlistBtn>
      <div className={classes.search} onSubmit={searchOnClick}>
        <Title title={`Hello ${userName}!`} fontSize='3rem' />
        <div className={classes.searchWrapper}>
          <TextInput style={{ width: '100%' }} value={searchValue} onChange={searchOnChange} />
          <Button title='Search' onClick={searchOnClick} />
        </div>
      </div>

      <div className={classes.books}>
        {!isLoading && books && books.length > 0 && books.map((book) => book.volumeInfo.imageLinks && <Book book={book} />)}

        {!isLoading && books && books.length > 0 && !noMoreToLoad && (
          <Button title='Load More' className={classes.loadMoreBtn} onClick={nextPage} />
        )}
      </div>

      {(isLoading || isLoadingMore) && <Spinner />}
      {!isLoading && books.length > 0 && <Title className={classes.totalItem} title={`Total Items: ${totalItems}`} fontSize='1rem' />}
      {toggleDisplayDialog && <DialogBox />}
    </Page>
  )
}

export default Search
