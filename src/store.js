import Vue from 'vue'
import Vuex from 'vuex'

import gameService from '@/services/gameService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: [],
    day: 1,
    started: false
  },
  mutations: {
    setCharacters (state, characters) {
      state.characters = characters
    },
    incrementDay (state) {
      state.day += 1
    },
    setStarted (state, started) {
      state.started = started
    },
    setDay (state, day) {
      state.day = day
    }
  },
  actions: {
    startGame ({ dispatch, commit }) {
      var game = gameService.generateGame()
      commit('setCharacters', game.characters)
      commit('setStarted', true)
    },
    resetGame ({ dispatch, commit }) {
      commit('setCharacters', [])
      commit('setStarted', false)
      commit('setDay', 1)
    },
    nextDay ({ dispatch, commit }) {
      // generate a monster
      commit('incrementDay')
    }
  },
  getters: {
    characters: state => {
      return state.characters
    },
    day: state => {
      return state.day
    },
    started: state => {
      return state.started
    }
  }
})
