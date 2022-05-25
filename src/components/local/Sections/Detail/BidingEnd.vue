<template>
  <div class="biding-end">
    <h4 class="mb-15">Biding Ends In :</h4>
    <!-- Countdown  -->
    <div class="circled">
      <div class="simple_timer">
        <count-timer />
      </div>
    </div>
  </div>
</template>
<script>
import CountTimer from '@/components/base/BaseTimer.vue';

export default {
  components: {
    CountTimer,
  },
};
</script>
