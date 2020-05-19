<template>
  <div class="container">
    <div class="header">
      <h1>Boardgame passion</h1>
      <p class="subtitle">Access the best information, tools and social network about games</p>
    </div>
    <form>
      <input
        class="form-field"
        type="text"
        id="signup-fullName"
        placeholder="Full Name"
        aria-label="Full Name"
      />
      <input
        class="form-field"
        type="email"
        id="signup-email"
        placeholder="Email"
        aria-label="Email"
        />
      <button type="submit">Sign Up</button>
    </form>
    <p class="legal">By joining, you agree to our Terms of Service and Privacy Policy.</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SignupFormHome extends Vue {}
</script>

<style scoped lang="scss">
.container {
  width: 30%;
  min-width: 340px;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.header {
  width: 100%;
  text-align: left;
}

h1 {
  font-size: 2.3rem;
  margin-top: 0;
}
.subtitle {
  font-weight: bold;
}

form {
  width: 100%;
}

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

.legal {
  font-size: 0.6rem;
  text-align: left;
  margin-top: 0;
  width: 100%;
}
</style>
