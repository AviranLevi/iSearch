import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  book: {
    display: 'grid',
    backgroundImage: ({ thumbnail }) => `url(${thumbnail})` || 'url()',
    height: '12rem',
    width: '10rem',
    borderRadius: '8px',
    transform: 'scale(1)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    placeItems: 'center',
    transition: 'all .2s ease-in-out ',
    opacity: 1,
    animation: 'fadeIn ease-in-out .5s',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  infoOnHover: {
    color: 'white',
    width: '90%',
    display: 'grid',
    placeItems: 'center',
    textAlign: 'center',
    zIndex: '10',
    fontSize: '.8rem',
    animation: 'fadeIn ease-in-out .5s',
    gridGap: '1rem',
    gridTemplateRows: '2fr 1fr',
  },

  backgroundOnHover: {
    background: 'rgba(125, 125, 125, 0.7)',
    position: 'absolute',
    height: '12rem',
    width: '10rem',
    borderRadius: '8px',
    animation: 'fadeIn ease-in-out .5s',

    '&:hover': {
      transision: '.4s ease-in-out all',
      tranform: 'scale(1.1)',
    },
  },
  addToMyWishListBtn: {
    padding: '.5rem',
    fontSize: '.8rem',
  },
}))
