<template>
  <article class="card">
    <a class="tmb">
      <figure>
        <img src="/image/img_01.jpg" alt="">
      </figure>
    </a>
    <div class="txt">
      <time>2020.11.3</time>
      <h3><a>ペルシャは、ネコの品種の一つペルシャは、ネコ</a></h3>
      <p>長く密集した被毛、ずんぐりした体つき、短い足、離れた両目の幅広の顔といった特徴をもつ。横顔は額、鼻、あごが一直線に並び、起伏の少ない低い鼻を有する。</p>
      <a class="tag">トピック</a>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.card{
  display: flex;
  .tmb{
    width: 50%;
    @include media(m){
      width: 284px;
    }
    a{
      display: block;
    }
  }
  .txt {
    width: 50%;
    padding-left: 12px;
    time {
      font-size: 1.2rem;
    }
    h3 {
      margin-top: 8px;
      line-height: 1.6;
    }
    p {
      display: none;
    }
    .tag {
      font-size: 1.2rem;
      margin-top: 16px;
      display: inline-block;
      padding: 2px 4px;
      border: 1px solid $black;
    }
    @include media(m){
      width: auto;
      time {
        font-size: 1.4rem;
      }
      h3 {
        margin-top: 16px;
        font-size: 1.8rem;
      }
      p {
        margin-top: 16px;
        display: block;
      }
      .tag {
        margin-top: 28px;
        font-size: 1.4rem;
      }
    }
  }

}
</style>