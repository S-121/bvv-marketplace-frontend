<template>
  <template v-if="$route.params.itemId > 0">
    <item-showcase />
  </template>
  <template v-else>
    <intro
      main-heading="Explore Our Private NFT Single Villas"
      sub-heading="Exclusive Virtual Real Estate"
    />
    <hot-collections main-heading="Hot Collections" />
    <featured-tour main-heading="Virtual Real Estate Tour" />
    <five-star-hotel main-heading="Virtual Real Estate Pre-Sale" />
  </template>
</template>

<script lang="ts">
// Added typescript support
import { defineComponent } from 'vue';
import Intro from '@/components/local/Sections/Presale/RealEstate/Intro.vue';
import ItemShowcase from '@/components/local/Sections/Presale/RealEstate/ItemShowcase.vue';
import FeaturedTour from '@/components/local/Sections/Presale/RealEstate/FeaturedTour.vue';
import FiveStarHotel from '@/components/local/Sections/Presale/RealEstate/FiveStarHotel.vue';

export default defineComponent({
  components: { Intro, ItemShowcase, FeaturedTour, FiveStarHotel },
  setup() {
    return {};
  },
});
</script>
