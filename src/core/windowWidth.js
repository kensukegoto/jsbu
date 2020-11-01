import { ref,onMounted,onUnmounted } from 'vue'

export default () => {

  const w = ref(window.innerWidth || document.documentElement.clientWidth || 0)

  function update(){
    w.value = window.innerWidth || document.documentElement.clientWidth || 0
  }

  onMounted(() => {
    window.addEventListener('resize',update)
  })

  onUnmounted(() => {
    window.removeEventListener('resize',update)
  })


  return w

}