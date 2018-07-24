<template>
  <v-container>
    <v-layout row wrap v-if="!started">
      <v-flex xs12>
        <v-btn block dark @click="start">Start</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-if="started">
      <v-flex xs12 sm6>
        <v-btn block dark @click="next">Next Day
          <v-avatar>{{ day }}</v-avatar>
        </v-btn>
      </v-flex>
      <v-flex xs12 sm6>
        <v-btn block dark @click="reset">Reset</v-btn>
      </v-flex>
      <v-flex xs12 class="text-xs-left">
        <div class="title mb-3 mt-3">Turns</div>
        <v-layout wrap row>
          <v-flex xs12>
            <v-badge overlap v-for="(turn, index) in turnSequence" :key="index" class="mr-2 mb-2">
              <span slot="badge">{{ turn.turnSequence }}</span>
              <v-avatar :color="turn.type === 'monster' ? 'red' : 'green'">
                <span class="white--text headline">{{ turn.initials }}</span>
              </v-avatar>
             </v-badge>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 class="text-xs-left">
        <div class="title mb-3 mt-3">Characters</div>
        <v-layout row wrap>
          <v-flex xs12 sm6 md3 v-for="(character, characterIndex) in characters" :key="characterIndex">
            <v-card>
              <v-card-title primary-title>
                <v-layout row wrap>
                  <v-flex xs12>
                    <h3 class="headline mb-0">
                      {{ character.name }}
                    </h3>
                  </v-flex>
                  <v-flex xs12>
                    <v-chip color="teal" text-color="white">
                      {{ character.turnSequence }} Turn
                    </v-chip>
                    <v-chip color="green" text-color="white">
                      {{ character.health }} Health
                    </v-chip>
                  </v-flex>
                  <v-flex xs12>
                    <v-btn v-for="(skill, skillIndex) in character.skills" :key="skillIndex">{{ skill.name }}</v-btn>
                  </v-flex>
                </v-layout>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 class="text-xs-left">
        <div class="title mb-3 mt-3">Monsters</div>
        <v-layout row wrap>
          <v-flex xs12 sm6 md3 v-for="(monster, monsterIndex) in monsters" :key="monsterIndex">
            <v-card>
              <v-card-title primary-title>
                <v-layout row wrap>
                  <v-flex xs12>
                    <h3 class="headline mb-0">
                      {{ monster.name }}
                    </h3>
                  </v-flex>
                  <v-flex xs12>
                    <v-chip color="teal" text-color="white">
                      {{ monster.turnSequence }} Turn
                    </v-chip>
                    <v-chip color="green" text-color="white">
                      {{ monster.health }} Health
                    </v-chip>
                  </v-flex>
                  <v-flex xs12>
                    <v-btn v-for="(skill, skillIndex) in monster.skills" :key="skillIndex">{{ skill.name }}</v-btn>
                  </v-flex>
                </v-layout>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'start',
  components: {
  },
  computed: {
    ...mapGetters(['characters', 'monsters', 'day', 'started', 'turnSequence'])
  },
  data () {
    return { }
  },
  methods: {
    ...mapActions(['startGame', 'resetGame', 'nextDay']),
    start () {
      this.startGame()
    },
    next () {
      this.nextDay()
    },
    reset () {
      this.resetGame()
    }
  }
}
</script>
