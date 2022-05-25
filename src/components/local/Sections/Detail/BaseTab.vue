<template>
  <router-link to="/" class="filter-item">
    <img :src="`/src/assets/${img}`" alt="filter" />{{ filter }}
  </router-link>
</template>
<script>
export default {
  props: ['filter', 'img'],
};
</script>
