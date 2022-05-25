<template>
  <div class="space-x-2 text-xs" v-if="isReady">
    <navigation @loadSection="onLoadSection" />
    <filter-by-brand />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, ComputedRef } from 'vue';
import Navigation from '@/components/local/UI/Interface/Toolbar/Navigation.vue';
import FilterByBrand from '@/components/local/UI/Interface/Toolbar/FilterByBrand.vue';

export default defineComponent({
  components: { Navigation, FilterByBrand },
  props: { categoryId: Number, isReady: Boolean },
  emits: ['loadSection'],
  setup(props, { emit }) {
    const onLoadSection = (section: string) => {
      emit('loadSection', section);
    };
    return { onLoadSection };
  },
});
</script>
