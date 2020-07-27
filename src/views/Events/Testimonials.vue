<template>
  <v-content>
    <v-container fluid class="py-0 my-0 mt-0">
        <v-row class="py-0 my-0" justify="center" align="center">
            <v-col md="12" sm="12" cols="12" class="py-0 my-0 mb-5 mt-5">
              <h2 :class="this.$vuetify.theme.dark?'white--text':'grey--text text--darken-3'" class="google-font mb-5 mt-5" style="font-size:180%">Testimonials</h2>

               <!-- Testimonial -->
            <p class="google-font mb-3" style="font-size:110%">{{ eventDetails.testimonials }}</p>
            <div>

              <blockquote class="twitter-tweet"><p lang="en" dir="ltr">The Special Maths Academy is a nice platform to improve your math skills, explore different kinds of problems and prepare for Maths Olympiad contests, both local and international, from the pre-olympiad level to the IMO level. <a href="https://t.co/poomHn0tkc">pic.twitter.com/poomHn0tkc</a></p>&mdash; Otutochi Caleb Nwadinkpa (@otutochi) <a href="https://twitter.com/otutochi/status/1281979571039084544?ref_src=twsrc%5Etfw">July 11, 2020</a></blockquote> 

              <blockquote class="twitter-tweet"><p lang="en" dir="ltr">SMA is an incredible organistion that organizes Math Olympiad training programs. It has high quality, dedicated and patient tutors. Its programs are always well organized and of great value. It is a go-to for those who wish to improve their problem solving skills <a href="https://twitter.com/SpecialMaths?ref_src=twsrc%5Etfw">@specialmaths</a></p>&mdash; Chichi (@Chichi78068110) <a href="https://twitter.com/Chichi78068110/status/1284100529392693248?ref_src=twsrc%5Etfw">July 17, 2020</a></blockquote>

              <blockquote class="twitter-tweet"><p lang="en" dir="ltr">To be the best, learn from the best.<br>Don&#39;t miss this 👇🏽, if you are a lover of Mathematics and Problem Solving.<br>I will sponsor two students selected by <a href="https://twitter.com/AnimokuA?ref_src=twsrc%5Etfw">@AnimokuA</a> <br>Send a message to <a href="https://twitter.com/AnimokuA?ref_src=twsrc%5Etfw">@AnimokuA</a> if you are interested. <a href="https://t.co/929Wd0Uqcu">https://t.co/929Wd0Uqcu</a></p>&mdash; Adamu A. (@adamu3820) <a href="https://twitter.com/adamu3820/status/1247501576572370944?ref_src=twsrc%5Etfw">April 7, 2020</a></blockquote> 

              <div class="fb-post" data-href="https://m.facebook.com/story.php?story_fbid=1861293160668074&amp;id=100003622246839 " data-show-text="false" data-width=""><blockquote cite="https://developers.facebook.com/ayorindeemmanuel.olatunde/posts/1861293160668074" class="fb-xfbml-parse-ignore"><p>In the words of one of the brains behind it: &quot;its a company of geniuses that can inspire the next generation of...</p>Posted by <a href="https://www.facebook.com/ayorindeemmanuel.olatunde">Ayorinde Emmanuel Olatunde</a> on&nbsp;<a href="https://developers.facebook.com/ayorindeemmanuel.olatunde/posts/1861293160668074">Monday, April 6, 2020</a></blockquote></div>

              <div class="fb-post" data-href="https://m.facebook.com/story.php?story_fbid=1381982248658607&amp;id=100005405358731" data-show-text="true" data-width=""><blockquote cite="https://developers.facebook.com/obukome.ejaife/posts/1381982248658607" class="fb-xfbml-parse-ignore"><p>For math lovers u guys should totally check this out. These guys are the best at Olympiad math. From functional equations...</p>Posted by <a href="#" role="button">Obukome Ejaife</a> on&nbsp;<a href="https://developers.facebook.com/obukome.ejaife/posts/1381982248658607">Tuesday, July 14, 2020</a></blockquote></div>

              <div class="instagram-post" data-href="https://www.instagram.com/p/CCvO1AtnmXZ/?igshid=17poh75s8qf0d" data-show-text="true" data-width=""><blockquote cite="https://www.instagram.com/p/CCvO1AtnmXZ/?igshid=17poh75s8qf0d" class="fb-xfbml-parse-ignore"><p>If your dream is to do well in olympiads, then specialmaths.ng is definitely going to guide you to make that happen. You will have access to the training from the best Nigerian minds till you reach your target. #olympiad #imo #smal #specialmaths.ng</p>
              Posted by <a href="#" role="button">Okezie Chiedozie</a> on&nbsp;<a href="https://www.instagram.com/p/CCvO1AtnmXZ/?igshid=17poh75s8qf0d">Tuesday, July 16, 2020</a></blockquote></div>
            </div>
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
    }),
  mounted() {
      let twitterScript = document.createElement('script')
      twitterScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
      document.head.appendChild(twitterScript)
    },
};
</script>

<style>
</style>