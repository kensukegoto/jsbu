<template>
  <Header />
  <Slider class="slider" />
  <About class="about" />
</template>

<script>
import Header from "@/components/block/b-Header";
import Slider from "@/components/block/b-Slider";
import About from "@/components/block/b-About";


export default {
  name: 'App',
  components: {
    Header,
    Slider,
    About
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
.about{
  margin-top: 32px;
}
</style>