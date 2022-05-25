<template>
  <b-section id="groasis">
    <div class="intro-bg relative flex bg-cover shadow md:!bg-cover">
      <div class="inner container mx-auto">
        <b-container class="container relative h-96 items-stretch overflow-hidden md:h-full">
          <img
            src="@/assets/img/presale/groasis/intro-image.webp"
            class="absolute top-0 -right-24 z-[99999] h-full bg-cover lg:right-0"
          />
          <div class="promo-section w-1/2 py-24 px-4 md:py-60 md:px-8">
            <h3
              class="relative bg-gradient-to-r from-skin-text-start to-skin-text-end bg-clip-text font-header text-2xl font-black uppercase leading-6 text-transparent md:text-3xl lg:text-7xl"
            >
              {{ mainHeading }}
            </h3>
            <h5 class="text-md mt-1 w-56 text-white md:mt-6 md:text-lg lg:w-auto lg:text-4xl">
              {{ subHeading }}
            </h5>
          </div>
        </b-container>
      </div>
      <div class="absolute -bottom-5 z-[99999] w-full">
        <base-button
          id="exploreBtn"
          class="text-md mx-auto block w-36 rounded-md border-2 border-skin-color bg-skin-button-featured py-1 text-center font-semibold text-black md:w-72 md:text-xl"
        >
          Explore Now
        </base-button>
      </div>
    </div>

    <!-- Hero Content -->
    <div class="text-center">
      <div class="block-pattern px-8 pt-10 md:pt-32">
        <b-container>
          <h1 class="mx-2 text-lg md:text-3xl lg:text-5xl">ADDRESSING GLOBAL CHALLENGES</h1>
          <b-row class="row align-items-center mt-6 md:mt-12">
            <carousel
              :withNav="false"
              id=""
              :slides="slides"
              :settings="settings"
              :breakpoints="breakpoints"
              class="my-2 h-96"
            >
              <template v-slot="{ slide }">
                <b-col>
                  <div class="w-60">
                    <div class="mx-auto mb-6 h-24 w-24">
                      <img :src="`/src/assets/img/presale/groasis/${slide.image}`" class="" />
                    </div>
                    <div class="header bg-[#2278CE] p-2">{{ slide.heading }}</div>
                    <div class="content h-40 bg-[#090F2B] p-3 text-left">
                      {{ slide.content }}
                    </div>
                  </div>
                </b-col>
              </template>
            </carousel>
          </b-row>
        </b-container>
      </div>
    </div>
  </b-section>
</template>

<script lang="ts">
import Carousel from '@/components/local/UI/Carousel/Carousel.vue';
// Added typescript support
const slides = [
  {
    image: 'circle01.webp',
    heading: '01. RAPID DESERTIFICATION',
    content: 'Caused by climate variations and human activities.',
  },
  {
    image: 'circle02.webp',
    heading: '2. GLOBAL FOOD & WATER SCARCITY',
    content: 'More than 10% of current human population has difficulty accessing food.',
  },
  {
    image: 'circle03.webp',
    heading: '3. CLIMATE CHANGE',
    content: 'Tens of millions of humans were displaced by adverse impacts of climate change',
  },
  {
    image: 'circle04.webp',
    heading: '4. FARMLAND DEGRADATION',
    content: 'Over 75% of all farmable land is degraded.',
  },
];
export default {
  components: { Carousel },
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
    return {
      breakpoints: {
        700: {
          itemsToShow: 2.5,
          snapAlign: 'start',
        },
        1024: {
          itemsToShow: 4,
          snapAlign: 'start',
        },
      },
      settings: {
        itemsToShow: 1.4,
        snapAlign: 'start',
      },
      slides,
    };
  },
};
</script>
