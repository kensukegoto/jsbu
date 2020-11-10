<template>
  <PankuzuList />
  <main>
    <About :title="title" :descr="descr" />
    <section class="memberList">
      <div class="card-box__outer">
        <ul class="card-box">
          <li class="item" v-for="(item,key) of state.list" :key="key">
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
      list: []
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
    }
  }
}
</script>
<style lang="scss" scoped>
main {
  padding: 28px 12px 32px;
  @include media(m){
    padding: 36px 0 80px;
  }
}
.memberList {
  background-color: $yellow;
  margin-top: 32px;
  padding: 28px 8px 32px;
  @include media(m){
    margin-top: 36px;
    padding: 36px 0 36px;
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

  display: flex;
  flex-wrap: wrap;
  width: 100%;

  .item {

    width: 50%;
    padding-top: 28px;
    padding-bottom: 28px;
    border-bottom: 1px solid $grey;
    text-align: center;
    @include media(m){
      width: 20%;
      padding-top: 32px;
      padding-bottom: 32px;
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