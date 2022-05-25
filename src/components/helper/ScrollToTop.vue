<template>
  <div>
    <a v-show="isVisible" id="scroll" role="button" @click="scrollToTop">Scroll Top</a>
  </div>
</template>

<script lang="ts">
// Added typescript support
import { defineComponent, onMounted } from 'vue';
import useScrollToTop from '@/composables/scroll-to-top';

export default defineComponent({
  setup() {
    return useScrollToTop();
  },
});
</script>
