<template>
    <div>
        <p>
            Boardgame Tracker is a web app design to unify all about boardgames in one place.
            Information about your games, tools for your game sessions and
            the social side of boardgames in one stop make easy for the players
            to enjoy the boardgame world and add value to our comunity.
            If you have any question, sugestion or want to help,
            get in touch with me at webcontact@lucasarvelo.com
        </p>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AuboutBlock extends Vue {
}
</script>

<style lang="scss" scoped>
div {
    width: 50%;
    margin: auto;
    text-align: justify;
}

p{
    font-weight: bold;
}

@media (max-width: 800px) {
div{
    width: 90%;
}
}
</style>
