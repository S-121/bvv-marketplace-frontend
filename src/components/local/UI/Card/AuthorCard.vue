<template>
  <div class="author-img">
    <img class="w-[70px] rounded-full md:w-[200px]" :src="author.imageUrl" :alt="author.name" />
  </div>
  <div
    class="author-info absolute -bottom-8 text-[10px] leading-tight md:-bottom-12 md:text-[17px]"
  >
    <router-link to="#">
      <h5 class="author-name">
        {{ author.name }}
      </h5>
    </router-link>
    <div class="author-earn mb-0 text-[#545488]">
      {{ author.rating }}
    </div>
  </div>
</template>

<script lang="ts">
// Added typescript support
export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
};
</script>
