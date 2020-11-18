require('@/assets/scss/base.scss')
import { createApp } from 'vue'
import router from './router'
import TheHeader from "@/components/common/TheHeader";
import TheFooter from "@/components/common/TheFooter";

createApp(TheHeader).provide('conf', { isChild : true }).use(router).mount('#header');

createApp(TheFooter).mount('#footer')
