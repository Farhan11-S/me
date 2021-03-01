<template>
  <div>
    <div class="card-title mt-3">
      <div class="section-title">
        <h1>{{ $route.name }}</h1>
      </div>
    </div>
    <div class="card-content">
      <div class="section mb-5">
        <div class="row">
          <div class="col-12 col-md-6 my-2">
            <v-card
              max-width="344"
              outlined
              @click="$router.push({ path: '/ohio' })"
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">
                    Ohio Food Catalog
                  </v-list-item-title>
                  <v-list-item-subtitle
                    >Make food catalog for restaurant</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </div>
          <div class="col-12 col-md-6 my-2">
            <v-card
              max-width="344"
              outlined
              @click="$router.push({ path: '/tangria' })"
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">
                    Tangria Product Management
                  </v-list-item-title>
                  <v-list-item-subtitle
                    >Make CRUD with Laravel to dynamically manage the
                    element</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectList",
};
</script>
