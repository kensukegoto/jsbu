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
  height: 80px;
  background-color: #181818;
  .inner {
    padding: 14px 12px;
    height: 100%;
    width: 960px;
    margin: 0 auto;
    display: flex;
    .logo {
      height: 100%;
    }
  }
}

</style>