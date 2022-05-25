<template>
  <template v-if="$route.params.itemId > 0">
    <item-showcase />
  </template>
  <template v-else>
    <intro main-heading="Exclusive Presale" sub-heading="Your unique Avatar | Metaverse ready" />
    <hot-collections main-heading="Hot Collections" />
  </template>
</template>

<script lang="ts">
// Added typescript support
import { defineComponent } from 'vue';
import Intro from '@/components/local/Sections/Presale/Avatars/Intro.vue';
import ItemShowcase from '@/components/local/Sections/Presale/Avatars/ItemShowcase.vue';
import HotCollections from '@/components/local/Sections/Presale/Avatars/HotCollections.vue';

export default defineComponent({
  components: { Intro, ItemShowcase, HotCollections },
  setup() {
    return {};
  },
});
</script>
