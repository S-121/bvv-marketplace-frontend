<template>
  <div id="slider" class="relative">
    <div class="slider-overlay"></div>
    <Carousel :settings="settings" :breakpoints="breakpoints">
      <Slide v-for="slide in 6" :key="slide">
        <div class="carousel__item">
          <img
            class="h-24 bg-cover md:h-56"
            src="/src/assets/real-estate/bg/villa-mobile-01.png"
            alt=""
          />
        </div>
      </Slide>

      <template #addons>
        <Navigation class="mx-8" />
      </template>
    </Carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  components: { Carousel, Navigation, Slide },
  setup() {
    return {
      breakpoints: {
        700: {
          itemsToShow: 4,
          snapAlign: 'center',
        },
        1024: {
          itemsToShow: 5,
          snapAlign: 'center',
        },
      },
      settings: {
        itemsToShow: 4,
        wrapAround: true,
      },
    };
  },
});
</script>

<style scoped>
.carousel__slide {
  padding: 0 !important;
}
#slider :deep(.carousel__prev) {
  padding: 2px;
  border-radius: 0.375rem;
  color: #dfaf63;
  border: 2px solid #dfaf63 !important;
  z-index: 100;
}
#slider :deep(.carousel__next) {
  padding: 2px;
  border-radius: 0.375rem;
  color: #dfaf63;
  border: 2px solid #dfaf63 !important;
  z-index: 100;
}
#slider :deep(.slider-overlay) {
  @apply pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#0e1325] via-black/20 to-[#0e1325];
}
</style>
