<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/28959e4de450ba38b84fd11c5b058570.gif">
        <HelloWorld/>
    </div>
</template>

<script>
    // @ is an alias to /src

    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'home',
        components: {
            HelloWorld
        }
    }
</script>
<style lang="sass">
    .home
       display: flex
       flex-direction: column
       justify-content: flex-end
       width: 50%
       align-items: center
       margin: 0 auto
       img
          max-width: 100%
</style>
