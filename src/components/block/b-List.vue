<template>
  <section class="sec">
    <div class="sec__inner">
      <ul class="card__box">
        <li class="card"><Card /></li>
        <li class="card"><Card /></li>
        <li class="card"><Card /></li>
        <li class="card"><Card /></li>
        <li class="card"><Card /></li>
      </ul>
      <a class="btn">ニュース一覧へ</a>
    </div>
  </section>
</template>

<script>
import Card from "@/components/module/m-Card";
export default {
  components:{
    Card
  }
}
</script>

<style lang="scss" scoped>
.sec{
  padding: 12px 12px 32px;
  background-color: $yellow;
  @include media(m){
    padding: 40px 0 80px;
  }
  &__inner {
    padding: 0 12px 32px;
    background-color: $white;
    @include media(m){
      width: 960px;
      margin: 0 auto;
      padding-bottom: 48px;
    }
  }
}
.card {
  &__box {
    margin-bottom: 32px;
  }
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid $grey;
  @include media(m){
    padding-top: 32px;
    padding-bottom: 20px;
  }

}
.btn{
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $white;
  font-weight: bold;
  background-color: $black;
  @include media(m){
    width: 150px;
    margin: 0 auto;
  }
}
</style>