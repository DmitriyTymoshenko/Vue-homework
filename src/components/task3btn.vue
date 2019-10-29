<template>
    <button type="button" class="toggleBtn" @click="clickHandler()">{{name}}</button>
</template>

<script>
    export default {
        name: "Btn",
        props: {
            name: {
                type: String,
                default: 'Change'
            }
        },
        data() {
            return {}
        },
        methods: {
            clickHandler() {
                const self = this;
                self.$emit('customEvent')
            }
        }
    }
</script>

<style lang="sass">
    .toggleBtn
        width: 100%
        color: #fff
        background: transparent
        font-size: 24px
        font-weight: bold
        /*background: darkslategrey*/
        border: none
        border-radius: 5px
        padding: 10px
        margin: 10px
        &:focus
           outline: none!important


</style>