<template>
  <img :src="`https://${item.image_url}`" class="m-auto h-full" alt="" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: { item: Object },
  emits: ['update:modelValue', 'update:readyState'],
  setup(props, { emit }) {},
});
</script>
