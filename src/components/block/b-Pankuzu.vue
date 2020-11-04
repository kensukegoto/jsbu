<template>
  <section class="pankuzu__outer">
    <ul class="pankuzu">
      <li class="pankuzu__item"><router-link to="/">TOP</router-link></li>
      <li class="pankuzu__item">記事一覧</li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>

.pankuzu {
  &__outer{
    background-color: $greyLight;
    padding: 12px;
    @include media(m){
      padding: 16px 0;
    }
  }
  display: flex;
  font-size: 1.4rem;
  @include media(m){
    width: 960px;
    margin: 0 auto;
  }
  &__item{
    font-weight: bold;
    a {
      font-weight: normal;
    }
  }
  &__item::after {
      content: ">";
      margin: 0 8px;
  }
  &__item:last-child::after {
      content: none;
  }
}
</style>