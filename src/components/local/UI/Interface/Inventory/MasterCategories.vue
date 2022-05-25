<template>
  <div
    class="flex w-full -skew-x-3 justify-end last:hidden"
    v-for="category in categories"
    :key="category.id"
  >
    <div
      class="shadow-pink relative my-0.5 h-9 w-9 cursor-pointer bg-[#0e1325] p-1 md:h-20 md:w-20 md:p-2"
      :class="{ '!opacity-100 shadow-sm shadow-green-400': selectedCategoryId === category.id }"
      @click="loadCategory(category.id)"
    >
      <span v-if="selectedCategoryId === category.id" class="absolute -top-1 -right-1 flex h-3 w-3">
        <span class="inline-flex h-3 w-3 rounded-full bg-green-500"></span>
      </span>
      <img
        class="bg-cover"
        :src="`/img/bvv/icons/woman/${category.slug}.png`"
        :alt="category.name"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, watchEffect } from 'vue';
import { useRequest } from 'vue-request';
import { useInventoryStore } from '@/stores/inventory';

type Category = {
  id: number;
  name: string;
};

export default defineComponent({
  props: { isOpen: Boolean, readyState: Boolean },
  emits: ['loadCategory'],
  setup(props, { emit }) {
    const store = useInventoryStore();
    const { data, loading, error } = useRequest(store.fetchCategoriesByType('avatar_woman'));
    const categories: Ref<any> | Ref<{ label: any; value: any }[] | undefined> = data;
    const selectedCategoryId = ref();
    const loadCategory = (id: number) => {
      selectedCategoryId.value = id;
      emit('loadCategory', id);
    };

    watchEffect(() => {
      store.setSelectedCategoryId(selectedCategoryId.value);
    });

    return {
      loading,
      error,
      categories,
      loadCategory,
      selectedCategoryId,
    };
  },
});
</script>
