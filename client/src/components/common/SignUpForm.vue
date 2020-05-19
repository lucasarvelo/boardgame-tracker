<template>
  <div>
    <form>
      <input
        class="form-field"
        type="email"
        id="signup-email"
        placeholder="Email"
        aria-label="Email"
      />
      <input
        class="form-field"
        type="password"
        id="signup-password"
        placeholder="Password"
        aria-label="Password"
      />
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SignUpForm extends Vue {}
</script>

<style lang="scss" scoped>
.form-field {
  display: block;
  width: 100%;
  border: none;
  background-color: #f3f3f3;
  margin-bottom: 5px;
  font-size: 1.2rem;
  border-radius: 8px;
  padding: 10px 10px 10px 10px;
  box-sizing: border-box;
  float: left;
}

form > button {
  display: block;
  width: 100%;
  border: none;
  background-color: #ff8364;
  color: #ffffff;
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 1.2rem;
  border-radius: 8px;
  padding: 10px 10px 10px 10px;
  float: left;
}
</style>
