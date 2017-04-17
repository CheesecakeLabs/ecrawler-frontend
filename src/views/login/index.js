import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import GmailLogin from './components/gmail-login'
import styles from './styles.css'
import { socialId } from '../../config/constants'

const mapStateToProps = ({ auth }) => (
  { auth }
)

@connect(mapStateToProps)
class Login extends Component {

  componentWillReceiveProps(props) {
    if (props.auth) {
      browserHistory.push('/dashboard')
    }
  }

  render() {
    const scopes = [
      'profile',
      'https://www.googleapis.com/auth/gmail.readonly',
    ]

    return (
      <main className={styles.main}>
        <GmailLogin
          socialId={socialId}
          scope={scopes.join(' ')}
        />
      </main>
    )
  }
}

Login.propTypes = {
  auth: PropTypes.string,
}

Login.defaultProps = {
  auth: undefined,
}

export default Login
