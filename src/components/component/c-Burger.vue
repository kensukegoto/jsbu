<template>
  <a :class="{active : isActive}">
    <span></span>
    <span></span>
    <span></span>
  </a>
</template>

<script>

export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
a{
  width: 44px;
  height: 44px;
  span {
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    background-color: #fff;
    transition: transform .5s,background-color .5s,opacity .5s;
    &:first-child{
      top: 0;
      left: 0;
      transform-origin: top left;
    }
    &:nth-child(2){
      top: 50%;
      left: 0;
      opacity: 1;
    }
    &:last-child{
      bottom: 0;
      left: 0;
      transform-origin: bottom left;
    }
  }

}
a.active{

  span{
    background-color: #000;
     &:first-child{
      top: 0;
      left: 0;
      transform-origin: top left;
      transform: rotate(45deg);
    }
    &:nth-child(2){
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      opacity: 0;
    }
    &:last-child{
      bottom: 0;
      left: 0;
      transform-origin: bottom left;
      // 13としたいが2pxの太さを考慮して11px
      transform: translateY(-11px) rotate(-45deg);
    }
  }
}
</style>