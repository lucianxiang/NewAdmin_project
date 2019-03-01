// import Vue from 'vue'
// import Vuex from 'vuex'

Vue.use(Vuex)

import app from './modules/app'
import user from './modules/user'
import tagsView from './modules/tagsView'
import permission from './modules/permission'
import getters from './getters'
import advertisement from './advertisement'
import car from './car'
import food from './food'
import hotel from './hotel'
import movie from './movie'
import admin from './admin'
import ticket from './ticket'
import education from './education'


const store = new Vuex.Store(
  {
    modules: {
      tagsView,
      permission,
      app,
      user,
      advertisement,
      car,
      food,
      hotel,
      movie,
      admin,
      ticket,
      education,
    },
    getters
  }
);

export default store
