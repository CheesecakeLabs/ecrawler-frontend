import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import SocialButton from '../social-button'
import { authenticateWithGoogle } from '../../../../modules/auth/actions'

import gmailLogo from '../../../../../assets/img/gmail-icon.png'

import styles from './styles.css'

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  authenticateWithGoogle,
}

@connect(mapStateToProps, mapDispatchToProps)
class GmailLogin extends Component {

  componentDidMount() {
    if (!document.querySelector('#google-platform')) {
      const gs = document.createElement('script')
      gs.id = 'google-platform'
      gs.src = 'https://apis.google.com/js/platform.js'
      const firstScript = document.querySelector('script')
      firstScript.parentNode.insertBefore(gs, firstScript)
    }
  }

  clickHandler = () => (
    this.props.authenticateWithGoogle(this.props.socialId, this.props.scope)
  )

  render() {
    return (
      <SocialButton
        onClickHandler={this.clickHandler}
        label="Continue via Gmail"
        logo={gmailLogo}
        className={styles.gmail}
      />
    )
  }
}

GmailLogin.propTypes = {
  socialId: PropTypes.string.isRequired,
  scope: PropTypes.string.isRequired,
  authenticateWithGoogle: PropTypes.func.isRequired,
}

export default GmailLogin
