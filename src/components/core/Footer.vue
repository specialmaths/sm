<template>
  <v-footer
    height="auto"
    fixedfir
    class="hidden-sm-and-down ma-0"
    :class="this.$vuetify.theme.dark == true?'grey darken-4':'white'"
  >
  <!-- style="border-color:#e0e0e0;border-width: 1px;border-style: solid;border-bottom: 0;border-left:0;border-right:0" -->
    <v-container fluid >
      <v-row align="center" justify="center" class="my-0 py-0">
        <v-col cols="12" md="10" lg="10" sm="11" class="py-0 my-0">
          <v-divider v-if="!this.$vuetify.theme.dark"></v-divider>
          <!-- {{socialLinks}} -->
          <p class="google-font mt-4 mb-3" style="font-size:130%" >Follow Us:
              <v-tooltip top v-if="checkExistance(config.generalConfig.socialLinks.facebook,0)">
                 <template v-slot:activator="{ on }">
                    <v-btn text icon v-on="on" rel="noreferrer" :href="config.generalConfig.socialLinks.facebook" target="_blank" slot="activator">
                      <v-icon>mdi-facebook</v-icon>
                    </v-btn>
                 </template>
                  <span>Facebook</span>
              </v-tooltip>

              <v-tooltip top v-if="checkExistance(config.generalConfig.socialLinks.twitter,0)">
                 <template v-slot:activator="{ on }">
                    <v-btn text icon v-on="on" rel="noreferrer" :href="config.generalConfig.socialLinks.twitter" target="_blank" slot="activator">
                      <v-icon>mdi-twitter</v-icon>
                    </v-btn>
                 </template>
                  <span>Twitter</span>
              </v-tooltip>

              <v-tooltip top v-if="checkExistance(config.generalConfig.socialLinks.youtube,0)">
                 <template v-slot:activator="{ on }">
                    <v-btn text icon v-on="on" rel="noreferrer" :href="config.generalConfig.socialLinks.youtube" target="_blank" slot="activator">
                      <v-icon>mdi-youtube-play</v-icon>
                    </v-btn>
                 </template>
                  <span>YouTube</span>
              </v-tooltip>

              <v-tooltip top v-if="checkExistance(config.generalConfig.socialLinks.instagram,0)">
                 <template v-slot:activator="{ on }">
                    <v-btn text icon v-on="on" rel="noreferrer" :href="config.generalConfig.socialLinks.instagram" target="_blank" slot="activator">
                      <v-icon>mdi-instagram</v-icon>
                    </v-btn>
                 </template>
                  <span>Instagram</span>
              </v-tooltip>

              <v-tooltip top v-if="checkExistance(config.generalConfig.socialLinks.github,0)">
                 <template v-slot:activator="{ on }">
                    <v-btn text icon v-on="on" rel="noreferrer" :href="config.generalConfig.socialLinks.github" target="_blank" slot="activator">
                      <v-icon>mdi-github-circle</v-icon>
                    </v-btn>
                 </template>
                  <span>Github</span>
              </v-tooltip>
              <v-tooltip top v-if="checkExistance(config.generalConfig.socialLinks.linkedin,0)">
                 <template v-slot:activator="{ on }">
                    <v-btn text icon v-on="on" rel="noreferrer" :href="config.generalConfig.socialLinks.linkedin" target="_blank" slot="activator">
                      <v-icon>mdi-linkedin</v-icon>
                    </v-btn>
                 </template>
                  <span>Linkedin</span>
              </v-tooltip>
              <v-tooltip top v-if="checkExistance(config.generalConfig.socialLinks.medium,0)">
                 <template v-slot:activator="{ on }">
                    <v-btn text icon v-on="on" rel="noreferrer" :href="config.generalConfig.socialLinks.medium" target="_blank" slot="activator">
                      <v-icon>mdi-medium</v-icon>
                    </v-btn>
                 </template>
                  <span>Medium</span>
              </v-tooltip>
          </p>
          <v-divider></v-divider>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" class="mt-3">
        <v-col cols="12" md="10" lg="10" sm="11" class="my-0 py-0">
          <v-container fluid class="pa-0 my-0">
            <!-- Links Section -->

            <v-row justify="start" class="">
              <v-col cols="12" md="3" lg="3" sm="3" class="py-2" >
                  <p class="google-font mb-0" style="font-size: 140%;font-weight: 300;"><b>Contests</b></p>
                  <div v-for="(item,i) in config.footerConfig['Contests']" :key="i">
                        <a :href="item.link" rel="noreferrer" :class="$vuetify.theme.dark?'darkThemeTextLink':'lightThemeTextLink'" class="google-font my-3" target="_blank" style="text-decoration: none;font-size:110%">{{item.linkname}}</a><br>
                  </div>
              </v-col>

              <v-col cols="12" md="3" lg="3" sm="3" class="py-2" >
                  <p class="google-font mb-0" style="font-size: 140%;font-weight: 300;"><b>Resources</b></p>
                  <div v-for="(item,i) in config.footerConfig['Resources']" :key="i">
                        <a :href="item.link" rel="noreferrer" :class="$vuetify.theme.dark?'darkThemeTextLink':'lightThemeTextLink'" class="google-font my-3" target="_blank" style="text-decoration: none;font-size:110%">{{item.linkname}}</a><br>
                  </div>
              </v-col>
            </v-row>

            <!-- Links Section -->
          </v-container>
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