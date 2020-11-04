<template>
  <Slider class="slider" />
  <About class="about" />
  <List class="list" />
</template>

<script>
import Slider from "@/components/block/b-Slider";
import About from "@/components/block/b-About";
import List from "@/components/block/b-List";

export default {
  name: 'App',
  components: {
    Slider,
    About,
    List,
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
.list {
  margin-top: 32px;
  @include media(m){
    margin-top: 40px;
  }
}
</style>