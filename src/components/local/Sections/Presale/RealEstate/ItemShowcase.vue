<template>
  <b-section id="real-estate" class="moving section-padding overflow-hidden">
    <div class="relative">
      <showcase />
    </div>
  </b-section>
  <b-section class="bg-[#0e1325] pb-6">
    <slider />
    <div class="my-3 w-full">
      <router-link
        :to="{ route: 'real-estate' }"
        class="mx-auto block w-36 rounded-full border-2 border-skin-color bg-skin-button-featured py-1 text-center text-sm font-semibold text-skin-base hover:bg-black hover:text-skin-base md:w-72 md:text-xl"
      >
        Discover Presale
      </router-link>
    </div>
    <!-- Hero Content -->
    <HeroContent class="mt-4" />
  </b-section>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useRequest } from 'vue-request';
import { useRoute } from 'vue-router';
import Showcase from '@/scenes/real-estate/Showcase.vue';
import { useItemsStore } from '@/stores/items';
import Slider from '@/components/local/Sections/Presale/RealEstate/Slider.vue';
import HeroContent from './HeroContent.vue';
import HotCollections from '@/components/local/Sections/Presale/RealEstate/HotCollections.vue';
import FeaturedTour from '@/components/local/Sections/Presale/RealEstate/FeaturedTour.vue';
import FiveStarHotel from '@/components/local/Sections/Presale/RealEstate/FiveStarHotel.vue';

export default {
  components: { Showcase, Slider, HeroContent, HotCollections, FeaturedTour, FiveStarHotel },
  setup() {
    const route = useRoute();
    const id = Number(route.params.itemId);
    const store = useItemsStore();
    const { data, loading, error } = useRequest(store.fetchItem(id));
    const item = ref<any>(data);

    return { item };
  },
};
</script>
