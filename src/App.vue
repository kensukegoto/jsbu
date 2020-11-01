<template>
  <Header />
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
.test {
  p {
    font-size: 100%;
    color: $black;
    &.white {
      color: $white;
    }
  }

}
</style>