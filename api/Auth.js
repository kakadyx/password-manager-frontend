import Api from './Api'

class Auth extends Api {
  constructor (_axios) {
    super(_axios, '/pass')
  }
}

export default Auth
