<template>
  <v-container fluid class="py-0">
    <v-row align="center" class="fill-height">
      <v-col md="3" sm="6" cols="12" class>
        <v-img
          :src="require('@/assets/logo.png')"
          :lazy-src="require('@/assets/logo.png')"
          width="100%"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col md="9" sm="6" cols="12" class="px-0">
        <p
          class="google-font mb-1"
          :class="$vuetify.theme.dark == true?'dark-font-color':'light-font-color'"
          style="font-weight: 350;font-size:230%"
        >
          <b>
            Nigerian Mathematics Olympiad
            <span style="color: #1a73e8;">Training</span>.
          </b>
        </p>
        <p class="google-font mt-0 mb-0" style="font-size:150%">{{config.generalConfig.descName}}</p>
        <p class="google-font" style="font-size:100%">{{config.generalConfig.shortDescription}}</p>
        <p class="google-font" style="font-size:100%;color:#9e9e9e">
          <span v-for="(item,i) in config.generalConfig.hashtags" :key="i">
            <v-chip
              :href="'https://twitter.com/hashtag/'+item"
              rel="noreferrer"
              target="_blank"
              small
              class="mr-1"
            >#{{item}}</v-chip>
            <!-- &nbsp; -->
          </span>
        </p>

        <v-btn
          v-if="checkExistance(config.generalConfig.registerLink,0)"
          :href="config.generalConfig.registerLink"
          rel="noreferrer"
          aria-label="Upcoming Camps"
          class="ma-0 google-font elevation-1 primary mr-2"
          style="text-transform: capitalize;border-radius:5px;color:white"
        >Register for the Aug. 3rd Camp</v-btn>

        <v-btn
          v-if="checkExistance(config.generalConfig.upcomingCamps,0)"
          @click="$router.push(config.generalConfig.upcomingCamps)"
          rel="noreferrer"
          aria-label="Upcoming Camps"
          rounded
          color="cyan"
          style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;"
          outlined
          class="ml-0"
          dark
        >Upcoming Camps</v-btn>

        &nbsp;

        <v-btn
          v-if="checkExistance(config.generalConfig.subscriptionLink,0)"
          :href="config.generalConfig.subscriptionLink"
          aria-label="Subscribe"
          rounded
          rel="noreferrer"
          color="cyan"
          style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;"
          outlined
          class="ml-0"
          dark
        >Subscribe</v-btn>

        &nbsp;

        <v-btn
          v-if="checkExistance(config.generalConfig.learnMoreLink,0)"
         @click="$router.push(config.generalConfig.learnMoreLink)"
          aria-label="Learn More"
          rounded
          rel="noreferrer"
          color="cyan"
          style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;"
          outlined
          class="ml-0"
          dark
        >Learn More</v-btn>
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