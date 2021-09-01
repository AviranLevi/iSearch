import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  wishlist: {
    display: 'grid',
    placeItems: 'center',
    width: '100%',
    gridTemplateRows: 'auto auto 1fr',
    gridGap: '2rem',
    animation: 'fadeIn ease-in-out .5s',
  },
  userWishlist: {
    width: '90%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gridGap: '1rem',
    placeItems: 'center',
    padding: '1rem',
  },
  nothingToDisplay: {
    gridColumn: '1 / 8',
  },
}))
