<template>
  <main>
    <SlideShow class="slider" />
    <AboutJsbu class="about" />
    <NewsList class="list" />
  </main>
</template>

<script>
import SlideShow from "@/components/top/SlideShow";
import AboutJsbu from "@/components/top/AboutJsbu";
import NewsList from "@/components/top/NewsList";

export default {
  name: 'App',
  components: {
    SlideShow,
    AboutJsbu,
    NewsList
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