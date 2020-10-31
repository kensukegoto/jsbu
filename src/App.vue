<template>
  <div class="test">
    <p>テストです。</p>
    <p class="white">白です。</p>
  </div>
  <img alt="Vue logo" src="./assets/image/logo.png">
</template>

<script>


export default {
  name: 'App',
  components: {

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