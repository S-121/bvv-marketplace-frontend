<template>
  <span class="price-wrap">
    <span class="g-text">Price</span> {{ price }}
    <span class="g-text ml-15">1 of 10</span>
  </span>
</template>

<script>
export default {
  props: {
    price: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
