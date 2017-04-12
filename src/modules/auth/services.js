import request from '../../services/request-backend'

const verifyToken = (idToken, accessToken) =>
  request.post('/api/v1/auth/verify_token/', {}, { id_token: idToken, access_token: accessToken })
/*
This function has a somewhat complex logic. It executes the following steps:
1. Load the auth2 module from the google api (gapi) library;
2. Initialize the auth2 module with application information;
3. Call the signIn method, that opens a pop-up so that the user can log in his google account;
4. Send a Google API access token to the backend, where it is verified;
5. Return the internal token
*/

export const authenticate = (socialId, scope) => (
  new Promise((resolve) => {
    window.gapi.load('auth2', () =>
      window.gapi.auth2.init({
        client_id: socialId,
        scope,
      })
      .then(googleUser => googleUser.signIn()
        .then((user) => {
          const { id_token, access_token } = user.getAuthResponse(true)
          verifyToken(id_token, access_token)
          .then((token) => {
            resolve(token)
          })
        }),
    ))
  })
)
