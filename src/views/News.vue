<template>
  <bPankuzu />
  <main>
    <section>
      <h2>ニュース一覧</h2>
      <mTab class="m-tab" />
      <p class="select">"全て"</p>
      <div class="card-box__outer">
        <ul class="card-box">
          <li class="item" v-for="(item,key) of list" :key="key">
            <mCard :attr="item" />
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>

import bPankuzu from "@/components/block/b-Pankuzu";
import mTab from "@/components/module/m-Tab";
import mCard from "@/components/module/m-Card";
// import bList from "@/components/block/b-List";
import axios from "axios"

export default {
  components:{
    bPankuzu,
    mTab,
    mCard
    // bList
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
main {
  padding: 28px 12px 32px;
  background-color: $yellow;
  @include media(m){
    padding: 36px 0 80px;
  }
}
h2 {
  font-size: 2rem;
  text-align: center;
}
.m-tab {
  margin: 28px auto 0;
  @include media(m){
    margin-top: 36px;
  }
}
.select{
  margin-top: 20px;
  font-size: 2rem;
  font-weight: bold;
  @include media(m){
    font-size: 2.4rem;
    margin: 24px auto 0;
    width: 960px;
  }
}
.card-box{
  &__outer{
    background-color: $white;
    padding: 0 12px 32px;
    margin-top: 20px;
    @include media(m){
      width: 960px;
      margin: 24px auto 0;
      padding-bottom: 40px;
    }
  }
  .item {

    padding-top: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid $grey;
    @include media(m){
      padding-top: 32px;
      padding-bottom: 20px;
    }
  }
}
</style>