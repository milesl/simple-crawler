import skillService from '@/services/skillService'
import { Character } from '@/models/character'
import sillyname from 'sillyname'

const numberOfSkills = 2

export default {
  generateCharacter () {
    var randomName = sillyname()
    var randomHealth = Math.floor((Math.random() * 100) + 1)
    var skills = skillService.generateSkills(numberOfSkills)
    return new Character(randomName, randomHealth, skills)
  }
}
