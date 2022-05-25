<template>
  <div class="pointer-events-auto absolute top-10 flex lg:relative lg:top-0 lg:w-full">
    <inventory :is-ready="isReady" :category="categoryId" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Inventory from '@/components/local/UI/Interface/Inventory.vue';

export default defineComponent({
  components: { Inventory },
  props: { categoryId: Number, isReady: Boolean },
  setup(props, { emit }) {},
});
</script>
