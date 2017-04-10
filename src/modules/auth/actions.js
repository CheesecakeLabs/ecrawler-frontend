import authenticate from './services'
import defineAction from '../../utils/define-action'

export const AUTHENTICATE_WITH_GOOGLE = defineAction('AUTHENTICATE_WITH_GOOGLE')

export const authenticateWithGoogle = (socialId, scope) => ({
  type: AUTHENTICATE_WITH_GOOGLE,
  payload: authenticate(socialId, scope),
})
