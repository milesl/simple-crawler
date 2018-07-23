import skillService from '@/services/skillService'
import { Monster } from '@/models/monster'
import sillyname from 'sillyname'

const numberOfSkills = 2

export default {
  generateMonster () {
    var randomName = sillyname()
    var randomHealth = Math.floor((Math.random() * 100) + 1)
    var skills = skillService.generateSkills(numberOfSkills)
    return new Monster(randomName, randomHealth, skills)
  }
}
