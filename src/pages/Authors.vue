<template>
  <base-header main-heading="Authors">Authors</base-header>
  <sellers-section main-heading="Sellers" />
  <our-authors />
</template>

<script lang="ts">
// Added typescript support
import SellersSection from '@/components/local/Sections/Home/TopSellers.vue';
import OurAuthors from '@/components/local/Sections/Author/Authors.vue';

export default {
  components: { SellersSection, OurAuthors },
};
</script>
