<template>
  <v-content>
    <v-container fluid class="py-0 my-0 mt-0">
        <v-row class="py-0 my-0" justify="center" align="center">
            <v-col md="12" sm="12" cols="12" class="py-0 my-0 mb-5 mt-5">
              <h2 :class="this.$vuetify.theme.dark?'white--text':'grey--text text--darken-3'" class="google-font mb-5 mt-5">Contact</h2>

              <p class="google-font mb-3" style="font-size:110%">{{ eventDetails.contact }}</p>
            </v-col>
        </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "SchdeuleEvents",
  props: ["eventDetails"],
  data:()=>({
        headers: [
            {
                text: 'Start Time',
                align: 'start',
                value: 'starttime',
            },
            { text: 'End Time', value: 'endtime' },
            { text: 'Title', value: 'title' },
            { text: 'Description', value: 'des', width:'50%'}
        ]
    })
};
</script>

<style>
</style>
