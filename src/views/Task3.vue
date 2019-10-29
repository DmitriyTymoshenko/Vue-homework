<template>
    <div class="wrapper">
        <div class="btn-style">
        <btn v-for="(item , i) in pages" :key="i" @customEvent="curPage = item" :name="item">{{ curPage }}</btn>
        </div>
        <keep-alive>
            <component :is="curPage"></component>
        </keep-alive>
    </div>
</template>

<script>
    import Login from '../components/task3login.vue'
    import Register from '../components/task3register.vue'
    import btn from '../components/task3btn.vue'
    export default {
        name : "Task3",
        components: {
           Login , Register , btn
        },
        data() {
            return {
                pages: ['Register', 'Login'],
                curPage: 'Register'
            }
        }
    }
</script>
<style lang="sass">
    .btn-style
       display: flex
       margin: 0 auto
       width: 30vw
       background: lightgreen
       border-top-left-radius: 10px
       border-top-right-radius: 10px

</style>