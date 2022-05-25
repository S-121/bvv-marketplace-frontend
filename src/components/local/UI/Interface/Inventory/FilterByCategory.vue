<template>
  <div class="mt-4 flex justify-between space-x-4">
    <carousel
      :withNav="false"
      :slides="categories"
      :settings="settings"
      :breakpoints="breakpoints"
      class="w-[75vw] lg:w-auto"
    >
      <template v-slot="{ slide }">
        <b-col>
          <div
            :key="slide.id"
            @click="filterCategory(slide.id)"
            class="m-1 w-16 shrink-0 -skew-x-3 cursor-pointer overflow-hidden rounded-sm bg-[#091937] p-0 opacity-40 shadow-[0_0_10px_0px_rgba(0,0,0,0.3)]"
            :class="{
              'bg-opacity-20 !opacity-100 shadow-[#2535CF]':
                (selectedCategoryId || categories[0].id) === slide.id,
            }"
          >
            <img
              class="bg-cover"
              :src="`/img/bvv/icons/woman/${slide.parent.slug}/${slide.slug}.png`"
              alt=""
            />
            <div
              class="mb-1 text-center text-[7px] text-gray-400"
              :class="{
                '!text-white': (selectedCategoryId || categories[0].id) === slide.id,
              }"
              v-text="slide.name"
            />
          </div>
        </b-col>
      </template>
    </carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, watchEffect } from 'vue';
import { useRequest } from 'vue-request';
import { useInventoryStore } from '@/stores/inventory';
import Carousel from '@/components/local/UI/Carousel/Carousel.vue';

export default defineComponent({
  components: { Carousel },
  emits: ['filterCategory'],
  setup(props, { emit }) {
    const store = useInventoryStore();
    const { data, loading, error } = useRequest(
      store.fetchCategoriesByType('avatar_woman', store.selectedCategoryId)
    );
    const categories: Ref<any> | Ref<{ label: any; value: any }[] | undefined> = data;

    const selectedCategoryId = ref();
    const filterCategory = (id: number) => {
      selectedCategoryId.value = id;
      emit('filterCategory', id);
    };

    return {
      loading,
      error,
      categories,
      filterCategory,
      selectedCategoryId,
      breakpoints: {
        700: {
          itemsToShow: 4,
          snapAlign: 'start',
        },
        1024: {
          itemsToShow: 8,
          snapAlign: 'start',
        },
      },
      settings: {
        itemsToShow: 4,
        snapAlign: 'start',
      },
    };
  },
});
</script>
