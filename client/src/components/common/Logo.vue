<template>
  <div>
    <img class="logo" src="..\..\assets\img\Logo shadow.png" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Logo extends Vue {}
</script>

<style scoped lang="scss">
.logo {
  width: 250px;
  height: 58px;
}
</style>
