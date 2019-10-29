<template>
    <div class="error">{{ text }}</div>
</template>
<script>
    export default {
        props: {
            text: {
                type : String,
                default : 'Content is not loaded!',
            },
        }
    }
</script>