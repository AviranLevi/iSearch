import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  header: {
    margin: '2rem',
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  logoLink: {
    textDecoration: 'none',
    color: '#000',
    width: 'fit-content',
  },
  myWishlistBtn: {
    justifySelf: 'end',
    textDecoration: 'none',
    color: '#000',
    fontSize: '1rem',
    cursor: 'pointer',
  },
}))
