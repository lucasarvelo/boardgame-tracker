<template>
  <div>
    <img :src="require(`@/assets/img/${filename}`)" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MainImage extends Vue {
  @Prop({ default: 'image_url_fallback' })
  filename!: string;
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
  max-height: 100%;
  display: block; /* remove extra space below image */
  border-radius: 25px;
}

div {
  width: 50%;
  align-self: center;
  min-width: 410px;
  padding: 15px;
}
</style>
