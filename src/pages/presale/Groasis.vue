<template>
  <template v-if="$route.params.itemId > 0">
    <item-showcase />
    <hot-collections main-heading="Hot Collections" />
  </template>
  <template v-else>
    <intro
      main-heading="Restoring Ecosystems"
      sub-heading="Blockchain World Summit Dec 15-17. 2021"
    />
    <featured-info main-heading="THE ‘EASIER SAID THAN DONE’ APPROACH" />
    <hot-collections main-heading="Hot Collections" />
  </template>
</template>

<script lang="ts">
// Added typescript support
import { defineComponent } from 'vue';
import Intro from '@/components/local/Sections/Presale/Groasis/Intro.vue';
import ItemShowcase from '@/components/local/Sections/Presale/Groasis/ItemShowcase.vue';
import FeaturedInfo from '@/components/local/Sections/Presale/Groasis/FeaturedInfo.vue';
import HotCollections from '@/components/local/Sections/Presale/Groasis/HotCollections.vue';

export default defineComponent({
  components: { Intro, ItemShowcase, FeaturedInfo, HotCollections },
  setup() {
    return {};
  },
});
</script>
