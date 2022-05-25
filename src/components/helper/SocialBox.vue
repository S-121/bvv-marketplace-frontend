<template>
  <li class="social-links">
    <a href="#">
      <span>
        <fa :icon="[font, social]" />
      </span>
    </a>
  </li>
</template>

<script lang="ts">
// Added typescript support
export default {
  props: ['font', 'social'],
};
</script>
