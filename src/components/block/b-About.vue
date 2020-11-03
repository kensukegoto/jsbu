<template>
  <section class="sec">
    <p class="title">JS部とは？</p>
    <h1 class="text">ペルシャは、ネコの品種の一つ。ペルシャ猫。イラン原産。 長毛種の代表的な品種で、古くからショーキャットとして認められる品種の一つである。</h1>
  </section>
</template>

<style lang="scss" scoped>
.sec{

  padding-right: 12px;
  padding-left: 12px;
  @include media(m){
    width: 700px;
    margin-right: auto;
    margin-left: auto;
    padding: 0;
  }
  .title{
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
    @include media(m){
      font-size: 1.6rem;
      margin-top: 32px;
    }
  }
}
</style>