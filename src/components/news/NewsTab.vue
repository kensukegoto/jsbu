<template>
  <div class="tab__outer">
    <ul class="tab">
      <li 
        v-for="(name,key) of Object.keys(tablist)" 
        :key="key"
        :class="type === name ? 'active' : ''"
        @click="()=>{changeTab(name)}"
      >
      <a>{{ tablist[name] }}</a>
      </li>
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
    },
    tablist: {
      type: Object,
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