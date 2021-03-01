<template>
  <div>
    <div class="card-title mt-3">
      <div class="section-title">
        <h1>{{ $route.name }}</h1>
      </div>
    </div>
    <div class="card-content">
      <div class="section mb-5">
        <v-img src="@/assets/image/tangria.png" class="my-4"></v-img>
        <p>
          Make CRUD with Laravel to dynamically manage the items in main
          website. The idea is to change the content of main website without
          code. User just need an access to admin panel, and they will have the
          full right to manipulate the contents
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tangria",
};
</script>
