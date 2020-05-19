<template>
  <div id="nav">
    <Modal v-if="showModal" @close="showModal = false">
      <h2 slot="header" v-if="modalType==='signIn'">Welcome back!</h2>
      <h2 slot="header" v-else>Welcome</h2>
      <SignUpForm v-if="modalType==='signUp'" slot="body" />
      <SignInForm v-if="modalType==='signIn'" slot="body" />
      <span
        slot="footer"
        class="legal"
      >By access, you agree to our Terms of Service and Privacy Policy.</span>
    </Modal>
    <Logo />
    <div class="links">
      <router-link
        v-for="route in $router.options.routes"
        :key="route.path"
        :to="route.path"
      >{{ route.name }}</router-link>
    </div>
    <div class="sign-buttons">
      <button class="nav-signIn" v-on:click="updateShowModal('signIn')">SIGN IN</button>
      <button class="nav-signUp" v-on:click="updateShowModal('signUp')">SIGN UP</button>
    </div>
    <BurgerMenu @toggleBurger="toggleMenu()"/>
    <DrawerMenu :collapsed="collapsed" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Logo from '@/components/common/Logo.vue';
import BurgerMenu from '@/components/layout/BurgerMenu.vue';
import DrawerMenu from '@/components/layout/DrawerMenu.vue';
import Modal from '@/components/common/Modal.vue';
import SignInForm from '@/components/common/SignInForm.vue';
import SignUpForm from '@/components/common/SignUpForm.vue';

@Component({
  components: {
    Logo,
    BurgerMenu,
    DrawerMenu,
    Modal,
    SignInForm,
    SignUpForm,
  },
})
export default class Nav extends Vue {
  collapsed = true;

  modalType!: string;

  showModal = false;

  updateShowModal(modalType: string) {
    this.modalType = modalType;
    this.showModal = true;
  }

  toggleMenu() {
    this.collapsed = !this.collapsed;
  }
}
</script>

<style lang="scss" scope>
#nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 30px;

  a:hover {
    color: #ffb8a8;
  }

  a {
    font-weight: bold;
    font-size: 1.3rem;
    color: #141414;
    padding-left: 20px;
    padding-right: 5px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #ff8364;
    }
  }
}

.nav-signIn {
  background-color: #f3f3f3;
  color: #141414;
  font-weight: bold;
  width: 120px;
  height: 39px;
  border-radius: 10px;
  font-family: ibm_plex_sansbold;
  margin-right: 5px;
  border-style: solid;
}

.nav-signUp {
  background-color: #ff8364;
  color: white;
  font-weight: bold;
  width: 120px;
  height: 39px;
  border-radius: 10px;
  font-family: ibm_plex_sansbold;
  margin-left: 5px;
  border-style: solid;
}

.legal {
  font-size: 0.6rem;
  text-align: left;
  margin-top: 0;
  width: 100%;
}

@media (max-width: 800px) {
  .links {
    display: none;
  }

  .sign-buttons {
    display: none;
  }
}
</style>
