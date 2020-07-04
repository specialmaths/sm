<template>
  <v-footer
    height="auto"
    fixedfir
    class="hidden-sm-and-down ma-0"
    :class="this.$vuetify.theme.dark == true?'grey darken-4':'white'"
  >
    <v-container fluid >
      <v-row align="center" justify="center" class="my-0 py-0">
        <v-col cols="12" md="10" lg="10" sm="11" class="py-0 my-0">
          <v-divider v-if="!this.$vuetify.theme.dark"></v-divider>
          <!-- {{socialLinks}} -->
          <p class="google-font mt-4 mb-3" style="font-size:130%" >Follow Us:
              <v-tooltip top v-if="checkExistance(config.generalConfig.socialLinks.facebook,0)">
                 <template v-slot:activator="{ on }">
                   <!-- https://www.facebook.com/SpecialMaths/ -->
                    <v-btn text icon v-on="on" rel="noreferrer" :href="facebook()" target="_blank" slot="activator">
                      <v-icon>mdi-facebook</v-icon>
                    </v-btn>
                 </template>
                  <span>Facebook</span>
              </v-tooltip>

              <v-tooltip top v-if="checkExistance(config.generalConfig.socialLinks.twitter,0)">
                <!-- https://twitter.com/SpecialMaths -->
                 <template v-slot:activator="{ on }">
                    <v-btn text icon v-on="on" rel="noreferrer" :href="twitter()" target="_blank" slot="activator">
                      <v-icon>mdi-twitter</v-icon>
                    </v-btn>
                 </template>
                  <span>Twitter</span>
              </v-tooltip>
          </p>
          <v-divider></v-divider>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    data:()=>({
    }),
    computed:{
      ...mapState(['config'])
    },
    methods: {
      facebook() {
        return "https://www.facebook.com/SpecialMaths/";
      },
      twitter() {
        return "https://twitter.com/SpecialMaths";
      }
    }
  }
</script>

<style scoped>
  .darkThemeTextLink{
    color: #FAFAFA
  }
  .lightThemeTextLink{
    color: #3E4551
  }
</style>