<template>
  <div
    role="tabpanel"
    class="tab-pane fade"
    :key="`collection_group_${collection.name}`"
    :class="{ 'block active': index === activeIndex, 'hidden': index !== activeIndex}"
    :id="`pills-${collection.name}`"
    :aria-labelledby="`pills-${collection.name}-tab`"
  >
    <template v-if="withCarousel">
      <carousel
        :slides="collection.items"
        :override-carousel="overrideCarousel"
        :with-nav="withCarouselNav"
      >
        <template v-slot="{ slide }">
          <slot :item="slide" :collection="collection" />
        </template>
      </carousel>
    </template>
    <template v-else>
      <div class="grid grid-cols-5 gap-4">
        <div v-for="item in collection.items" :key="`${collection.name}_${item.id}`">
          <slot :item="item" :collection="collection" />
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
// Added typescript support
import Carousel from '@/components/local/UI/Carousel/Carousel.vue';

export default {
  components: { Carousel },
  props: {
    collection: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    activeIndex: {
      type: Number,
      required: true,
    },
    withCarousel: {
      type: Boolean,
      required: false,
    },
    withCarouselNav: {
      type: Boolean,
      required: false,
    },
    overrideCarousel: {
      type: Object,
      required: false,
    },
  },
};
</script>
