<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-btn block dark @click="start">Start</v-btn>
      </v-flex>
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex xs12 sm6 md3 v-for="(character, characterIndex) in characters" :key="characterIndex">
            <v-card>
              <v-card-title primary-title>
                <div class="text-xs-left">
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
    ...mapGetters(['characters'])
  },
  methods: {
    ...mapActions(['startGame']),
    start () {
      // this.$store.dispatch('startGame')
      this.startGame()
    }
  }
}
</script>
