require('@/assets/scss/base.scss')
require('@/assets/scss/news.scss')
import { createApp } from 'vue'
import router from './router'
import TheHeader from "@/components/common/TheHeader";
import PankuzuList from "@/components/common/PankuzuList";
import NewsList from "@/components/news/NewsListFragment";
import TheFooter from "@/components/common/TheFooter";

createApp(TheHeader).provide('conf', { isChild : true }).use(router).mount('#header');
createApp(PankuzuList).use(router).mount('#pankuzu');
createApp(NewsList).use(router).mount('#newslist');
createApp(TheFooter).use(router).mount('#footer')
