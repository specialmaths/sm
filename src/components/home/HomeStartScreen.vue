<template>
  <v-container fluid class="py-0">
    <v-row align="center" class="fill-height">
      <v-col md="2" sm="4" cols="12" class>
        <v-img
          :src="require('@/assets/img/svg/student-colour.svg')"
          :lazy-src="require('@/assets/img/svg/student-colour.svg')"
          width="100%"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col md="10" sm="8" cols="12" class="px-0">
        <p
          class="google-font mb-1"
          :class="$vuetify.theme.dark == true?'dark-font-color':'light-font-color'"
          style="font-weight: 350;font-size:230%"
        >
          <b>
            Nigerian Mathematics Olympiad 
            <span style="color: #1a73e8;">Training</span>
          </b>
        </p>
        <p class="google-font mt-0 mb-0" style="font-size:150%">Next generation of Olympians</p>
        <p class="google-font" style="font-size:100%">
          Special Maths Academy Limited was founded in 2019 with the aim of training intelligent young minds to be 
          competitive at the level of the world’s toughest maths contest (IMO). At SMAL, we are passionate about 
          developing the next generation of mathematicians that will solve world’s most challenging problems.
        </p>

        <v-btn
          v-if="checkExistance(config.generalConfig.becomemember,0)"
          :href="'/camps'"
          rel="noreferrer"
          aria-label="Register"
          class="ma-0 google-font elevation-1 primary mr-2"
          style="text-transform: capitalize;border-radius:5px;color:white"
        >Upcoming Camps</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({}),
  computed: {
    ...mapState(["config"])
  }
};
</script>

<style scoped>
.dark-font-color {
  color: white;
}
.light-font-color {
  color: #616161;
}
</style>