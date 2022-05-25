<template>
  <router-link :to="route" :class="mode">
    <slot />
  </router-link>
</template>

<script lang="ts">
// Added typescript support
export default {
  props: {
    route: {
      type: String,
      default: '/',
      required: false,
    },
    mode: {
      type: String,
      default: '',
      require: false,
    },
  },
};
</script>
