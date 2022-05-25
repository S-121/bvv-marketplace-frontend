import { useRoute } from 'vue-router';
import { onBeforeMount, ref, watch } from 'vue';

export default function useTheme() {
  const route = useRoute();
  const theme = ref();

  watch(route, (to) => {
    theme.value = to.meta.theme ?? `theme-default`;
  });

  return { theme };
}
