import Auth from '../api/Auth'
import User from '../api/User'
import Pass from '../api/Pass'
import Groups from '../api/Groups'
export default ({ $axios }, inject) => {
  inject('api', {
    auth: new Auth($axios),
    user: new User($axios),
    pass: new Pass($axios),
    groups: new Groups($axios)
  })
}
