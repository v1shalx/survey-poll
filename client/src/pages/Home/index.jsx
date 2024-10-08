import React from 'react'
import Intro from './Intro'

import Quote from './Quote'
import styles from '../../styles'

const Home = () => {
  return (
    <div className={`${styles.boxWidth}`}>
      <Quote />
      
      <Intro />
    </div>
  )
}

export default Home