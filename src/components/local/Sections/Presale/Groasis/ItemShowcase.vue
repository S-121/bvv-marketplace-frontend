<template>
  <b-section id="avatars" class="hero-section moving section-padding">
    <div class="relative h-auto">
      <img :src="item.image_url" :alt="item.name" class="w-full" />
      <div class="absolute bottom-0 bg-[#0D1527]/70 py-20 text-center md:mx-auto md:w-full">
        <h2
          class="font-header text-5xl font-black tracking-tight text-skin-base"
          v-text="item.name"
        />
      </div>

      <div class="absolute -bottom-8 z-10 w-full">
        <router-link
          :to="{ route: 'avatars' }"
          class="btn mx-auto block w-72 rounded-full border-2 border-skin-color bg-skin-button-featured px-4 py-[20px] text-xl text-skin-base hover:bg-black hover:text-skin-base"
        >
          Customise
        </router-link>
      </div>
    </div>

    <!-- Hero Content -->
    <div class="hero-section-content mx-2 mt-32 mb-16 text-center md:mt-20">
      <h3 class="mx-2 mt-3 font-header text-4xl text-skin-base">Description</h3>
      <p class="mt-5 text-2xl text-skin-muted" v-text="item.description" />
    </div>
  </b-section>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useRequest } from 'vue-request';
import { useRoute } from 'vue-router';
import { useItemsStore } from '@/stores/items';

export default {
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
