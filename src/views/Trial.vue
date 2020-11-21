<template>
  <PankuzuList />
  <main>
    <section class="sec about">
      <p class="title">体験入部</p>
      <h1 class="text">ペルシャは、ネコの品種の一つ。ペルシャ猫。イラン原産。 長毛種の代表的な品種で、古くからショーキャットとして認められる品種の一つである。ペルシャは、ネコの品種の一つ。ペルシャ猫。イラン原産。 長毛種の代表的な品種で、古くからショーキャットとして認められる品種の一つである。</h1>
      <figure>
        <img src="/image/trial_01.jpg" alt="">
      </figure>
    </section>
    <section class="sec apply-form__wrapper">
      <ApplyForm />
    </section>
  </main>
</template>

<script>

import PankuzuList from "@/components/common/PankuzuList";
import ApplyForm from '@/components/trial/ApplyForm';
import axios from "axios"
import { reactive } from 'vue';
// import { computed, reactive } from 'vue';

export default {
  components:{
    PankuzuList,
    ApplyForm
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
  padding-right: 12px;
  padding-left: 12px;
  @include media(m){
    width: 700px;
    margin-top: 36px;
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
  figure{
    display: block;
    margin-top: 20px;
    text-align: center;
    @include media(m){
      margin-top: 32px;
    }
  }
}
.apply-form__wrapper {
  background-color: $yellow;
  margin-top: 32px;
  padding: 28px 12px 32px;
  @include media(m){
    margin-top: 36px;
    padding: 36px 0 88px;
  }
}

</style>