import characterService from '@/services/characterService'

const numberOfCharacters = 4

export default {
  generateGame () {
    var characters = []
    var i
    for (i = 0; i < numberOfCharacters; i++) {
      characters.push(characterService.generateCharacter())
    }
    return { characters }
  }
}
