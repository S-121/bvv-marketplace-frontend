<template>
  <carousel :settings="settings" :breakpoints="breakpoints">
    <slide v-for="(slide, index) in slides" :key="index" :slide="slide">
      <template v-slot="{ slide }">
        <slot :slide="slide" />
      </template>
    </slide>
    <template v-if="withNav" #addons>
      <navigation class="-mx-6 -mt-4 text-center md:-mx-8">
        <template #prev>
          <span
            class="rounded-full border-2 border-transparent bg-skin-border-color px-3 py-[.025] text-black"
          >
            <fa :icon="['fas', 'caret-left']" />
          </span>
        </template>
        <template #next>
          <span
            class="rounded-full border-2 border-skin-color px-3 py-[.025] text-skin-border-color"
          >
            <fa :icon="['fas', 'caret-right']" />
          </span>
        </template>
      </navigation>
    </template>
  </carousel>
</template>

<script lang="ts">
// Added typescript support
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Navigation } from 'vue3-carousel';
import withCarousel from '@/composables/carousel';
import Slide from '@/components/local/UI/Carousel/Slide.vue';

export default {
  components: { Slide, Carousel, Navigation },
  props: {
    slides: {
      type: Array,
      required: true,
    },
    withNav: {
      type: Boolean,
      required: false,
    },
    overrideCarousel: {
      type: Object,
      required: false,
    },
  },
  setup(props: { overrideCarousel: any }) {
    let { settings, breakpoints } = withCarousel();

    if (props.overrideCarousel?.settings ?? false) {
      settings = props.overrideCarousel;
    }

    if (props.overrideCarousel?.breakpoints ?? false) {
      breakpoints = props.overrideCarousel;
    }

    console.info(props.overrideCarousel);

    return {
      breakpoints,
      settings,
    };
  },
};
</script>
