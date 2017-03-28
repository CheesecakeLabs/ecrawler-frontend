import React, { Component } from 'react'

import GmailLogin from './components/gmail-login'
import styles from './styles.css'


class Login extends Component {

  responseGoogle(googleUser) {
    const idToken = googleUser.getAuthResponse().id_token
    console.log({ accessToken: idToken }) // eslint-disable-line no-console
  }

  render() {
    return (
      <main className={styles.main}>
        <GmailLogin
          socialId="56778920253-bfeu4u5tub852drphhrbh7iuc7uckojt.apps.googleusercontent.com"
          scope="profile"
          responseHandler={this.responseGoogle}
        />
      </main>
    )
  }
}

export default Login
