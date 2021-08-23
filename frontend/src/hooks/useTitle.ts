import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const useTitle = () => {
  const router = useRoute()

  onMounted(() => {
    document.title = (router.meta.title as string) || 'SOUTH博客'
  })

  return false
}

export default useTitle