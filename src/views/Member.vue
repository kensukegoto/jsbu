<template>
  <PankuzuList />
  <main>
    <About class="sec about" :title="title" :descr="descr" />
    <section class="sec memberList">
      <div class="card-box__outer">
        <ul class="card-box">
          <li class="item" :class="{ noBdrSp : !noBdr(key).sp, noBdrPc : !noBdr(key).pc}" v-for="(item,key) of state.list" :key="key">
            <a class="item__image"><img :src="`/image/${item.image}`" alt=""></a>
            <p class="item__title"><a>{{ item.label }}</a></p>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>

import PankuzuList from "@/components/common/PankuzuList";
import About from "@/components/common/About";
import axios from "axios"
import { reactive } from 'vue';
// import { computed, reactive } from 'vue';

export default {
  components:{
    PankuzuList,
    About
    // bList
  },
  setup(){

    const state = reactive({
      list: [],
    });

    axios.get('/data/member.json')
      .then((response) => {
        state.list = response.data
      })
      .catch((e) => {
        alert(e);
      });


    return {
      state,
      title: 'メンバー',
      descr: 'ペルシャは、ネコの品種の一つ。ペルシャ猫。イラン原産。 長毛種の代表的な品種で、古くからショーキャットとして認められる品種の一つである。',
      noBdr: key => {
        const len = state.list.length;
        let basePc = Math.floor(len / 5) * 5;
        let baseSp = Math.floor(len / 2) * 2;
        if(len === basePc) basePc -= 5;
        if(len === baseSp) baseSp -= 2;
        return {
          sp: baseSp > key,
          pc: basePc > key
        };
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.sec{
  padding: 0 12px;
  @include media(m){
    padding: 0;
  }
}
.about{
  margin-top: 28px;
  @include media(m){
    margin-top: 36px;
  }
}
.memberList {
  background-color: $yellow;
  margin-top: 32px;
  padding: 28px 12px 32px;
  @include media(m){
    margin-top: 36px;
    padding: 36px 0 36px;
  }
}

.card-box{

  &__outer{
    background-color: $white;
    padding: 0 8px 32px;
    @include media(m){
      width: 960px;
      margin: 0 auto;
      padding-bottom: 40px;
    }
  }

  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 1px solid $grey;

  .item {

    width: 50%;
    padding-top: 28px;
    padding-bottom: 28px;
    border-bottom: 1px solid $grey;
    text-align: center;
    &.noBdrSp{
      border-bottom: none;
    }
    @include media(m){
      width: 20%;
      padding-top: 32px;
      padding-bottom: 32px;
      &.noBdrPc{
        border-bottom: none;
      }
    }

    &__image{
      width: 80%;
      display: inline-block;
      @include media(m){
        width: 160px;
      }
    }

    &__title{
      margin-top: 28px;
      font-weight: bold;
      font-size: 1.4rem;
      @include media(m){
        margin-top: 32px;
        font-size: 1.6rem;
      }
    }



  }
}
</style>