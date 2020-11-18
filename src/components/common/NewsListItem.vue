<template>
  <article class="card">
    <a class="tmb" :href="`/news/${attr.url}`">
      <figure>
        <img :src="`/image/${attr.image}`" alt="">
      </figure>
    </a>
    <div class="txt">
      <time>2020.11.3</time>
      <h3><a>{{ attr.title }}</a></h3>
      <p>{{ attr.description }}</p>
      <a class="tag">{{ attr.category }}</a>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    attr: {
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.card{
  display: flex;
  .tmb{
    width: 50%;
    @include media(m){
      width: 284px;
      flex-shrink: 0;
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