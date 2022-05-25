<template>
  <header>
    <nav-bar />
  </header>
</template>

<script lang="ts">
// Added typescript support
import AOS from 'aos';
import { defineComponent, onMounted } from 'vue';
import NavBar from '@/components/global/Header/Navbar.vue';

export default defineComponent({
  components: {
    NavBar,
  },
  setup() {
    AOS.init();
  },
});
</script>
