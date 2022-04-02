export const state = () => ({
  list: [],
  filteredList: []
})

export const mutations = {
  INIT (state, list) {
    state.list = list
  },
  ADD (state, password) {
    state.list.push(password)
  },
  REMOVE (state, index) {
    state.list.splice(state.list.indexOf(index), 1)
  },
  FILTER (state, group) {
    state.filteredList = state.list.filter(password => password.groups.includes(group))
  }
}

export const actions = {
  async add () {
    // this.$api.getGroup
  }
}
