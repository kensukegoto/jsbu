<template>
  <section>
    <div class="inner">
      <Logo class="logo" />
      <Menu />
    </div>
  </section>
</template>

<script>
import Logo from "@/components/component/c-Logo";
import Menu from "@/components/module/m-Menu";
export default {
  components:{
    Logo,
    Menu
  }
}
</script>

<style lang="scss" scoped>
section{
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
    }
    .logo {
      height: 100%;
    }
  }
}

</style>