<template>
  <b-section id="avatars" class="hero-section moving section-padding">
    <div class="intro-bg lg:!bg-cover">
      <div class="promo-section py-4 lg:mx-auto lg:w-full lg:!pt-16">
        <h3 class="special-head font-header text-5xl">
          <span
            class="bg-gradient-to-r from-skin-text-start to-skin-text-end bg-clip-text text-transparent"
          >
            {{ mainHeading }}
          </span>
        </h3>
        <h4 class="special-head text-2xl text-white">
          {{ subHeading }}
        </h4>
      </div>

      <!-- Hero Content -->
      <div class="hero-section-content mx-2 mt-32 mb-16 text-center lg:mt-52"></div>

      <!-- onclick="document.getElementById('introVideo').currentTime = 0;document.getElementById('introVideo').muted = false" -->
      <div class="absolute -bottom-6 z-10 w-full">
        <base-button
          id="exploreBtn"
          class="btn mx-auto block w-72 rounded-full border-2 border-skin-color bg-skin-button-featured px-4 py-[20px] text-center text-xl text-skin-base hover:bg-black hover:text-skin-base"
        >
          Watch Video
        </base-button>
      </div>
    </div>

    <!-- Hero Content -->
    <div class="hero-section-content block-pattern pb-32 pt-60 text-center">
      <h1 class="font-header text-4xl font-extrabold">
        <span
          class="bg-gradient-to-r from-skin-text-start to-skin-text-end bg-clip-text text-transparent"
        >
          NFT YOURSELF
        </span>
      </h1>
      <ul class="my-10 space-y-4 text-2xl">
        <li><span class="text-skin-featured">✔</span> Customized avatar of yourself</li>
        <li><span class="text-skin-featured">✔</span> Every month 1 free virtual concert</li>
        <li><span class="text-skin-featured">✔</span> Every month 1 free skin for your avatar</li>
        <li><span class="text-skin-featured">✔</span> Free gadgets and more</li>
      </ul>
      <h3 class="text-2xl uppercase">Only 1000 pieces</h3>
    </div>
  </b-section>
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
