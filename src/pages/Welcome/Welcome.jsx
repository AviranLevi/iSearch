import React, { useEffect } from 'react'
import Button from '../../components/Button'
import { useHistory } from 'react-router-dom'
import Page from '../../components/Page'
import TextInput from '../../components/TextInput'
import useStyles from './Welcome.css'
import { useDispatch, useSelector } from 'react-redux'
import ErrorMessage from '../../components/ErrorMessage'
import * as actions from '../../stores/actions'
import Title from '../../components/Title'

const Welcome = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()

  const { features, errors } = useSelector((state) => state)
  const { userNameSubmit } = features
  const { userName } = errors
  const { empty, tooShort, onlyLetters } = userName

  const userNameOnChange = (e) => dispatch(actions.userNameHandler(e.target.value))
  const submitOnClick = () => dispatch(actions.userSubmit())

  useEffect(() => {
    if (userNameSubmit) {
      history.push('/search')
    }
  }, [userNameSubmit])

  return (
    <Page>
      <div className={classes.welcome}>
        <Title title='Welcome!' fontSize='3rem' />
        <Title title='Please insert your name to continue' />

        <div className={classes.welcomeWrapper} onSubmit={submitOnClick}>
          <div className={classes.userInfo}>
            <TextInput onChange={userNameOnChange} placeholder='User Name' />
            <Button title='Submit' onClick={submitOnClick} />
          </div>
          <div className={classes.errors}>
            {empty && <ErrorMessage message='*Name is required.' />}
            {onlyLetters && <ErrorMessage message='Only letters are allowed.' />}
            {tooShort && <ErrorMessage message='Length must be between 3 - 20 ' />}
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Welcome
