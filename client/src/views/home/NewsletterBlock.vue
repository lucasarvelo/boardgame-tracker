<template>
  <div class="container">
    <h1>Suscribe Newsletter</h1>
    <p>
      Stay updated with the lastest boardgames Newsletter
      and the develoment status of our Newsletter
    </p>
    <form>
      <input
        class="form-field"
        type="text"
        id="newsletter-fullName"
        placeholder="Full Name"
        aria-label="Full Name"
      />
      <input
        class="form-field"
        type="email"
        id="newsletter-email"
        placeholder="Email"
        aria-label="Email"
      />
      <button type="submit">Suscribe</button>
    </form>
    <p class="legal">By suscribing, you agree to our Terms of Service and Privacy Policy.</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NewsletterBlockVue extends Vue {}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;
}

.form-field {
  display: inline-block;
  width: 33%;
  border: none;
  background-color: #f3f3f3;
  border-radius: 8px;
  font-size: 1rem;
  padding: 10px;
  box-sizing: border-box;
}

form > button {
  display: inline-block;
  width: 33%;
  border: none;
  background-color: #ff8364;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 8px;
  padding: 8px;
}

@media (max-width: 700px) {
  .form {
    flex-direction: column;
  }

  .form-field {
    width: 100%;
    margin-bottom: 10px;
  }

  form > button {
    width: 100%;
  }
}
</style>
