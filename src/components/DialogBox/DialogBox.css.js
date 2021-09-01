import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  dialogBox: {
    position: 'fixed',
    top: '0',
    left: '0',
    display: 'grid',
    placeItems: 'center',
    height: '100vh',
    width: '100vw',
    background: 'rgba(125, 125,125,0.6)',
    animation: 'fadeIn ease-in-out .5s',
  },
  dialogBoxWrapper: {
    background: '#fff',
    width: '65%',
    padding: '2rem',
    borderRadius: '25px',
    zIndex: '20',
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: '1fr 4fr',
  },
  closeBtn: {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    fontSize: '1.2rem',
    cursor: 'pointer',
  },
  bookInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  info: {
    display: 'flex',
    gap: '1rem',
  },
  desc: {
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    gridColumn: '1/3',
  },
}))
