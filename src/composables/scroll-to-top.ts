import { ref, onMounted, onUnmounted } from 'vue';

export default function onScrollToTop() {
  const isVisible = ref(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = (e: any) => {
    e.preventDefault();
    isVisible.value =
      ((document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop) >=
      0.2 * window.innerHeight;
  };

  onMounted(() => window.addEventListener('scroll', handleScroll));
  onUnmounted(() => window.removeEventListener('scroll', handleScroll));

  return { scrollToTop, handleScroll, isVisible };
}
