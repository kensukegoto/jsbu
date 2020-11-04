<template>
  <section class="list">
    <div class="list__inner">
      <ul class="card__box">
          <li class="item" v-for="(item,key) of list" :key="key">
            <mCard :attr="item" />
          </li>
      </ul>
      <a class="btn">ニュース一覧へ</a>
    </div>
  </section>
</template>

<script>
import mCard from "@/components/module/m-Card";
import axios from "axios"

export default {
  components:{
    mCard
  },
  data(){
    return {
      list: []
    }
  },
  created(){
    axios.get('/data/all.json')
      .then((response) => {
        this.list = response.data;
      })
      .catch((e) => {
        alert(e);
      });
  }
}
</script>

<style lang="scss" scoped>
.list{
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
.item {
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
  margin-top: 32px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $white;
  font-weight: bold;
  background-color: $black;
  @include media(m){
    width: 150px;
    margin: 36px auto;
  }
}
</style>