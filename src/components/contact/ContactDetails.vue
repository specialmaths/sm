<template>
    <v-container fluid class="py-0 my-0 mt-0">
        <v-row class="py-0 my-0">
            <v-col md="9" sm="6" cols="12" class="py-0 my-0">
                <p class="google-font mb-1" style="font-size:110%">
                    Our camps are open to new and experienced Olympians.    
                </p>
                <p class="google-font mt-5">Questions? Please contact <a href="mailto:contact@specialmaths.ng">contact@specialmaths.ng</a></p>
            </v-col>
            <v-col md="3" sm="6" cols="12" class="py-0 my-0" >
                <img :src="require('@/assets/img/svg/contact.svg')" style="float:right" width="80%" alt="">
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    components:{
        // SocialInfo
    },
    props:['data'],
    data:()=>({
    })
}
</script>