<template>
  <div class="relative">
    <div class="bg-[url('@/assets/img/bvv/bvv-marketplace-intro-bg.png')] bg-cover top-[95px] md:!bg-cover">
      <div class="py-4 md:mx-auto md:w-1/3 md:!pt-16">
        <h3 class="special-head font-header text-2xl md:text-5xl text-white">
          {{ mainHeading }}
        </h3>
      </div>
    </div>

    <div class="bg-[url('@/assets/img/bvv/bvv-marketplace-nft-bg.png')] md:bg-[url('@/assets/img/bvv/bvv-marketplace-nft-bg-desktop.png')] bg-contain bg-no-repeat md:bg-cover h-52 md:h-[28rem] relative">
      <div class="absolute bottom-0 right-4">
        <img
          alt="Blockchain Valley Virtual"
          class="m-auto w-72 md:w-[35vw] 2xl:w-[40vw] 4xl:w-[50vw] 5xl:w-[37vw]"
          src="@/assets/img/bvv/bvv-marketplace-intro-niko.png"
        />
      </div>
    </div>

    <!--
    @todo Replace with S3 video path
    <div class="video-wrap">
      <video id="introVideo" loop muted autoplay class="fullscreen-bg__video" width="100%">
        <source src="https://blockchainvalleyvirtual.com/videos/bvv-marketplace-intro-cut.mp4" type="video/mp4">
      </video>
    </div>-->

    <!-- onclick="document.getElementById('introVideo').currentTime = 0;document.getElementById('introVideo').muted = false" -->
    <div class="absolute -bottom-3 z-10 w-full">
      <base-button
        id="exploreBtn"
        mode="text-skin-base text-skin-invert hover:text-skin-base mx-auto block w-36 md:w-72 rounded-md border-2 border-skin-color bg-skin-button-featured font-semibold py-1 text-md md:text-xl text-center hover:bg-black"
      >
        Explore Now
      </base-button>
    </div>
  </div>

  <!-- Hero Content -->
  <div class="hero-section-content mx-2 mt-8 text-center md:mt-12">
    <h1 class="mx-2 text-xl md:text-[2rem] md:leading-none">
      The Best Place to Collect, <br />Buy and Sell Awesome NFTs
    </h1>
    <p
      class="m-2 text-sm leading-tight text-[#545488] md:!mx-auto md:!my-4 md:w-[35vw] md:text-xl"
    >
      Check out Top Sellers of the month and our Hot Collections
    </p>
  </div>
</template>

<script lang="ts">
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
};
</script>
