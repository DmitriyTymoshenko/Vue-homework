<template>
    <div>
     <button type="button">{{name}}</button>
    </div>
</template>

<script>

    export default {
        props: {
            name: {
                type: String,
                default: "Harry Potter"
            }
        },

    }
</script>
<style lang="sass">

</style>