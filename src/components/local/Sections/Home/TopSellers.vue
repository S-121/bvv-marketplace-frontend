<template>
  <b-section id="topSellers" class="clearfix my-4 bg-white/5 py-2 px-10">
    <b-container id="topSellersCarousel" class="container mx-auto">
      <section-header center="true">
        <template #main-heading>
          {{ mainHeading }}
        </template>
      </section-header>
      <b-row class="row align-items-center mt-6 md:mt-12">
        <carousel
          :withNav="true"
          id=""
          :slides="topSellers"
          :settings="settings"
          :breakpoints="breakpoints"
          class="my-2 mx-auto h-[110px] w-[85%] md:h-[280px]"
        >
          <template v-slot="{ slide }">
            <author-card :author="slide" />
          </template>
        </carousel>
      </b-row>
    </b-container>
  </b-section>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
import { useRequest } from 'vue-request';
import AuthorCard from '@/components/local/UI/Card/AuthorCard.vue';
import Carousel from '@/components/local/UI/Carousel/Carousel.vue';
import { useArtistsStore } from '@/stores/artists';

export default {
  components: { AuthorCard, Carousel },
  props: {
    mainHeading: {
      type: String,
      required: true,
    },
  },
  setup() {
    const store = useArtistsStore();
    // const { data, loading, error } = useRequest(store.fetchTopSellers());
    // const topSellers = ref<any>(data);
    const topSellers = computed(() => store.topSellers);

    return {
      topSellers,
      breakpoints: {
        700: {
          itemsToShow: 3.5,
          snapAlign: 'center',
        },
        1024: {
          itemsToShow: 5,
          snapAlign: 'center',
        },
      },
      settings: {
        autoplay: 3000,
        transition: 3000,
        itemsToShow: 3,
        wrapAround: true,
      },
    };
  },
};
</script>
