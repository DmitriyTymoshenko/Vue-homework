<template>
    <button type="button" class="delBtn" @click="clickDelete()">{{name}}</button>
</template>

<script>
    export default {
        name: "DeleteBtn",
        props: {
            name: {
                type: String,
                default: 'Delete'
            }
        },
        data() {
            return {}
        },
        methods: {
            clickDelete() {
                const self = this;
                this.$emit('deleteEvent')
            }
        }
    }
</script>

<style lang="sass">
    .delBtn
        width: 100%
        color: #fff
        background: darkslategrey
        font-size: 24px
        font-weight: bold
        border: none
        border-radius: 5px
        padding: 10px
        margin: 10px
        &:focus
            outline: none!important


</style>