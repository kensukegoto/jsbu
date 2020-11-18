<template>
<Suspense>
  <template #default>
    <NewsList class="list" />
  </template>
  <template #fallback>
    Loading...
  </template>
</Suspense>
</template>

<script>
import NewsList from "@/components/top/NewsList";
export default {
  components:{
    NewsList
  }
}
</script>