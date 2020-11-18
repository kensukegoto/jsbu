<template>
  <header>
    <div class="inner">
      <router-link to="/" class="logo" v-if="conf && !conf.isChild"><img src="@/assets/image/logo.png" alt=""></router-link>
      <a class="logo" href="/" v-else><img src="@/assets/image/logo.png" alt=""></a>
      <MenuList />
    </div>
  </header>
</template>

<script>
import MenuList from "@/components/common/MenuList";
export default {
  components:{
    MenuList
  },
  inject: {
    conf: {
      from: 'conf'
    }
  }
}
</script>

<style lang="scss" scoped>
header{
  position: relative;
  z-index: 10;
  height: 80px;
  background-color: $black;
  .inner {
    padding: 14px 12px;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    @include media(m){
      width: 960px;
      padding: 14px 0;
    }
    .logo {
      height: 100%;
    }
  }
}

</style>