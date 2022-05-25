<template>
  <a class="navbar-brand align-items-center flex align-middle" href="/">
    <img :src="logoSrc" alt="Blockchain Valley Virtual" class="w-[60vw] sm:w-[350px]" />
  </a>
</template>

<script lang="ts">
// Added typescript support
import AOS from 'aos';
import { defineComponent, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const route = useRoute();
    const logoSrc = ref();

    watch(route, (to) => {
      logoSrc.value = to.meta.logo ?? '/img/bvv/logo.png';
    });

    return { logoSrc };
  },
});
</script>
