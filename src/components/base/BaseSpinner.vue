<template>
  <div v-if="isLoading" id="preloader">
    <div class="preload-content">
      <div id="dream-load" />
    </div>
  </div>
</template>

<script lang="ts">
// Added typescript support
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  setup() {
    // @todo Loader true on ajax request false on returning promise 200-201 response
    const isLoading = ref(false);

    onMounted(() => {
      // eslint-disable-next-line no-return-assign
      setTimeout(() => (isLoading.value = false), 500);
    });

    return {
      isLoading,
    };
  },
});
</script>
