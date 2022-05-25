<template>
  <section-header center="true">
    <template #main-heading>
      {{ mainHeading }}
    </template>
    <template #sub-heading>
      {{ subHeading }}
    </template>
  </section-header>
</template>

<script lang="ts">
// Added typescript support
export default {
  props: {
    mainHeading: {
      type: String,
      required: true,
    },
    subHeading: {
      type: String,
      required: false,
    },
  },
};
</script>
