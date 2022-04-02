import Api from './Api'

class Groups extends Api {
  constructor (_axios) {
    super(_axios, '/pass')
  }
}

export default Groups
