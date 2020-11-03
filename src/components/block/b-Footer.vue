<template>
  <a class="toTop" @click="scrollToTop">
    <p class="inner">ページ上部へ戻る</p>
  </a>
  <footer class="footer"><p class="inner">©️JS部</p></footer>
</template>

<script>
function getScrolled() {
  return ( window.pageYOffset !== undefined ) ? window.pageYOffset: document.documentElement.scrollTop;
}
export default {
  methods:{
    scrollToTop(){
      var scrolled = getScrolled();
      window.scrollTo( 0, Math.floor( scrolled / 2 ) );
      if ( scrolled > 0 ) {
        window.setTimeout( this.scrollToTop, 30 );
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.toTop,
footer{
  display: block;
  .inner{
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $white;
    @include media(m){
      width: 960px;
      margin: 0 auto;
      height: 64px;
    }
  }
}
.toTop{
  background-color: $greyDark;
}
footer{
  background-color: $black;
}
</style>