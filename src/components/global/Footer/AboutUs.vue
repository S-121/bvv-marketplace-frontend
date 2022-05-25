<template>
  <div class="footer-widget about-widget">
    <h3 class="has-line-center after:bg-skin-border-color">About Us</h3>
    <div class="widget-content">
      <div class="text">
        At the end of the day, going forward, a new normal that has evolved generation X is on the
        runway heading towards a streamlined cloud solution.
      </div>
      <ul class="social-links">
        <social-box font="fab" social="facebook-f" />
        <social-box font="fab" social="twitter" />

        <social-box font="fab" social="google-plus-g" />
        <social-box font="fab" social="linkedin-in" />
        <social-box font="fab" social="instagram" />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
// Added typescript support
import SocialBox from '@/components/helper/SocialBox.vue';

export default {
  components: {
    SocialBox,
  },
};
</script>
