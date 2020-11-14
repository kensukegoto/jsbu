<template>
  <PankuzuList />
  <main>
    <Article />
  </main>
</template>

<script>
import PankuzuList from "@/components/common/PankuzuList";
import { useRoute } from 'vue-router';
import { defineAsyncComponent } from 'vue'
export default {
  components:{
    PankuzuList,
    Article: defineAsyncComponent(() => {
      const newsId = useRoute().params.newsId;
      console.log(newsId)
      return Promise.resolve(import(`@/views/News/page/${newsId}`))
    })
  }

}
</script>