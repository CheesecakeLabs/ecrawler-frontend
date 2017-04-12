import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import Image from '../image'

import styles from './styles.css'

const logo = require('../../../assets/img/logo.png')
const logoutImg = require('../../../assets/img/logout.png')


const mapStateToProps = ({ auth }) => (
  { auth }
)

const Navbar = ({ auth }) => (
  <nav className={styles.outter}>
    <div className={styles.inner}>
      <Image src={logo} height={50} />
    </div>
    {auth ? (
      <Link className={styles.logout} to="/logout">
        <img src={logoutImg} alt="Logout" />
      </Link>
    ) : null}

  </nav>
)

Navbar.propTypes = {
  auth: PropTypes.string,
}

Navbar.defaultProps = {
  auth: undefined,
}

export default connect(mapStateToProps)(Navbar)
