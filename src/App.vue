<template>
  <v-app>
    <v-main>
      <v-container>
        <template>
          <v-carousel height="600">
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
            </v-carousel-item>
          </v-carousel>
        </template>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    items: [
      {
        src: "./assets/download.png",
      },
      {
        src: "./assets/logo.png",
      },
    ],
  }),
};
</script>
