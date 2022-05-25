<template>
  <component :is="tag" :class="[cols]">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    col: {
      type: String,
    },
    md: {
      type: String,
    },
    lg: {
      type: String,
    },
    sm: {
      type: String,
    },
  },
  computed: {
    cols() {
      return {
        [`col-${this.col}`]: !!this.col,
        [`col-lg-${this.lg}`]: !!this.lg,
        [`col-md-${this.md}`]: !!this.md,
        [`col-sm-${this.sm}`]: !!this.sm,
      };
    },
  },
};
</script>
