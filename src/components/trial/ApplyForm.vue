<template>
  <div class="apply-form">
    <h2>体験入部に申し込む</h2>
    <form class="form">
      <div class="form__item name">
        <p class="title">お名前：</p>
        <p class="input"><input type="text"></p>
      </div>
      <div class="form__item mail">
        <p class="title">メールアドレス：</p>
        <p class="input"><input type="text"></p>
      </div>
      <div class="form__item tele">
        <p class="title">電話番号：</p>
        <p class="input"><input type="text"></p>
      </div>
      <div :class="`form__item day${e1}`" v-for="(e1) of [1,2,3]" :key="e1">
        <p class="title">第{{ e1 }}希望日：</p>
        <p class="input select">
          <select name="" id="">
            <option v-for="(day,key) of dateList" :key="key" :value="day">{{ day }}</option>
          </select>
        </p>
        <p class="input check">
          <span v-for="(e,i) of timeList" :key='i'>
            <input type="checkbox" :id="`day${e1}_${e.name}`" :name="`day${e1}_${e.name}`">
            <label :for="`day${e1}_${e.name}`">{{ e.label }}</label>
          </span>
        </p>
      </div>
      <div class="form__item">
        <p class="title">その他：</p>
        <p class="input textarea"><textarea></textarea></p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  setup(){

    const today = new Date();
    const dateList = [...new Array(30)].map(() => {
      const day = new Date(today.setDate( today.getDate() + 1 ));
      return `${day.getMonth() + 1}月${day.getDate()}日`;
    });

    const timeList = [
      { name: 'all',label:'いつでも' },
      { name: '11',label:'11:00 ~' },
      { name: '12',label:'12:00 ~' },
      { name: '13',label:'13:00 ~' },
      { name: '14',label:'14:00 ~' },
      { name: '15',label:'15:00 ~' },
      { name: '16',label:'16:00 ~' },
      { name: '17',label:'17:00 ~' },
      { name: '18',label:'18:00 ~' },
      { name: '19',label:'19:00 ~' },
      { name: '20',label:'20:00 ~' },
    ];

    return {
      dateList,
      timeList
    }
  }
}
</script>

<style lang="scss" scoped>
.apply-form{
  background-color: $white;
  padding: 28px 8px 32px;
  @include media(m){
    width: 960px;
    margin: 0 auto;
    padding: 32px 40px 40px;
  }

  h2 {
    text-align: center;
    font-size: 2rem;
    @include media(m){
      font-size: 2.4rem;
    }
  }

}

.form {
  &__item {
    margin-top: 28px;
    padding-bottom: 28px;
    border-bottom: 1px solid $grey;
    @include media(m){
      margin-top: 32px;
      padding-bottom: 32px;
      &::after{
        content: "";
        display: block;
        clear: both;
      }
    }
    .title {
      font-weight: bold;
      @include media(m){
        width: 20%;
        float: left;
      }
    }
    .input {
      margin-top: 1em;
      @include media(m){
        margin-top: 0;
        width: 420px;
        margin-right: calc(80% - 420px);
        float: right;
      }
      input,
      select {
        width: 100%;
        padding: 14px 8px;
        border: none;
        background-color: $greyLight;

      }


      // 希望日
      &.select {
        position: relative;
        select{
          appearance: none;
        }
        &::after{
          content: '▼';
          font-size: 14px;
          color: $greyDark;
          position: absolute;
          top: 50%;
          right: 8px;
          transform: translateY(-50%);
          pointer-events: none;
        }
      }

      // 希望時間
      &.check{

        margin-top: 0;
        display: flex;
        flex-wrap: wrap;
        @include media(m){
          width: 80%;
          float: right;
          margin-right: 0;
          padding-right: 120px;

        }
     
        span {
          margin-top: 1em;
          width: 25%;
          @include media(m){
            width: calc(100% / 6);
            &:nth-child(-n + 6){
              margin-top: 32px;
            }
          }
          input {
            display: none;
          }

          label {
            font-size: 1.2rem;
            line-height: 1;
            display: flex;
            align-items: center;
            position: relative;
            &::before {
              content: '';
              display: block;
              height: 12px;
              width: 12px;
              margin-right: 4px;
              background-color: $grey;
            }
          }

          // チェック
          input:checked + label::after{
              content: '';
              display: block;
              height: 8px;
              width: 8px;
              background-color: $greyDark;
              position: absolute;
              top: 0;
              left: 0;
              margin-top: 2px;
              margin-left: 2px;
              border-radius: 50%;
          }
        }
      }

      // その他
      &.textarea{
        
        @include media(m){
          width: 80%;
          margin-right: 0;
        }
        textarea{
          width: 100%;
          height: 120px;
          border: none;
          background: $greyLight;
          padding: 8px;
          @include media(m){
            height: 240px;
          }
        }
      }
      
    }

  }
}
</style>