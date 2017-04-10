import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import { authenticateWithGoogle } from '../../modules/auth/actions'
import GmailLogin from './components/gmail-login'
import styles from './styles.css'
import constants from '../../config/constants'

const mapStateToProps = ({ token }) => (
  { token }
)

const mapDispatchToProps = {
  authenticateWithGoogle,
}

@connect(mapStateToProps, mapDispatchToProps)
class Login extends Component {

  componentWillReceiveProps(props) {
    if (props.token) { // eslint-disable-line react/prop-types
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
          socialId={constants.socialId}
          scope={scopes.join(' ')}
        />
      </main>
    )
  }
}

export default Login
