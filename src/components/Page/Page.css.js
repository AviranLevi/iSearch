import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  page: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    height: '100%',
    opacity: 1,
  },
  pageWrapper: {
    display: 'grid',
    width: '100%',
    height: '100%',
    placeItems: 'center',
  },
}))
