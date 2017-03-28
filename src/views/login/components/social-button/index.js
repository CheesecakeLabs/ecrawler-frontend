import React, { PropTypes } from 'react'
import styles from './styles.css'

const SocialButton = ({ onClickHandler, logo, label, className }) => (
  <button className={[styles.social, className].join(' ')} onClick={onClickHandler}>
    <img alt="logo" className={styles.logo} src={logo} />{label}
  </button>
)

SocialButton.propTypes = {
  onClickHandler: PropTypes.func,
  logo: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
}

export default SocialButton
