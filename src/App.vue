<template>
  <Header />
  <Slider class="slider" />
</template>

<script>
import Header from "@/components/block/b-Header";
import Slider from "@/components/block/b-Slider";


export default {
  name: 'App',
  components: {
    Header,
    Slider,
  }
}
</script>

<style lang="scss" scoped>
main {
  min-height: 2000px;
}
.slider{
  margin-top: 40px;
  @include media(m){
    margin-top: 48px;
  }
}
</style>