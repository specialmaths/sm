<template>
    <v-container fluid class="py-0 my-0 mt-2 mb-5">
        <v-row class="py-0 my-0" align="center">
            <v-col md="4" sm="12" cols="12" class="py-0 my-0">
                <!-- <v-img
                    :src="require('@/assets/img/dontremove/about.png')"
                    :lazy-src="require('@/assets/img/dontremove/about.png')"
                    class=" mb-3"
                    width="100%"
                > -->
                <iframe height="300px" width="430px" src="https://www.youtube.com/embed/zgILHY3MvFE?autoplay=1&cc_load_policy=1&controls=0&&modestbranding=1&loop=1" frameborder="0" allowfullscreen> </iframe>
                <!-- <video-embed :params="{autoplay: 1}" src="https://www.youtube.com/embed/zgILHY3MvFE"></video-embed> -->
                    <!-- <template v-slot:placeholder>
                        <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                        >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-row>
                    </template> -->
                <!-- </v-img> -->
            </v-col>
            <v-col md="8" sm="12" cols="12" class="py-0 my-0">
                <!-- {{data}} -->
                <p class="google-font mt-0" style="font-size:110%">{{data.longDescription}}</p>
                <p class="google-font mt-0" style="font-size:110%">{{data.longMission}}</p>
                <br>
                <v-btn v-if="checkExistance(data.becomemember, 0)" :href="data.becomemember" target="_blank" class="ma-0 google-font elevation-1 primary" style="text-transform: capitalize;border-radius:5px;color:white">Become a Member</v-btn>

                &nbsp;

                <!-- <v-btn v-if="checkExistance(data.learnMoreLink, 0)" :href="data.learnMoreLink" target="_blank" rounded color="cyan" style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;" outlined  class="ml-0" dark>Learn More</v-btn>

                &nbsp; -->

                <v-btn v-if="checkExistance(data.teamLink, 0)" @click="$router.push(data.teamLink)" target="_blank" rounded color="cyan" style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;" outlined  class="ml-0" dark>Meet the Team</v-btn>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    props:['data'],
    data:()=>({

    })
}
</script>