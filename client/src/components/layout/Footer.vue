<template>
    <div class="footer-wrap">
        <div class="logo-footer">
            <Logo />
            <p class="copyright">&copy; Copyright 2020 - Lucas Arvelo <br/> Boardgame Tracker</p>
        </div>
        <div class="links-block">
            <div>
                <h4>My Account</h4>
                <router-link to="/">Profile</router-link>
                <router-link to="/">Newsletter</router-link>
            </div>
            <div>
                <h4>Connect</h4>
                <router-link to="/">Twitter</router-link>
                <router-link to="/">Facebook</router-link>
                <router-link to="/">Instagram</router-link>
            </div>
            <div>
                <h4>About</h4>
                <router-link to="/">Terms Of Use</router-link>
                <router-link to="/">Privacy</router-link>
                <router-link to="/">Sitemap</router-link>
            </div>
            <div>
                <h4>Contact</h4>
                <router-link to="/">Contact Form</router-link>
                <router-link to="/">Email</router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Logo from '@/components/common/Logo.vue';

@Component(
  {
    components: {
      Logo,
    },
  },
)
export default class Fotter extends Vue {
}
</script>

<style lang="scss" scoped>
.footer-wrap {
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 20px;
}

.logo {
    align-self: flex-start;
    text-align: left;
}

.copyright {
    font-size: 12px;
    color: #616161;
}

.links-block {
    display: flex;
    justify-content: space-between;
    width: 50%;
    text-align: left;
}

a{
    display: block;
    text-decoration: none;
    color: #616161;
    margin-bottom: 5px;
    font-size: 14px;
}

h4{
    margin-bottom: 5px;
}

@media (max-width: 800px) {
    .footer-wrap {
        flex-direction: column-reverse;
    }

    .links-block {
        flex-direction: column;
        text-align: center;
        width: 100%;
    }

    .logo-footer {
        width: 100%;
        text-align: center;
    }
}
</style>
