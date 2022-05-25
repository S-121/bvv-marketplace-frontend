<template>
  <div v-if="center" class="section-heading text-center">
    <div class="dream-dots justify-content-center fadeInUp" data-wow-delay="0.2s">
      <span>
        <slot name="sub-heading" />
      </span>
    </div>
    <h4 class="fadeInUp my-3 font-header text-3xl font-semibold uppercase" data-wow-delay="0.3s">
      <span class="text-skin-border-color">_</span>
      <span
        class="bg-gradient-to-r from-skin-text-start to-skin-text-end bg-clip-text text-transparent"
      >
        <slot name="main-heading" />
      </span>
    </h4>
  </div>

  <div v-if="left" class="text-center lg:my-4">
    <h4 class="fadeInUp" data-wow-delay="0.3s">
      <span class="text-[#CBFC01]">_</span>
      <span class="gradient-text"><slot name="main-heading" /> </span>
    </h4>
  </div>
</template>

<script lang="ts">
// Added typescript support
export default {
  props: {
    center: {
      default: false,
    },
    clean: {
      default: false,
    },
    left: {
      default: false,
    },
  },
};
</script>
