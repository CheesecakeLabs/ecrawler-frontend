import React from 'react'
import Image from '../image'

import styles from './styles.css'

const logo = require('../../img/logo.jpg')


const Navbar = () => (
  <nav className={styles.outter}>
    <div className={styles.inner}>
      <Image src={logo} height={50} />
    </div>
  </nav>
)


export default Navbar
