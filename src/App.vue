<template>
  <Header />
  <router-view/>
  <Footer />
</template>

<script>
import Header from "@/components/block/b-Header";
import Footer from "@/components/block/b-Footer";
export default {
  components:{
    Header,
    Footer
  }
}
</script>