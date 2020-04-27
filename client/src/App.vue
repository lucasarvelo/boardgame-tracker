<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Logo from '@/components/Logo.vue';
import Nav from '@/components/Nav.vue';

@Component({
  components: {
    Logo,
    Nav,
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
