<template>
  <li class="nav-item" role="presentation" :key="`collection_group_${collection.name}`">
    <button
      :id="`pills-${collection.name}-tab`"
      :aria-controls="`pills-${collection.name}`"
      :data-bs-target="`#pills-${collection.name}`"
      aria-selected="true"
      class="nav-link text-skin-muted"
      :class="{ 'active !text-white': index == activeIndex }"
      data-bs-toggle="pill"
      role="tab"
      type="button"
      v-text="collection.name.toUpperCase()"
    ></button>
  </li>
</template>

<script lang="ts">
// Added typescript support
export default {
  props: {
    collection: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    activeIndex: {
      type: Number,
      required: true,
    },
  },
};
</script>
