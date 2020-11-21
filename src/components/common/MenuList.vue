<template>
  <div class="shadow" v-show="isActive"></div>
  <div class="gnavi" v-show="isActive">
    <ul class="gnavi__lists">
      <li>
        <router-link to="/news" v-if="!conf || !conf.isChild">ニュース</router-link>
        <a href="/news" v-else>ニュース</a>
      </li>
      <li>
        <router-link to="/member" v-if="!conf || !conf.isChild">部員</router-link>
        <a href="/member" v-else>部員</a>
      </li>
      <li><a>体験入部</a></li>
    </ul>
  </div>
  <BurgerMenu class="burger" @click="changeActive" :isActive="isActive" />
</template>

<script>
import BurgerMenu from "@/components/common/BurgerMenu"
import { ref,watch } from "vue"
import getWinW from '@/core/windowWidth'

export default {
  components:{
    BurgerMenu
  },
  inject: {
    conf: {
      from: 'conf'
    }
  },
  setup() {

    const isActive = ref(false)
    const winW = ref(getWinW())

    function changeActive(){
      isActive.value = !isActive.value;
    }

    watch(winW,() => {
      if(isActive.value && winW.value > 600) isActive.value = false
    })

    watch(isActive,() => {
      let scY;
      if(!isActive.value) {
        scY = document.body.style.top
        document.body.style.position = ''
        document.body.style.top = ''
        window.scrollTo(0, parseInt(scY || '0') * -1);
        return
      } 
      scY = window.pageYOffset || document.documentElement.scrollTop || 0
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scY}px`
    })

    return {
      isActive,
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
  background-color: $kkk;
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
      color: $white;
      font-size: 1.4rem;
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
  top: 18px;
  @include media(m){
    display: none;
  }
}
</style>