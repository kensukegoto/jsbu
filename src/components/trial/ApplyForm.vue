<template>
  <div class="apply-form">
    <h2>体験入部に申し込む</h2>
  </div>
</template>

<style lang="scss" scoped>
.apply-form{
  background-color: $white;
  padding: 28px 8px 32px;
  @include media(m){
    width: 960px;
    margin: 0 auto;
    padding-top: 32px;
    padding-bottom: 40px;
  }

  h2 {
    text-align: center;
    font-size: 2rem;
    @include media(m){
      font-size: 2.4rem;
    }
  }

}
</style>