import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import GmailLogin from './components/gmail-login'
import styles from './styles.css'
import { SOCIAL_ID } from '../../config/environment'

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
          socialId={SOCIAL_ID}
          scope={scopes.join(' ')}
        />
      </main>
    )
  }
}

Login.propTypes = {
  auth: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
}

Login.defaultProps = {
  auth: undefined,
}

export default Login
