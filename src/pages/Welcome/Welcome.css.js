import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  welcome: {
    display: 'grid',
    placeItems: 'center',
    width: '100%',
    gridTemplateRows: 'auto auto 1fr',
    gridGap: '2rem',
    animation: 'fadeIn ease-in-out .5s',
  },
  welcomeWrapper: {
    display: 'grid',
  },
  userInfo: {
    alignSelf: 'start',
    justifyContent: 'center',
    display: 'flex',
    gridGap: '1rem',
    // width: '40%',
  },
  errors: {
    display: 'grid',
    gridGap: '.5rem',
    margin: '1rem',
  },
}))
