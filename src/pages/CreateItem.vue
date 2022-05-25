<template>
  <base-header main-heading="Create">Create Item</base-header>
  <section class="blog-area section-padding-100">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-3">
          <profile-card />
        </div>
        <create-section />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
// Added typescript support
import CreateSection from '@/components/local/Sections/Create/CreateSection.vue';
import ProfileCard from '@/components/local/Sections/Profile/ProfileCard.vue';

export default {
  components: { CreateSection, ProfileCard },
};
</script>
