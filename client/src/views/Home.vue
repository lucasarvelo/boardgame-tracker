<template>
  <div class="container">
    <div class="header">
      <SignUpForm isLogIn="false" />
      <MainImage filename="blood-rage-4311102_1280.jpg" />
    </div>
    <div class="about">
      <AboutBlock />
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import SignUpForm from '@/components/SignUpForm.vue';
import MainImage from '@/components/MainImage.vue';
import AboutBlock from '@/components/AboutBlock.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    SignUpForm,
    MainImage,
    AboutBlock,
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
  box-shadow: inset 0px -1px 0px #DEDEDE;
  padding: 30px;
}

.about {
  box-shadow: inset 0px -1px 0px #DEDEDE;
  padding: 50px;
}
</style>
