<template>
  <div id="app">
    <Nav />
    <router-view/>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Nav from '@/components/layout/Nav.vue';
import Footer from '@/components/layout/Footer.vue';

@Component({
  components: {
    Nav,
    Footer,
  },
})

export default class App extends Vue {
  isLogIn = false;
}
</script>

<style lang="scss">
@import "./assets/fonts/fonts.css";

#app {
  font-family: ibm_plex_sansregular, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #141414;
}

</style>
