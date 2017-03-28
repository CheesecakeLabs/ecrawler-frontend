import service from './services'

export const authenticateWithGoogle = (socialId, scope) => (
  (dispatch) => (
    service.authenticate(socialId, scope)
      .then((data) => {
        dispatch({
          type: 'AUTHENTICATE_WITH_GOOGLE',
          payload: data,
        })
      })
  )
)
