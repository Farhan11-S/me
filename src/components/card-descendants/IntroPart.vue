<template>
  <div>
    <v-img
      class="mx-auto rounded-circle"
      height="200px"
      width="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
    </v-img>
    <p class="text-center my-5">Farhan Sangaji</p>
    <div class="mb-5">
      <div class="row dob">
        <div class="col-3">
          <v-icon>mdi-calendar</v-icon>
        </div>
        <div class="col-9">
          <span>October 27, 2003</span>
        </div>
      </div>
      <div class="row location">
        <div class="col-3">
          <v-icon>mdi-map-marker</v-icon>
        </div>
        <div class="col-9">
          <span>Kudus</span>
        </div>
      </div>
      <div class="row email">
        <div class="col-3">
          <v-icon>mdi-email</v-icon>
        </div>
        <div class="col-9">
          <span>farhan11soyae@gmail.com</span>
        </div>
      </div>
      <div class="row phone">
        <div class="col-3">
          <v-icon>mdi-phone</v-icon>
        </div>
        <div class="col-9">
          <span>+62 8821 5035 219</span>
        </div>
      </div>
      <div class="row github">
        <div class="col-3">
          <v-icon>mdi-github</v-icon>
        </div>
        <div class="col-9">
          <span>Farhan11-S</span>
        </div>
      </div>
      <div class="row gitlab">
        <div class="col-3">
          <v-icon>mdi-gitlab</v-icon>
        </div>
        <div class="col-9">
          <span>Soyae11</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroPart",
};
</script>
