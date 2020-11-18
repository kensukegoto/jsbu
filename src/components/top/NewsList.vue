<template>
  <section class="list">
    <div class="list__inner">
      <h2>新着</h2>
      <ul class="card__box">
          <li class="item" v-for="(item,key) of newsList" :key="key">
            <NewsListItem :attr="item" />
          </li>
      </ul>
      <a class="btn">ニュース一覧へ</a>
    </div>
  </section>
</template>

<script>
import NewsListItem from "@/components/common/NewsListItem";
import axios from "axios"
import { ref, watch } from 'vue';

export default {
  components:{
    NewsListItem
  },
  async setup(){
    const list = ref([])
    const newsList = ref([])

    watch(list,()=>{
      newsList.value = list.value.slice(0,5)
    })

    list.value = await axios.get('/data/all.json').then(res => res.data);
    
    return {
      list,
      newsList
    }

  },
}
</script>
<style lang="scss">

#news-item {
  .list{
    @include media(m){
      padding-top: 0;
    }
    &__inner {
      padding-top: 28px;
      @include media(m){
        padding-top: 32px;
      }

      h2 {
        display: block;
        text-align: center;
        font-size: 2rem;
        @include media(m){
          font-size: 2.4rem;
        }
      }
      .card__box{
        margin-top: 28px;
        @include media(m){
          margin-top: 32px;
        }
      }
    }

  }
}

</style>
<style lang="scss" scoped>
h2 {
  display: none;
}
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