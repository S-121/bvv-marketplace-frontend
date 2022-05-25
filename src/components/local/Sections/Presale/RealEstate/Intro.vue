<template>
  <b-section id="realEstateIntro" class="hero-section moving section-padding">
    <div class="intro-bg relative">
      <div
        class="absolute bottom-0 w-full bg-[#0D1527]/70 px-5 pt-5 pb-10 text-center md:mx-auto md:py-20"
      >
        <h5 class="font-saint text-[27px] font-light text-skin-featured md:text-5xl md:font-normal">
          {{ subHeading }}
        </h5>
        <h2
          class="w px-5 font-header text-[22px] font-black uppercase tracking-tight text-skin-base md:text-5xl"
        >
          {{ mainHeading }}
        </h2>
      </div>

      <div class="absolute -bottom-8 z-10 w-full">
        <router-link
          :to="{ route: 'realEstate' }"
          class="btn mx-auto block w-fit rounded-full border-2 border-skin-color bg-skin-button-featured px-2 py-[10px] text-center text-[13px] font-semibold text-skin-base hover:bg-black hover:text-skin-base md:w-72 md:px-4 md:py-[20px] md:text-2xl"
        >
          Discover Presale
        </router-link>
      </div>
    </div>

    <!-- Hero Content -->
    <HeroContent />
  </b-section>
</template>

<script lang="ts">
import HeroContent from './HeroContent.vue';

// Added typescript support
export default {
  props: {
    mainHeading: {
      type: String,
      required: true,
    },
    subHeading: {
      type: String,
      required: false,
    },
  },
  setup() {
      return {};
  },
  components: { HeroContent }
};
</script>
