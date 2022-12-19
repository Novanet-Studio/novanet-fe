import type { Ref } from 'vue';

export default function useCurrentUrl(): Ref<string> {
  const currentUrl = ref('');

  const route = useRoute();

  onMounted(() => {
    const origin = window.location.origin;
    const currentPath = route.fullPath;
    currentUrl.value = origin + currentPath;
  });

  return currentUrl;
}
