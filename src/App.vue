<template>
  <TheHeader />
  <router-view/>
  <TheFooter/>
</template>

<script>
import TheHeader from "@/components/common/TheHeader";
import TheFooter from "@/components/common/TheFooter";
export default {
  components:{
    TheHeader,
    TheFooter
  }
}
</script>