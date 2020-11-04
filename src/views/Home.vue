<template>
  <main>
    <bSlider class="slider" />
    <bAbout class="about" />
    <bList class="list" />
  </main>
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