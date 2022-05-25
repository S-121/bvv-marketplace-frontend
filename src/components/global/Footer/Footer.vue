<template>
  <footer class="main-footer bg-black/10 text-center">
    <div class="widgets-section padding-top-small padding-bottom-small">
      <div class="container mx-auto">
        <div class="clearfix lg:flex">
          <!--Footer Column-->
          <div class="footer-column flex-1">
            <about-us />
          </div>
          <!--End Footer Column-->

          <!--Footer Column-->
          <div class="footer-column flex-1">
            <contact-us />
          </div>
          <!--End Footer Column-->

          <!--Footer Column-->
          <div class="footer-column flex-1">
            <newsletter />
          </div>
          <!--End Footer Column-->
        </div>
      </div>
    </div>

    <!--Footer Bottom-->
    <div class="footer-bottom bg-skin-start">
      <footer-bar />
    </div>
  </footer>
</template>

<script lang="ts">
// Added typescript support
import AboutUs from '@/components/global/Footer/AboutUs.vue';
import ContactUs from '@/components/global/Footer/ContactUs.vue';
import Newsletter from '@/components/global/Footer/Newsletter.vue';
import FooterBar from '@/components/global/Footer/FooterBar.vue';

export default {
  components: {
    AboutUs,
    ContactUs,
    Newsletter,
    FooterBar,
  },
};
</script>
