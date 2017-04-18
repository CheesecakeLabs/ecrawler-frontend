import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import Image from '../image'
import styles from './styles.css'
import logo from '../../../assets/img/logo.png'
import logoutImg from '../../../assets/img/logout.png'

/*
  The adminURL state is a URL passed by the backend and saved to the store,
  so we can use it in the 'Manage Filters' link. Do you agree?
*/
const mapStateToProps = ({ auth, adminURL }) => (
  { auth, adminURL }
)

const renderLogoutButton = () => (
  <Link className={styles.logout} to="/logout">
    <img src={logoutImg} alt="Logout" />
  </Link>
)

const renderManageFilters = (adminURL) => (
  <a className={styles.manageFilters} href={adminURL}>Manage Filters</a>
)

const Navbar = ({ auth, adminURL }) => (
  <nav className={styles.outter}>
    <div className={styles.inner}>
      <Image src={logo} height={50} />
    </div>
    <div className={styles.rightSide}>
      <div>
        {adminURL ? renderManageFilters(adminURL) : null}
      </div>
      <div>
        {auth ? renderLogoutButton() : null}
      </div>
    </div>
  </nav>
)

Navbar.propTypes = {
  auth: PropTypes.string,
  adminURL: PropTypes.string.isRequired,
}

Navbar.default = {
  auth: undefined, // auth is undefined when the user is not logged in
}

export default connect(mapStateToProps)(Navbar)
