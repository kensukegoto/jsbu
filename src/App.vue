<template>
  <Header />
  <main></main>
</template>

<script>
import Header from "@/components/block/b-Header";

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
main {
  min-height: 2000px;
  background: red;
}
</style>