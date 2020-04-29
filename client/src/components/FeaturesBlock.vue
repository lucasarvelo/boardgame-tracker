<template>
  <!-- eslint-disable max-len -->
  <div>
    <h1>Features</h1>
    <div class="feature-grid">
      <div class="feature">
        <div class="icon">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="star">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
                fill="#F3F3F3"
              />
              <mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="80"
                height="80"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M40.1321 24.1495L35.9938 32.5333C35.7192 33.0896 35.1886 33.4753 34.5748 33.5651L25.3178 34.9181L32.0146 41.4408C32.4596 41.8743 32.6628 42.4991 32.5578 43.1114L30.9777 52.3239L39.2539 47.9716C39.8036 47.6824 40.4605 47.6824 41.0103 47.9716L49.2865 52.3239L47.7064 43.1114C47.6014 42.4991 47.8045 41.8743 48.2496 41.4408L54.9464 34.9181L45.6894 33.5651C45.0755 33.4753 44.545 33.0896 44.2704 32.5333L40.1321 24.1495ZM33.0486 29.9745L38.4402 19.0517C39.1323 17.6494 41.1318 17.6494 41.824 19.0517L47.2156 29.9745L59.2729 31.7368C60.8199 31.9629 61.4365 33.8645 60.3165 34.9554L51.5934 43.4516L53.6521 55.4546C53.9165 56.9961 52.2985 58.1715 50.9142 57.4435L40.1321 51.7733L29.3499 57.4435C27.9657 58.1715 26.3477 56.9961 26.6121 55.4546L28.6707 43.4516L19.9477 34.9554C18.8277 33.8645 19.4443 31.9629 20.9913 31.7368L33.0486 29.9745Z"
                  fill="#B9B9B9"
                />
              </g>
            </g>
          </svg>
        </div>
        <div class="feature-text">
          <h3>Boardagames Personal Library</h3>
          <p>
            Keep track of your boardgames and access all the information in one place.
          </p>
        </div>
      </div>
      <div class="feature">
        <div class="icon">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use xlink:href="#star" />
          </svg>
        </div>
        <div class="feature-text">
          <h3>Game Session Tracker</h3>
          <p>
            Track all the information about your game sessions. Players, results, notes, etc...
          </p>
        </div>
      </div>
      <div class="feature">
        <div class="icon">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use xlink:href="#star" />
          </svg>
        </div>
        <div class="feature-text">
          <h3>Find Players In Your Area</h3>
          <p>
            Are you looking for boardgame players for your sessions? Find players looking for a
            group or create your own players wanted post.
          </p>
        </div>
      </div>
      <div class="vertical-line"></div>
      <div class="feature">
        <div class="icon">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use xlink:href="#star" />
          </svg>
        </div>
        <div class="feature-text">
          <h3>Social</h3>
          <p>
            Share pictures, posts, news with your friends in our
            social network for boardgames enthusiasts.
          </p>
        </div>
      </div>
      <div class="feature">
        <div class="icon">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use xlink:href="#star" />
          </svg>
        </div>
        <div class="feature-text">
          <h3>Lastest News</h3>
          <p>
            Stay update with the lastest news about your favorites boardgames.
          </p>
        </div>
      </div>
      <div class="feature">
        <div class="icon">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use xlink:href="#star" />
          </svg>
        </div>
        <div class="feature-text">
          <h3>Boardgames Market</h3>
          <p>
            Find the best deals in boardgames. Trade, buy or sell for free in our market.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class FeaturesBlock extends Vue {}
</script>

<style lang="scss" scoped>
.feature-grid {
    display: grid;
    grid-template-columns: auto 30px auto;
    grid-template-rows: 1fr 1fr 1fr;
    column-gap: 10px;
    row-gap: 15px;
}

.vertical-line {
    grid-column-start: 2;
    grid-row-start: 1;
    grid-row-end: span 3;
    width: 0px;
    border: 1px black solid;
    margin-left: auto;
    margin-right: auto;
}

.feature {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
}

.icon {
    margin-right: 20px;
}

h3, p{
    margin: 0px;
}

@media (max-width: 800px) {
.vertical-line {
    display: none;
}

.feature-grid {
    grid-template-columns: auto;
}
}
</style>
