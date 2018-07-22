import Vue from 'vue'
import Vuex from 'vuex'

import gameService from '@/services/gameService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: []
  },
  mutations: {
    setCharacters (state, characters) {
      state.characters = characters
    }
  },
  actions: {
    startGame ({ dispatch, commit }) {
      var game = gameService.generateGame()
      commit('setCharacters', game.characters)
    }
  },
  getters: {
    characters: state => {
      return state.characters
    }
  }
})
