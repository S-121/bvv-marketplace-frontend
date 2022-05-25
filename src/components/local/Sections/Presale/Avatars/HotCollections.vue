<template>
  <div class="bg-white/5 p-10">
    <tabs-collection
      collection-id="hotCollections"
      :main-heading="mainHeading"
      :collections="collections"
      :override-carousel="overrideCarousel"
      :withCarousel="true"
      :with-carousel-nav="true"
    >
      <template v-slot="{ collection, item }">
        <card-collection
          :key="`${collection.name}_${item.id}`"
          :collection-info="item.name"
          owner-name="Avatar"
          :img="item.image_url"
          :id="item.id"
        />
      </template>
    </tabs-collection>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRequest } from 'vue-request';
import CardCollection from '@/components/local/UI/Card/ItemCard.vue';
import TabsCollection from '@/components/local/UI/Tabs/TabsCollection.vue';
import { useCollectionsStore } from '@/stores/collections';

export default {
  components: { CardCollection, TabsCollection },
  props: {
    mainHeading: {
      type: String,
      required: true,
    },
  },
  setup() {
    const store = useCollectionsStore();
    const { data, loading, error } = useRequest(store.fetchByName('avatars'));
    const collections = ref<any>(data);

    // @todo Handle loading and error states
    return {
      loading,
      error,
      collections,
      overrideCarousel: {
        breakpoints: {
          700: {
            itemsToShow: 3.5,
            snapAlign: 'center',
          },
          1024: {
            itemsToShow: 4,
            snapAlign: 'center',
          },
        },
        settings: {
          itemsToShow: 4,
          wrapAround: true,
        },
      },
    };
  },
};
</script>
