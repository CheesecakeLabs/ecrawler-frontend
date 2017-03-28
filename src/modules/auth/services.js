export default {

  authenticate(socialId, scope) {
    return new Promise(resolve => (
      window.gapi.load('auth2', () => (
        window.gapi.auth2.init({
          client_id: socialId,
          fetch_basic_profile: false,
          scope,
        }
      ).then(googleUser => googleUser.signIn()
        .then(() => resolve(googleUser))
        )
      ))
    ))
  },

}
