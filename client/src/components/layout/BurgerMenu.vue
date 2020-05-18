<template>
  <div class="movile-menu">
    <button
      class="burger-container"
      :class="{ isClose: collapsed, isOpen: !collapsed}"
      @click="toggleBurger()"
    >
      <span class="burger-top" />
      <span class="burger-filler" />
      <span class="burger-bottom" />
    </button>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Emit,
} from 'vue-property-decorator';

@Component
export default class BurgerMenu extends Vue {
  collapsed = true;

  @Emit('toggleBurger')
  toggleBurger() {
    this.collapsed = !this.collapsed;
  }
}
</script>

<style lang="scss" scoped>
.movile-menu {
  display: none;
}

.burger-container {
  position: relative;
  height: 28px;
  width: 36px;
  padding: 0;
  background: none;
  border: none;
  box-shadow: none;
}

.burger-container:focus {
  outline: none;
}

.burger-top,
.burger-filler,
.burger-bottom {
  position: absolute;
  display: block;
  height: 4px;
  width: 36px;
  border-radius: 2px;
  background: #ff8364;
  transform-origin: 50% 50%;
}

.burger-top {
  top: 0;
  transform-origin: 34px 2px;
}

.burger-bottom {
  bottom: 0;
  transform-origin: 34px 2px;
}

.burger-filler {
  top: 12px;
}

.isOpen > .burger-top {
  animation: burger-top-in 0.6s linear forwards;
}

.isOpen > .burger-bottom {
  animation: burger-bottom-in 0.6s linear forwards;
}

.isOpen > .burger-filler {
  animation: burger-filler-in 0.6s linear forwards;
}

.isClose > .burger-top {
  animation: burger-top-out 0.6s linear forwards;
}

.isClose > .burger-bottom {
  animation: burger-bottom-out 0.6s linear forwards;
}

.isClose > .burger-filler {
  animation: burger-filler-out 0.6s linear forwards;
}

@keyframes burger-top-in {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-49deg);
  }
}

@keyframes burger-bottom-in {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(49deg);
  }
}

@keyframes burger-filler-in {
  0% {
    width: 36px;
  }
  100% {
    width: 0px;
  }
}

@keyframes burger-top-out {
  0% {
    transform: rotate(-49deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes burger-bottom-out {
  0% {
    transform: rotate(49deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes burger-filler-out {
  0% {
    width: 0px;
  }
  100% {
    width: 36px;
  }
}

@media (max-width: 800px) {
  .movile-menu {
    display: block;
  }

}
</style>
