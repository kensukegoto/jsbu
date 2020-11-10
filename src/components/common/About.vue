<template>
  <section class="about">
    <p class="title">{{ title }}</p>
    <h1 class="text">{{ descr }}</h1>
  </section>
</template>

<script>
export default {
  props:{
    title: {
      type: String,
      required: true
    },
    descr: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.about{

  padding-right: 12px;
  padding-left: 12px;
  @include media(m){
    width: 700px;
    margin-right: auto;
    margin-left: auto;
    padding: 0;
  }
  .title{
    line-height: 1;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    @include media(m){
      font-size: 2.4rem;
    }
  }
  .text{
    margin-top: 20px;
    font-size: 1.4rem;
    font-weight: normal;
    line-height: 1.6;
    @include media(m){
      font-size: 1.6rem;
      margin-top: 32px;
    }
  }
}
</style>