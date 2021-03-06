import Api from './Api'

class Pass extends Api {
  constructor (_axios) {
    super(_axios, '/passwords')
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
}

export default Pass
