<template>
    <div class="container">
        <preloader v-show="!isAnimeLoaded"></preloader>
        <div class="header">
            <h1>{{ title }}</h1>
            <div class="show-filter">
                <btn name="Show Filter's" @customEvent="showBtns"></btn>
            </div>
            <div class="filter" v-if="showFilter">
                <btn name="Delete" @customEvent="deleteCards"></btn>
                <btn name="Show all" @customEvent="reloadCards"></btn>
                <btn name="Show10"></btn>
                <btn name="Movie"></btn>
                <btn name="TV"></btn>
            </div>
        </div>
        <onerror v-if="isAnimeError" text="error"></onerror>
        <onabsence v-if="isAnimeLoaded && (anime.length && anime.length < 1)" text="no data"></onabsence>
        <template v-else>
            <div class="card-style">
                <card v-for="item in anime" :key="item.mal_id" :anime="item"></card>
            </div>
        </template>
    </div>
</template>
<script>
    import preloader from '../components/taks2preloader.vue'
    import onabsence from '../components/task2OnAbsense.vue'
    import onerror from '../components/taks2onError.vue'
    import card from '../components/task2Card.vue'
    import btn from '../components/task3btn.vue'


    export default {
        data() {
            return {
                title: "Top of The Anime Video",
                isAnimeLoaded: false,
                isAnimeError: false,
                anime: [],
                showFilter: false

            }
        },
        components: {
            preloader, onabsence, onerror, card, btn
        },
        created() {
            this.getAnime();
        },
        methods: {
            getAnime() {
                const self = this;
                fetch('https://api.jikan.moe/v3/top/anime')
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data.top);
                        self.anime = data.top;
                        setTimeout(() => {
                            self.isAnimeLoaded = true
                        }, 1000)
                    })
                    .catch(err => {
                        self.isAnimeLoaded = true;
                        self.isAnimeError = true;
                        console.log(err)
                    })
            },
            showBtns (){
                this.showFilter = !this.showFilter;
            },
            deleteCards (){
                this.anime = [];
            },
            reloadCards (){
                this.getAnime();
                this.isAnimeLoaded = false;
                setTimeout(() => {
                    self.isAnimeLoaded = true
                }, 1000)

            },

        },
        computed : {
            filterMovie() {

                return this.anime.filter(item => item.type = "Movie");
            },
            filterTv(){
                return this.anime.filter(item => item.type = "TV");
            },
            show10(){
                return this.anime.length = 10;
            }

        }
    }
</script>
<style lang="sass">
    .container
        display: flex
        flex-direction: column
        .show-filter
            display: flex
            width: 90%
            justify-content: flex-end

        .card-style
            display: flex
            flex-direction: row
            flex-wrap: wrap
            width: 100vw
            justify-content: space-around
            align-items: center
        .toggleBtn
            background: darkslategrey
            width: auto
            padding: 10px
            margin: 10px
</style>