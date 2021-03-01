<template>
  <div class="py-5 container h-100">
    <div class="row h-100 justify-content-center align-items-center">
      <v-card class="col-12" max-width="1200">
        <div class="row">
          <div class="col-md-4 p-3 card-intro">
            <intro-part />
          </div>
          <v-divider class="col-sm-12" :vertical="dividerVertical"></v-divider>
          <div class="col-md-7">
            <card-content />
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import CardContent from "./card-descendants/CardContent.vue";
import IntroPart from "./card-descendants/IntroPart.vue";
export default {
  name: "MainCard",
  components: {
    IntroPart,
    CardContent,
  },
  data: () => ({
    dividerVertical: true,
    windowWidth: window.innerWidth,
  }),
  watch: {
    windowWidth(newWidth) {
      this.midResize(newWidth);
    },
  },
  created() {
    this.midResize(this.windowWidth);
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    midResize(variable) {
      if (variable >= 768) {
        this.dividerVertical = true;
      } else {
        this.dividerVertical = false;
      }
    },
  },
};
</script>
