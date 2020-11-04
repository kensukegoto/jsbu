<template>
  <bPankuzu />
  <div class="bgYellow">
    <h2>ニュース一覧</h2>
    <mTab class="m-tab" />
    <p class="select">"全て"</p>
    <bList />
  </div>

</template>

<script>
import bPankuzu from "@/components/block/b-Pankuzu";
import mTab from "@/components/module/m-Tab";
import bList from "@/components/block/b-List";
export default {
  components:{
    bPankuzu,
    mTab,
    bList
  }
}
</script>
<style lang="scss" scoped>
.bgYellow {
  padding: 28px 12px 0;
  background-color: $yellow;
  @include media(m){
    padding: 36px 0 0;
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
</style>