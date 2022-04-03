import Api from './Api'

class User extends Api {
  constructor (_axios) {
    super(_axios, '/users')
  }

  getUsers (params) {
    return this.get('', params)
  }
}

export default User
