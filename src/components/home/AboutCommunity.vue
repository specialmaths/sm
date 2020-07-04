<template>
  <v-container fluid class="pa-0">
    <v-row align="center" class>
      <v-col cols="12" md="12" lg="12" sm="12" class="pa-0" style="color:white">
        <div class="ma-1">
          <div class="pa-5">
            <p class="google-font mb-0" style="font-size:150%">Who is this for?</p>
            <p
              class="google-font mt-0"
              style="font-size:95%">
              This camp is specifically designed for high-performing students who have participated or interested in 
              participating and acing the national olympiads. Our philosophy is that students will develop stronger 
              problem solving abilities through intuitive understandng of theorems and concepts as opposed to memorizing 
              formulas to solve problems through repeated drills. Thus, our trainings are structured to reflect this philosophy.
            </p>
            <!-- TODO fix -->
            <v-btn
              v-if="checkExistance(config.generalConfig.meetupLink,0)"
              :href="`https://drive.google.com/file/d/1IZ-XP_9IgXrqJ6qhqXZe5rNRJZE26Sdw/view?usp=sharing`"
              target="_blank"
              outlined
              color
              class="ma-0 google-font mb-2"
              style="border-radius:5px;text-transform: capitalize;color:white"
            >Policy Doc (PDF)</v-btn>&nbsp;
            <br />
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  data: () => ({}),
  computed: {
    ...mapState(["config"])
  }
};
</script>