<template>
  <transition name="slide-fade">
    <div class="drawer" v-if="!collapsed">
      <ul>
        <li v-for="route in $router.options.routes" :key="route.path">
          <router-link :to="route.path">{{ route.name }}</router-link>
        </li>
        <li>
          <button class="nav-signIn">SIGN IN</button>
        </li>
        <li>
          <button class="nav-signUp">SIGN UP</button>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class DrawerMenu extends Vue {
  @Prop({ default: true })
  collapsed!: boolean;
}
</script>

<style lang="scss" scoped>
.drawer {
  display: none;
  width: 100%;
}

ul {
  list-style: none outside none;
}

li {
  border: 1px solid #ff8364;
  border-radius: 5px;
  margin-bottom: 2px;
  width: 100%;
  height: 39px;
  line-height: 39px;
}

 #nav a {
    display: block;
    padding: 0;
}

.nav-signIn {
  background-color: #f3f3f3;
  color: #141414;
  font-weight: bold;
  font-size: 1.2rem;
  width: 100%;
  border-radius: 5px;
  font-family: ibm_plex_sansbold;
  border-style: solid;
  margin: 0;
  border: none;
}

.nav-signUp {
  background-color: #ff8364;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  width: 100%;
  border-radius: 5px;
  font-family: ibm_plex_sansbold;
  border-style: solid;
  margin: 0;
  border: none;
}


.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

@media (max-width: 800px) {
  .drawer {
    display: block;
  }
}
</style>
