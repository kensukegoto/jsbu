<template>
  <div class="tab__outer">
    <ul class="tab">
      <li :class="type === 'all' ? 'active' : ''"><a @click="()=>{changeTab('all')}">全て</a></li>
      <li :class="type === 'info' ? 'active' : ''"><a @click="()=>{changeTab('info')}">お知らせ</a></li>
      <li :class="type === 'event' ? 'active' : ''"><a @click="()=>{changeTab('event')}">イベント</a></li>
      <li :class="type === 'topic' ? 'active' : ''"><a @click="()=>{changeTab('topic')}">トピック</a></li>
      <li :class="type === 'report' ? 'active' : ''"><a @click="()=>{changeTab('report')}">レポート</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  methods:{
    changeTab(type){
      this.$emit('change-tab',type)
    }
  },
  props: {
    type: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.tab {
  &__outer{
    overflow-x: auto;
    text-align: center;
  }
  display: inline-block;
  white-space: nowrap;
  li {
    display: inline-block;
    background-color: $white;
    a {
      height: 40px;
      width: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.4rem;
      font-weight: bold;
      @include media(m){
        height: 48px;
        width: 100px;
      }
    }
  }
  li.active {
    color: $white;
    background-color: $black;
  }
}
</style>