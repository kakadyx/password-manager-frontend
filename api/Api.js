class Api {
  constructor (_axios, _prefix = '') {
    this.axios = _axios
    this.prefix = _prefix
  }

  get (url, params = {}) {
    return this.axios.$get(`${this.prefix}${url}`, {
      params
    })
  }

  postFormData (url, params = {}) {
    const formData = new FormData()
    for (const key in params) {
      if (typeof params[key] === 'boolean') {
        params[key] = params[key] ? 1 : 0
      }
      formData.append(key, params[key])
    }
    return this.axios.$post(`${this.prefix}${url}`, formData)
  }

  post (url, params = {}) {
    return this.axios.$post(`${this.prefix}${url}`, params)
  }

  put (url, params = {}) {
    return this.axios.$put(`${this.prefix}${url}`, params)
  }

  delete (url, params = {}) {
    return this.axios.$delete(`${this.prefix}${url}`, {
      params
    })
  }
}

export default Api
