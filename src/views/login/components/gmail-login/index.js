import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SocialButton from '../social-button'
import { authenticateWithGoogle } from '../../../../modules/auth/actions'

import gmailLogo from '../../../../../assets/img/gmail-icon.png'

import styles from './styles.css'

const mapStateToProps = (state) => {
  const { token } = state
  return { token }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    authenticateWithGoogle,
  }, dispatch)
)

@connect(mapStateToProps, mapDispatchToProps)
class GmailLogin extends Component {
  constructor(props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
  }

  componentDidMount() {
    if (!document.querySelector('#google-platform')) {
      const gs = document.createElement('script')
      gs.id = 'google-platform'
      gs.src = 'https://apis.google.com/js/platform.js'
      const firstScript = document.querySelector('script')
      firstScript.parentNode.insertBefore(gs, firstScript)
    }
  }

  clickHandler() {
    this.props.authenticateWithGoogle(this.props.socialId, this.props.scope)
  }

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
  socialId: PropTypes.string,
  responseHandler: PropTypes.func,
  scope: PropTypes.string,
  authenticateWithGoogle: PropTypes.func,
}

export default GmailLogin
