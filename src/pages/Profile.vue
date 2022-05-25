<template>
  <base-header main-heading="Author Profile">Profile</base-header>
  <b-section class="blog-area section-padding-100">
    <b-container>
      <b-row>
        <b-col col="12" lg="3">
          <profile-card />
        </b-col>
        <b-col col="12" md="9">
          <tabs-component />
        </b-col>
      </b-row>
    </b-container>
  </b-section>
</template>

<script lang="ts">
// Added typescript support
import TabsComponent from '@/components/local/Sections/Profile/TabsComponent.vue';
import ProfileCard from '@/components/local/Sections/Profile/ProfileCard.vue';

export default {
  components: { TabsComponent, ProfileCard },
};
</script>
