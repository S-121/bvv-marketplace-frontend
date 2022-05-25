<template>
  <base-header main-heading="Recent Activity">Activity</base-header>
  <b-section class="blog-area section-padding-100">
    <b-container>
      <b-row>
        <timeline-box />
        <b-col col="12" md="3">
          <div class="sidebar-area">
            <filter-side />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-section>
</template>

<script lang="ts">
// Added typescript support
import TimelineBox from '@/components/local/Sections/Activity/TimelineBox.vue';
import FilterSide from '@/components/local/Sections/Activity/FilterSide.vue';

export default {
  components: { TimelineBox, FilterSide },
};
</script>
