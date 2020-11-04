<template>
  <bSlider class="slider" />
  <bAbout class="about" />
  <bList class="list" />
</template>

<script>
import bSlider from "@/components/block/b-Slider";
import bAbout from "@/components/block/b-About";
import bList from "@/components/block/b-List";

export default {
  name: 'App',
  components: {
    bSlider,
    bAbout,
    bList,
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