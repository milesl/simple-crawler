import Vue from 'vue'
import Vuex from 'vuex'

import gameService from '@/services/gameService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: [],
    monsters: [],
    day: 0,
    started: false
  },
  mutations: {
    setCharacters (state, characters) {
      state.characters = characters
    },
    setMonsters (state, monsters) {
      state.monsters = monsters
    },
    incrementDay (state) {
      state.day += 1
    },
    setStarted (state, started) {
      state.started = started
    },
    setDay (state, day) {
      state.day = day
    },
    shuffleTurnSquence (state) {
      var totalTurns = new Array(state.characters.length + state.monsters.length - 1 + 1).fill().map((_, idx) => 1 + idx)
      state.characters.forEach(function (element, index, array) {
        var turn = Math.floor(Math.random() * totalTurns.length)
        state.characters[index].turnSequence = totalTurns[turn]
        totalTurns.splice(turn, 1)
      })
      state.monsters.forEach(function (element, index, array) {
        var turn = Math.floor(Math.random() * totalTurns.length)
        state.monsters[index].turnSequence = totalTurns[turn]
        totalTurns.splice(turn, 1)
      })
    }
  },
  actions: {
    startGame ({ dispatch, commit }) {
      var game = gameService.generateGame()
      commit('setCharacters', game.characters)
      commit('setStarted', true)
      dispatch('nextDay')
    },
    resetGame ({ dispatch, commit }) {
      commit('setCharacters', [])
      commit('setMonsters', [])
      commit('setStarted', false)
      commit('setDay', 0)
    },
    nextDay ({ dispatch, commit }) {
      var day = gameService.generateNextDay()
      commit('setMonsters', day.monsters)
      commit('incrementDay')
      commit('shuffleTurnSquence')
    }
  },
  getters: {
    characters: state => {
      return state.characters
    },
    monsters: state => {
      return state.monsters
    },
    day: state => {
      return state.day
    },
    started: state => {
      return state.started
    }
  }
})
