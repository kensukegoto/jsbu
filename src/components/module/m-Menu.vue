<template>
  <div class="shadow" v-show="state.isActive"></div>
  <div class="gnavi" v-show="state.isActive">
    <ul class="gnavi__lists">
      <li><a>ニュース一覧</a></li>
      <li><a>メンバー</a></li>
      <li><a>体験入部</a></li>
    </ul>
  </div>
  <Burger class="burger" @click="changeActive" :isActive="state.isActive" />
</template>

<script>
import Burger from "@/components/component/c-Burger";
import { reactive } from "vue"

export default {
  components:{
    Burger
  },
  setup() {
    const state = reactive({
      isActive: false
    })

    function changeActive(){
      state.isActive = !state.isActive;
    }

    return {
      state,
      changeActive
    }
  }

}
</script>

<style lang="scss" scoped>

.shadow {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #000;
  opacity: .8;
  @include media(m){
    display: none;
    position: static;
  }
}
.gnavi{

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  padding: 80px 24px 24px;

  @include media(m){
    position: static;
    display: flex!important;
    justify-content: flex-end;
    background: transparent;
    padding: 0;
  }

  &__lists{
    font-weight: bold;
    li {
      margin-top: 2em;
      &:first-child{
        margin-top: 0;
      }
      a {
        cursor: pointer;
      }
    }

    @include media(m){
      display: flex;
      align-items: center;
      color: #fff;
      font-size: 14px;
      li {
        margin-top: 0;
        margin-left: 80px;
      }
    }


  }

}

.burger{
  position: fixed;
  right: 12px;
  top: 14px;
  @include media(m){
    display: none;
  }
}
</style>