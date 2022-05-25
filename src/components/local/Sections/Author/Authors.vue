<template>
  <b-section class="section-padding-0-70 clearfix">
    <b-container class="container">
      <section-header center="true">
        <template #main-heading> Our Authors </template>
        <template #sub-heading> Explore Authors </template>
      </section-header>

      <b-row>
        <author-card
          v-for="author in ourAuthors"
          :key="author"
          :img="author.img"
          :author-name="author.authorName"
          :logo="author.logo"
          :info="author.info"
        />
      </b-row>
    </b-container>
  </b-section>
</template>

<script>
// Added typescript support
import AuthorCard from '@/components/helper/AuthorCard.vue';

export default {
  components: {
    AuthorCard,
  },
  computed: {
    ourAuthors() {
      return this.$store.getters.ourAuthors;
    },
  },
};
</script>
