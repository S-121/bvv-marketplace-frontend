<template>
  <router-link :to="{ name: 'itemDetails' }">
    <img class="h-[350px] overflow-hidden" :src="`/src/assets/${image}`" alt="" />
  </router-link>
</template>

<script lang="ts">
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
  },
  setup(props: { image: any }) {
    // console.info(props.image);
  },
};
</script>
