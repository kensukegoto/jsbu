<template>
  <a :class="{active : isActive}">
    <p>
      <span></span>
      <span></span>
      <span></span>
    </p>
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
  background: #181818;
    display: flex;
    justify-content: center;
    align-items: center;
  p{
    position: relative;
    width: 50%;
    height: 50%;

  }
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
  background: #fff;
  span{
    background: #181818;
    &:first-child{
      top: 0;
      left: 0;
      transform-origin: top left;
      transform: translate(2.5px,2.5px) rotate(45deg);
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
      // 7としたいが2pxの太さを考慮して5px
      transform: translate(2.5px,-2.5px) rotate(-45deg);
    }
  }
}
</style>