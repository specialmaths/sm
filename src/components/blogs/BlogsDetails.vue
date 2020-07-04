<template>
  <v-container fluid class="py-0 my-0 mt-0">
    <v-row class="py-0 my-0">
      <v-col md="12" sm="12" cols="12" class="py-0 my-0">
        <v-row class>
          <v-col>
            <p class="google-font mb-0">
              Our Medium blog is coming soon.
              <a :href="blogURL" style="text-decoration:none" target="_blank">Medium</a>
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import service from "@/services/appservices";
export default {
  inject: ["theme"],
  components: {
    // BlogCard: () => import("@/components/blogs/BlogCard")
  },
  data() {
    return {
      blogsData: [],
      loader: true,
      blogURL: ""
    };
  },
  computed: {
    ...mapState(["config"])
  },
  mounted() {
    this.getMediumBlogs();
  },
  methods: {
    getMediumBlogs() {
      this.loader = true;
      service
        .getAllMediumBlogs(this.config.generalConfig.blogs.medium)
        .then(res => {
          if (res.success) {
            this.loader = false;
            this.blogsData = res.data;
            this.blogURL = this.blogsData.feed.link;
          } else {
            this.loader = false;
          }
        })
        .catch(e => {
          this.loader = false;
        });
    }
  }
};
</script>