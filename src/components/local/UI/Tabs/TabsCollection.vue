<template>
  <b-section class="clearfix">
    <div :id="collectionId" class="container px-4 mx-auto">
      <collection-header :main-heading="mainHeading" :sub-heading="subHeading" />
      <b-row>
        <ul
          class="flex justify-center my-4 space-x-4 text-md md:text-xl"
          id="pills-tab"
          role="tablist"
        >
          <nav-pill
            v-for="(collection, index) in collections"
            :collection="collection"
            :index="index"
            :active-index="state.activeIndex"
            :key="index"
            @click="change(index)"
          />
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <tab-content
            :with-carousel="withCarousel"
            :with-carousel-nav="withCarouselNav"
            :override-carousel="overrideCarousel"
            v-for="(collection, index) in collections"
            :collection="collection"
            :index="index"
            :active-index="state.activeIndex"
            :key="index"
          >
            <template v-slot="{ collection, item }">
              <slot :item="item" :collection="collection" />
            </template>
          </tab-content>
        </div>
      </b-row>
    </div>
  </b-section>
</template>

<script lang="ts">
// Added typescript support
import { reactive, watch } from 'vue';
import CollectionHeader from '@/components/local/UI/Tabs/Header.vue';
import NavPill from '@/components/local/UI/Tabs/NavPill.vue';
import TabContent from '@/components/local/UI/Tabs/TabContent.vue';

export default {
  components: {
    TabContent,
    NavPill,
    CollectionHeader,
  },
  props: {
    collectionId: {
      type: String,
      required: true,
    },
    mainHeading: {
      type: String,
      required: true,
    },
    subHeading: {
      type: String,
      required: false,
    },
    collections: {
      type: [Object, Array],
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

  setup() {
    const state = reactive({ activeIndex: 0 });

    function change(index: number) {
      state.activeIndex = index;
    }

    return {
      state,
      change
    }
  }
};
</script>
