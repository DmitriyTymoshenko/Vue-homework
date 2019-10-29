<template>
    <div class="main">
        <div class="card">
            <img :src="anime.image_url" :alt="anime.title">
                <h2>{{ anime.title }}</h2>
                <h3>Rank: {{anime.rank}}</h3>
                <h3>{{ anime.episodes }} Series</h3>
                <h3>Score: {{anime.score}}</h3>
                <h3>Type {{anime.type}}</h3>
                <a :href="anime.url" class="card-link">Try</a>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            anime: {
                type: Object,
                required: true
            },
        },
        data() {
            return {}
        },

    }
</script>
<style lang="sass">
    .main
        display: flex
        flex-direction: row
        width: 50%
        justify-content: center
        margin: 20px 0
        .card
           img
              max-width: 100%
           .card-link
              text-decoration: none
              background: darkslategrey
              color: #fff
              padding: 10px 20px
              border-radius: 5px
              &hover
                 transform: scale(1.2)



</style>