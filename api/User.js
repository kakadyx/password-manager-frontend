import Api from './Api'

class User extends Api {
  constructor (_axios) {
    super(_axios, '/pass')
  }
}

export default User
