<template>
  <router-link :to="{ name: 'itemDetails' }">
    <h4>{{ title }}</h4>
  </router-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
