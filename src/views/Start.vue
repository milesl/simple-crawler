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
        <div class="title mb-3 mt-3">Characters</div>
        <v-layout row wrap>
          <v-flex xs12 sm6 md3 v-for="(character, characterIndex) in characters" :key="characterIndex">
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{ character.name }}</h3>
                  <div>
                    <p>Health: {{ character.health }}</p>
                    <div>
                      <v-btn v-for="(skill, skillIndex) in character.skills" :key="skillIndex">{{ skill.name }}</v-btn>
                    </div>
                  </div>
                </div>
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
    ...mapGetters(['characters', 'day', 'started'])
  },
  data () {
    return { }
  },
  methods: {
    ...mapActions(['startGame', 'resetGame', 'nextDay']),
    start () {
      // this.$store.dispatch('startGame')
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
