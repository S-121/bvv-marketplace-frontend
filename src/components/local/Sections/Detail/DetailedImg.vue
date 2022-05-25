<template>
  <div class="detailed-img">
    <img :src="`/src/assets/${img}`" alt="detailed" />
  </div>
</template>

<script>
export default {
  props: ['img'],
};
</script>
