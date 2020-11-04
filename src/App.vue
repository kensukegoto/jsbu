<template>
  <bHeader />
  <router-view/>
  <bFooter/>
</template>

<script>
import bHeader from "@/components/block/b-Header";
import bFooter from "@/components/block/b-Footer";
export default {
  components:{
    bHeader,
    bFooter
  }
}
</script>