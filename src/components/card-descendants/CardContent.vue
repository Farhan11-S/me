<template>
  <div>
    <div class="card-nav">
      <v-card-actions>
        <v-btn class="ml-auto" @click="$router.push({ path: '/' })" text>
          About Me
        </v-btn>

        <v-btn @click="$router.push({ name: 'Project List' })" text>
          Projects
        </v-btn>
      </v-card-actions>
    </div>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "CardContent",
};
</script>

<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
