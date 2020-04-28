<template>
  <div class="container">
    <div class="header">
      <SignUpForm isLogIn="false" />
      <MainImage filename="blood-rage-4311102_1280.jpg" />
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import SignUpForm from '@/components/SignUpForm.vue';
import MainImage from '@/components/MainImage.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    SignUpForm,
    MainImage,
  },
})
export default class SignupForm extends Vue {
  @Prop({ default: false })
  isLogIn!: boolean;
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-evenly;
  align-items: center;
}
</style>
