import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  search: {
    display: 'grid',
    placeItems: 'center',
    width: '100%',
    gridTemplateRows: 'auto auto 1fr',
    gridGap: '2rem',
    animation: 'fadeIn ease-in-out .5s',
  },
  searchWrapper: {
    alignSelf: 'start',
    placeItems: 'center',
    display: 'grid',
    gridGap: '1rem',
    width: '40%',
  },
  books: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gridGap: '1rem',
    placeItems: 'center',
    padding: '1rem',
    width: '90%',
  },
  totalItem: {
    margin: '1rem 0 2rem ',
  },
}))
