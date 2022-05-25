<template>
  <div class="mx-24 mt-4 ml-1 grid grid-cols-2 grid-rows-3 gap-4 lg:mx-4 lg:grid-cols-4">
    <div
      v-for="item in windowWidth < 1000 ? items.slice(0, 6) : items"
      :key="item.id"
      class="block h-28 -skew-x-3 border bg-white lg:h-40"
    >
      <item :item="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import { useRequest } from 'vue-request';
import Item from '@/components/local/UI/Interface/Inventory/Item.vue';
import onWindowResize from '@/composables/window-resize';
import { useInventoryStore } from '@/stores/inventory';

export default defineComponent({
  components: { Item },
  props: { isOpen: Boolean, readyState: Boolean, categoryId: Number },
  emits: ['update:modelValue', 'update:readyState'],
  setup(props, { emit }) {
    const { windowWidth } = onWindowResize();

    const store = useInventoryStore();
    if (props.categoryId) {
      store.setSelectedCategoryId(props.categoryId);
    }
    const { data, loading, error } = useRequest(store.filterItemsByCategory());
    const items: Ref<any> | Ref<{ label: any; value: any }[] | undefined> = data;

    return {
      items,
      windowWidth,
    };
  },
});
</script>
