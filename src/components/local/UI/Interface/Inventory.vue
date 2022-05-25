<template>
  <div
    class="transition duration-1000 ease-in-out"
    :class="[isReady ? 'opacity-100' : 'opacity-0']"
  >
    <div v-if="isReady" class="mt-6 w-screen lg:mt-20 lg:w-auto">
      <filter-by-category @filterCategory="onFilterCategory" />
      <items-list :category-id="categoryId" :key="`items_${categoryId}`" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import FilterByCategory from '@/components/local/UI/Interface/Inventory/FilterByCategory.vue';
import ItemsList from '@/components/local/UI/Interface/Inventory/ItemsList.vue';

export default defineComponent({
  components: { ItemsList, FilterByCategory },
  props: { isReady: Boolean },
  emits: ['filterCategory'],
  setup(props, { emit }) {
    const categoryId = ref(0);
    const onFilterCategory = (id: number) => {
      emit('filterCategory', id);
      categoryId.value = id;
    };

    return { onFilterCategory, categoryId };
  },
});
</script>
