<!-- @todo Replace with collections specific -->
<template>
  <b-section :id="sectionKey" class="features section-padding-100-70">
    <b-container>
      <section-header center="true">
        <template #sub-heading>
          {{ subHeading }}
        </template>
        <template #main-heading>
          {{ mainHeading }}
        </template>
      </section-header>

      <b-row class="align-items-center mt-10">
        <item
          v-for="(item, id) in newListedItems"
          :key="id"
          class="col-lg-3 col-sm-6 col-xs-12"
          :item-details="item.title"
          :user-name="item.name"
          :price="item.price"
          :pricing="item['Highest Bid']"
          :likes="item.like"
          :clock="item['hour ago']"
          :img="item.imgUrl"
          :logo="item.logo"
        />
      </b-row>
      <b-col col="12" lg="12" class="text-center">
        <base-button route="/discover" mode="btn more-btn"> Load More </base-button>
      </b-col>
    </b-container>
  </b-section>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, ref } from 'vue';
import getItems from '@/composables/items';
import Item from '@/components/local/Item/Item.vue';

export default defineComponent({
  components: { Item },
  props: {
    mainHeading: {
      type: String,
      required: true,
    },
    subHeading: {
      type: String,
      required: false,
    },
    sectionKey: {
      type: String,
      required: false,
    },
  },
  setup() {
    const nftData = ref();
    return {
      nftData: {},
    };
  },
});
</script>
