<template>
  <div class="outer">
    <ul>
      <li class="active"><a>全て</a></li>
      <li><a>お知らせ</a></li>
      <li><a>イベント</a></li>
      <li><a>トピック</a></li>
      <li><a>レポート</a></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.outer {
  overflow-x: auto;
  text-align: center;
}
ul {
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