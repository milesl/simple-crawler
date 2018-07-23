import characterService from '@/services/characterService'
import monsterService from '@/services/monsterService'

const numberOfCharacters = 4
const numberOfMonsters = 5

export default {
  generateGame () {
    var characters = []
    var i
    for (i = 0; i < numberOfCharacters; i++) {
      characters.push(characterService.generateCharacter())
    }
    var monsters = []
    for (i = 0; i < numberOfMonsters; i++) {
      monsters.push(monsterService.generateMonster())
    }
    return { characters, monsters }
  }
}
