<template>
  <transition name="slide-fade">
    <div class="drawer" v-if="!collapsed">
      <ul>
        <li v-for="route in $router.options.routes" :key="route.path">
          <router-link :to="route.path">{{ route.name }}</router-link>
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
  width: 100%;
}

ul {
  list-style: none outside none;
}

li {
  border: 5px ridge #ff8364;
  border-radius: 5px;
  margin-bottom: 2px;
  width: 100%;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
</style>
