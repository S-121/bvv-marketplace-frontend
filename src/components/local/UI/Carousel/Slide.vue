<template>
  <vue-slide>
    <div class="carousel__item relative">
      <slot :slide="slide" />
    </div>
  </vue-slide>
</template>

<script lang="ts">
// Added typescript support
import 'vue3-carousel/dist/carousel.css';
import { Slide as VueSlide } from 'vue3-carousel';

export default {
  components: { VueSlide },
  props: {
    slide: {
      type: Object,
      required: true,
    },
  },
};
</script>
