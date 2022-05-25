<template>
  <base-header main-heading="Explore">
    {{ $route.name === 'exploreCollections' ? 'Collections' : 'NFTs' }}
  </base-header>
  <explore-collections
    sectionKey="popularItems"
    :main-heading="`Popular ${$route.name === 'exploreCollections' ? 'Collections' : 'NFTs'}`"
  />
</template>

<script lang="ts">
// Added typescript support
import { defineComponent } from 'vue';
import ExploreCollections from '@/components/local/Sections/Explore/Collections.vue';

export default defineComponent({
  components: { ExploreCollections },
  setup() {
    return {};
  },
});
</script>
