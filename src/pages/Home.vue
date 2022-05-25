<template>
  <intro main-heading="All You Need In One Marketplace" />
  <top-sellers main-heading="Top Sellers This Month" />
  <hot-collections main-heading="Hot Collections" />
</template>

<script lang="ts">
// Added typescript support
import { defineComponent } from 'vue';
import Intro from '@/components/local/Sections/Home/Intro.vue';
import TopSellers from '@/components/local/Sections/Home/TopSellers.vue';
import HotCollections from '@/components/local/Sections/Home/HotCollections.vue';

export default defineComponent({
  components: { Intro, TopSellers, HotCollections },
  setup() {
    return {};
  },
});
</script>
