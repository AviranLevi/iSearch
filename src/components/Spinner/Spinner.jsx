import React from 'react'
import Lottie from 'react-lottie'

import animationData from '../../assets/lottieAnimations/books.json'

const Spinner = () => (
  <Lottie
    options={{
      loop: true,
      autoplay: true,
      animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }}
    height={300}
    width={300}
  />
)

export default Spinner
