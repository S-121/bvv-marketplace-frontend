<template>
  <div
    class="top-12 right-0 mt-4 flex flex-col space-y-1 py-3 lg:static lg:top-0 lg:mt-16 lg:px-4"
  >
    <div class="absolute right-4 top-2 z-[2000] text-xs lg:top-6 lg:left-0 lg:text-lg">
      <button @click="togglePanel" class="flex justify-end space-x-2" :class="{ closeBtn: isOpen }">
        <span
          class="icon -ml-6 rounded-full border border-white/5 bg-[#091937] px-1 py-0 lg:-mt-1 lg:px-3 lg:pb-1 lg:text-2xl"
          v-text="iconState"
        />
        <span class="uppercase" v-if="!isOpen">Items</span>
      </button>
    </div>
    <master-categories @loadCategory="loadPanelCategory" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, ComputedRef } from 'vue';
import MasterCategories from '@/components/local/UI/Interface/Inventory/MasterCategories.vue';

export default defineComponent({
  components: { MasterCategories },
  emits: ['openPanel', 'closePanel', 'loadCategory'],
  setup(props, { emit }) {
    const isOpen = ref(false);
    const loadPanelCategory = (id: number) => {
      emit('openPanel');
      setTimeout(() => emit('loadCategory', id), 1000);
      isOpen.value = true;
    };
    const togglePanel = () => {
      emit(!isOpen.value ? 'openPanel' : 'closePanel');
      isOpen.value = !isOpen.value;

      if (isOpen.value) {
        loadPanelCategory(0);
      }
    };
    const iconState = computed<string>(() => (isOpen.value ? 'x' : '+'));
    return { isOpen, iconState, togglePanel, loadPanelCategory };
  },
});
</script>
