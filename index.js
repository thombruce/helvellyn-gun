import gun from './services/gun'
import db from './services/db'
import userDb from './services/userDb'

import { user } from './services/store'

export { gun, db, user, userDb }

export default {
  install: function (Vue, options = {}) {
    user.onAuth = options.onAuth || user.onAuth

    Vue.prototype.$gun = gun
    Vue.prototype.$db = db
    Vue.prototype.$user = user
    Vue.prototype.$userDb = userDb
  }
}
