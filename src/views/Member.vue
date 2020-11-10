<template>
  <PankuzuList />
  <main>
    <About :title="title" :descr="descr" />
    <section class="memberList">
      <div class="card-box__outer">
        <ul class="card-box">
          <!-- <li class="item" v-for="(item,key) of state.list" :key="key">
            <NewsListItem :attr="item" />
          </li> -->
        </ul>
      </div>
    </section>
  </main>
</template>

<script>

import PankuzuList from "@/components/common/PankuzuList";
import About from "@/components/common/About";
// import axios from "axios"

// import { computed, reactive } from 'vue';

export default {
  components:{
    PankuzuList,
    About
    // bList
  },
  setup(){
    return {
      title: 'メンバー',
      descr: 'ペルシャは、ネコの品種の一つ。ペルシャ猫。イラン原産。 長毛種の代表的な品種で、古くからショーキャットとして認められる品種の一つである。'
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