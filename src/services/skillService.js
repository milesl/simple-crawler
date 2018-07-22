import { Skill } from '@/models/skill'
import { skillTypes } from '@/models/skillType'

const skills = [
  new Skill('Attack', skillTypes.attack, '10'),
  new Skill('Heal', skillTypes.heal, '10'),
  new Skill('Insult', skillTypes.affect, '10')
]

export default {
  generateSkills (numberOfSkills = 1) {
    return skills.sort(() => { return 0.5 - Math.random() }).slice(0, numberOfSkills)
  },
  generateSkill () {
    return skills[Math.floor(Math.random() * skills.length)]
  }
}
