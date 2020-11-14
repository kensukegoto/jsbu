<template>
  <PankuzuList />
  <main>
    {{ newsId }}
    <Article />
  </main>
</template>

<script>
import PankuzuList from "@/components/common/PankuzuList";
import { defineAsyncComponent } from 'vue'
export default {
  components:{
    PankuzuList,
    Article: defineAsyncComponent(() => {
      
      console.log(newsId)
      return Promise.resolve(import(`@/views/News/page/${newsId}`))
    })
  },
  props: {
    newsId : {
      type: Number,
      required: true
    }
  },
  // setup(props){

  //   console.log(props)

  //   return {
  //     newsId: props.newsId
  //   }
  // },
  unmounted(){
    // this.$destroy();
  }
}
</script>