<template>
  <PankuzuList />
  <main>
    <section>
      <h2>ニュース一覧</h2>
      <NewsTab class="m-tab" :tablist="tablist" :type="state.type" @change-tab="type => changeTab(type)" />
      <p class="select">{{ state.label }}</p>
      <div class="card-box__outer">
        <ul class="card-box">
          <li class="item" v-for="(item,key) of state.list" :key="key">
            <NewsListItem :attr="item" />
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>

import PankuzuList from "@/components/common/PankuzuList";
import NewsListItem from "@/components/common/NewsListItem";
import NewsTab from "@/components/news/NewsTab";
import axios from "axios"

import { computed, reactive } from 'vue';

export default {
  components:{
    PankuzuList,
    NewsTab,
    NewsListItem
    // bList
  },
  setup(){

    const tablist = {
      all : '全て',
      info: 'お知らせ',
      topic: 'トピック',
      event: 'イベント',
      report: 'レポート'
    }

    const state = reactive({
      type: 'all',
      label: computed(() => {
        return `"${tablist[state.type]}"`
      }),
      list: [],
      all:[],
      info:[],
      topic:[],
      event:[],
      report:[]
    });

    axios.get('/data/all.json')
      .then((response) => {
        state.all = response.data
        state.list = [...state.all]
      })
      .catch((e) => {
        alert(e);
      });
    
    function changeTab(type){

      state.type = type
      if(state[type].length) {
        state.list = [...state[type]]
        return
      }

      axios.get(`/data/${type}.json`)
        .then((response) => {
          state[type] = response.data
          state.list = [...state[type]]
        })
        .catch((e) => {
          alert(e);
        });
    }

    return {
      state,
      changeTab,
      tablist
    }

  },
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