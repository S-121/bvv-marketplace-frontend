<template>
  <tabs-collection
    collection-id="hotCollections"
    :main-heading="mainHeading"
    :collections="collections"
    :withCarousel="true"
  >
    <template v-slot="{ collection, item }">
      <card-collection
        :key="`${collection.name}_${item.id}`"
        :collection-info="item.name"
        owner-name="VESA"
        :img="item.image_url"
      />
    </template>
  </tabs-collection>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, UnwrapRef, watchEffect } from 'vue';
import { useRequest } from 'vue-request';
import { useCollectionsStore } from '@/stores/collections';
import CardCollection from '@/components/local/UI/Card/ItemCard.vue';
import TabsCollection from '@/components/local/UI/Tabs/TabsCollection.vue';

type Item = {
  id: number;
  name: string;
  image_url: string;
};

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
    const { data, loading, error } = useRequest(store.fetchByArtist('vesa'));
    const collections = ref<any>(data);

    // @todo Handle loading and error states
    return {
      loading,
      error,
      collections,
    };
  },
};
</script>
