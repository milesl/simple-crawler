import characterService from '@/services/characterService'
import monsterService from '@/services/monsterService'

const numberOfCharacters = 4

const minimumNumberOfMonsters = 1
const maximumNumberOfMonsters = 5

export default {
  generateGame () {
    var characters = []
    var i
    for (i = 0; i < numberOfCharacters; i++) {
      characters.push(characterService.generateCharacter())
    }
    return { characters }
  },
  generateNextDay () {
    var numberOfMonsters = Math.floor(Math.random() * maximumNumberOfMonsters) + minimumNumberOfMonsters
    var monsters = []
    for (var i = 0; i < numberOfMonsters; i++) {
      monsters.push(monsterService.generateMonster())
    }
    return { monsters }
  }
}
