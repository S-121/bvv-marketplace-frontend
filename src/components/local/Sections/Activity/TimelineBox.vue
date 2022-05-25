<template>
  <b-col col="12" md="9">
    <div class="timelineBox">
      <!-- timeline header -->
      <timeline-header />
      <div class="timelineBody">
        <ul class="timeline">
          <!-- Single Timeline -->
          <single-timeline
            v-for="time in timeLine"
            :key="time"
            :time="time.time"
            :day="time.day"
            :action="time.action"
            :work="time.work"
            :more-details="time.moreDetails"
            :by="time.by"
          />
        </ul>
      </div>
    </div>
  </b-col>
</template>

<script>
import TimelineHeader from '@/components/local/Sections/Activity/TimelineHeader.vue';
import SingleTimeline from '@/components/local/Sections/Activity/SingleTimeline.vue';

export default {
  components: {
    TimelineHeader,
    SingleTimeline,
  },
  computed: {
    timeLine() {
      return this.$store.getters.timeLine;
    },
  },
};
</script>
