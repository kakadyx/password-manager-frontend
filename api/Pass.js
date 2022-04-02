import Api from './Api'

class Pass extends Api {
  constructor (_axios) {
    super(_axios, '/pass')
  }

  getPasses (params) {
    return this.get('', params)
  }

  putPass (params) {
    return this.put('', params)
  }

  deletePass (id, params) {
    return this.delete(`/${id}`, params)
  }

  postPass (params) {
    return this.post('', params)
  }

  getAll (params) {
    return this.get('/all', params)
  }
}

export default Pass
