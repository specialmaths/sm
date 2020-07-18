<template>
  <v-content>
    <v-container class="py-0 my-0 mt-0">
      <v-row class="py-0 my-0" align="center" justify="center">
        <v-col cols="12" md="12" class="pa-0">
          <v-img
            :src="getImgUrl(eventDetails.image, 'eventbanner.jpg')"
            :lazy-src="getImgUrl(eventDetails.image, 'eventbanner.jpg')"
            width="100%"
            cover
            style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,1)"
            height="250px"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
            <v-card-title
              class="fill-height align-end google-font pb-5 white--text"
            >
              <div>
                <p class="my-0" style="font-size:150%">
                  {{ eventDetails.name }}
                </p>
                <!-- {{config}} -->
                <!-- <br> -->
                <p class="my-0 my-n1" style="font-size:80%">
                  {{ config.generalConfig.name }}
                </p>
                <!-- <br> -->
                <p class="my-0 my-n2" style="font-size:70%">
                  {{ eventDetails.date }}
                </p>
              </div>
            </v-card-title>
            <v-layout
              slot="placeholder"
              fill-height
              align-center
              justify-center
              ma-0
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-layout>
          </v-img>
        </v-col>
        <v-col cols="12" md="12" class="pa-0 mt-5">
          <v-container>
            <h1
              :class="
                this.$vuetify.theme.dark
                  ? 'white--text'
                  : 'grey--text text--darken-3'
              "
              class="google-font mb-0"
              style="font-size:180%"
            >
              {{ eventDetails.name }} Details
            </h1>
            <p class="google-font mb-3" style="font-size:110%">{{ eventDetails.des }}</p>

            <span v-for="(item, i) in eventDetails.hashtags" :key="i">
              <v-chip
                class="mr-1"
                :href="'https://twitter.com/hashtag/' + item"
                target="_blank"
                label
                >#{{ item }}</v-chip
              >
            </span>

            <p class="google-font mb-0 mt-3">
              <b>Date:</b>
              {{ eventDetails.date }} - {{ eventDetails.endDate }}
            </p>
            <p class="google-font my-0">
              <b>Time:</b>
              {{ eventDetails.time.starttime }} -
              {{ eventDetails.time.endtime }}
            </p>
            <p class="google-font my-0">
              <b>Venue: </b>
              <a
                target="_blank"
                style="text-decoration:none"
                :href="eventDetails.venue.googlemapsurl"
                >{{ eventDetails.venue.name }}</a
              >
            </p>

            <div class="mt-4 pb-5">
              <!-- <p class="google-font mb-0">
              <b>Important Links</b>
            </p> -->
              <v-btn
                color="primary"
                dark
                target="_blank"
                v-if="eventDetails.links.registration"
                :href="eventDetails.links.registration"
                class="mr-1 mb-1"
                label
                >Registration</v-btn
              >
              <v-btn
                color="pink"
                dark
                target="_blank"
                v-if="eventDetails.links.meetup"
                :href="eventDetails.links.meetup"
                class="mr-1 mb-1"
                label
                >Meetup</v-btn
              >

              <v-btn
                color="orange"
                dark
                target="_blank"
                v-if="eventDetails.links.callforspeaker"
                :href="eventDetails.links.callforspeaker"
                class="mr-1 mb-1"
                label
                >Call For Speakers</v-btn
              >

              <v-btn
                color="indigo"
                dark
                target="_blank"
                v-if="eventDetails.links.facebook"
                :href="eventDetails.links.facebook"
                class="mr-1 mb-1"
                label
                >Facebook</v-btn
              >

              <v-btn
                color="success"
                dark
                target="_blank"
                v-if="eventDetails.links.feedback"
                :href="eventDetails.links.feedback"
                class="mr-1 mb-1"
                label
                >Feedback</v-btn
              >

              <v-btn
                color="red"
                dark
                target="_blank"
                v-if="eventDetails.links.youtube"
                :href="eventDetails.links.youtube"
                class="mr-1 mb-1"
                label
                >Youtube Live</v-btn
              >
            </div>

            <!-- Categories -->
            <h3 :class=" this.$vuetify.theme.dark ? 'white--text' : 'grey--text text--darken-3' " class="google-font mb-0" style="font-size:180%">
              Categories
            </h3>
            <p class="google-font mb-3" style="font-size:110%">{{ eventDetails.categories }}</p>

            <!-- Payment -->
            <h3 :class=" this.$vuetify.theme.dark ? 'white--text' : 'grey--text text--darken-3' " class="google-font mb-0" style="font-size:180%">
              Payment
            </h3>
            <p class="google-font mb-3" style="font-size:110%">{{ eventDetails.payment }}</p>

            <!-- Testimonial -->
            <h3 :class=" this.$vuetify.theme.dark ? 'white--text' : 'grey--text text--darken-3' " class="google-font mb-0" style="font-size:180%">
              Testimonials
            </h3>
            <p class="google-font mb-3" style="font-size:110%">{{ eventDetails.testimonials }}</p>
            <div>
              <blockquote class="twitter-tweet"><p lang="en" dir="ltr">The Special Maths Academy is a nice platform to improve your math skills, explore different kinds of problems and prepare for Maths Olympiad contests, both local and international, from the pre-olympiad level to the IMO level. <a href="https://t.co/poomHn0tkc">pic.twitter.com/poomHn0tkc</a></p>&mdash; Otutochi Caleb Nwadinkpa (@otutochi) <a href="https://twitter.com/otutochi/status/1281979571039084544?ref_src=twsrc%5Etfw">July 11, 2020</a></blockquote> 
              <blockquote class="twitter-tweet"><p lang="en" dir="ltr">To be the best, learn from the best.<br>Don&#39;t miss this 👇🏽, if you are a lover of Mathematics and Problem Solving.<br>I will sponsor two students selected by <a href="https://twitter.com/AnimokuA?ref_src=twsrc%5Etfw">@AnimokuA</a> <br>Send a message to <a href="https://twitter.com/AnimokuA?ref_src=twsrc%5Etfw">@AnimokuA</a> if you are interested. <a href="https://t.co/929Wd0Uqcu">https://t.co/929Wd0Uqcu</a></p>&mdash; Adamu A. (@adamu3820) <a href="https://twitter.com/adamu3820/status/1247501576572370944?ref_src=twsrc%5Etfw">April 7, 2020</a></blockquote> 
              <div class="fb-post" data-href="https://m.facebook.com/story.php?story_fbid=1861293160668074&amp;id=100003622246839 " data-show-text="false" data-width=""><blockquote cite="https://developers.facebook.com/ayorindeemmanuel.olatunde/posts/1861293160668074" class="fb-xfbml-parse-ignore"><p>In the words of one of the brains behind it: &quot;its a company of geniuses that can inspire the next generation of...</p>Posted by <a href="https://www.facebook.com/ayorindeemmanuel.olatunde">Ayorinde Emmanuel Olatunde</a> on&nbsp;<a href="https://developers.facebook.com/ayorindeemmanuel.olatunde/posts/1861293160668074">Monday, April 6, 2020</a></blockquote></div>
              <div class="fb-post" data-href="https://m.facebook.com/story.php?story_fbid=1381982248658607&amp;id=100005405358731" data-show-text="true" data-width=""><blockquote cite="https://developers.facebook.com/obukome.ejaife/posts/1381982248658607" class="fb-xfbml-parse-ignore"><p>For math lovers u guys should totally check this out. These guys are the best at Olympiad math. From functional equations...</p>Posted by <a href="#" role="button">Obukome Ejaife</a> on&nbsp;<a href="https://developers.facebook.com/obukome.ejaife/posts/1381982248658607">Tuesday, July 14, 2020</a></blockquote></div>
            </div>
            
            <!-- Contact -->
            <h3 :class=" this.$vuetify.theme.dark ? 'white--text' : 'grey--text text--darken-3' " class="google-font mb-0" style="font-size:180%">
              Contact
            </h3>
            <p class="google-font mb-3" style="font-size:110%">{{ eventDetails.contact }}</p>
            
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "EventAbout",
  props: ["eventDetails"],
  computed: {
    ...mapState(["config"]),
  },
};
</script>

<style></style>
