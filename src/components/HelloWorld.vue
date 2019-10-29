<template>
  <h1>{{name}}</h1>

</template>

<script>
export default {
  props: {
      name: {
          type: String,
          default: "Welcome to my Vue Project"
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
</style>
