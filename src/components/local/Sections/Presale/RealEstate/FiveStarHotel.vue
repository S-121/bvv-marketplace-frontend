<template>
  <b-section id="fiveStarHotel" class="hero-section moving section-padding relative">
    <div class="wrap pt-10 md:pt-20">
      <b-container class="container">
        <div class="flex-row-reverse gap-6 pb-24 md:flex">
          <div class="relative md:space-y-4">
            <h5
              class="text-center font-saint text-[27px] font-light text-skin-featured md:text-right md:text-3xl md:font-normal"
            >
              {{ mainHeading }}
            </h5>
            <h5
              class="md:px-auto px-5 text-center font-poppins text-[27px] font-semibold leading-tight md:px-0 md:text-right md:text-5xl md:font-normal"
            >
              Virtual 5 Star Hotel - BG<br />Be the first - Be part of the future!
            </h5>
            <div class="my-5 text-center md:text-right">
              <p
                class="px-5 font-poppins text-[16px] font-semibold leading-normal md:px-0 md:text-2xl md:font-normal"
              >
                <span class="text-skin-muted">Are you ready to be the first to </span>
                <span class="text-skin-muted">monetize on our 5 star virtual hotel in </span>
                <span class="text-skin-border-color">Blockchain Valley Virtual BG ?</span>
              </p>
            </div>
            <div class="md:mb-0">
              <div class="mr-[4rem] flex flex-col items-end space-y-2 sm:mr-[7.5rem] md:mr-20">
                <img
                  class="h-15 mr-2 md:mr-0 md:h-20"
                  src="@/assets/img/presale/real-estate/hotel-icon.webp"
                  alt=""
                />
                <p class="text-sm font-semibold text-skin-featured md:text-lg md:font-normal">
                  5 Star Hotel
                </p>
              </div>
              <div class="mt-10 mr-10 hidden text-right md:block">
                <base-button
                  id="exploreBtn"
                  mode="btn m-0 w-48 uppercase text-sm px-3 py-[12px] rounded-full border-1 border-skin-color text-skin-base hover:bg-black hover:text-skin-base"
                >
                  Discover Now!
                </base-button>
              </div>
            </div>
            <div class="absolute bottom-0 hidden md:block">
              <img src="@/assets/img/presale/real-estate/ellipse-bg.webp" alt="" />
            </div>
          </div>
          <div class="relative z-[2000] mx-6 mt-0 w-3/5 md:ml-0 md:mt-40 md:w-[40rem]">
            <img class="w-[40rem]" src="@/assets/img/presale/real-estate/ellipse-bg2.webp" alt="" />
            <div class="md:left-18 absolute left-8 -bottom-4 md:-bottom-12">
              <img
                class="h-[18rem] md:h-[45rem]"
                src="@/assets/img/presale/real-estate/niko.webp"
                alt=""
              />
            </div>
          </div>
          <div class="relative -mt-40 mr-6 sm:-mt-60 sm:mr-[6rem] md:mr-10 md:hidden">
            <base-button
              id="exploreBtn"
              mode="absolute bg-skin-button-featured btn border-2 border-skin-color m-0 w-[167px] md:w-48 uppercase text-center text-[16px] px-3 py-[12px] right-0 rounded-full border-1 border-skin-color text-skin-base hover:bg-black hover:text-skin-base z-[9999] font-semibold md:font-normal"
            >
              Discover Now!
            </base-button>
          </div>
          <div class="relative mt-48 mr-[3rem] sm:mt-60 md:mr-10 md:hidden">
            <div class="absolute -top-20 right-0 w-2/5">
              <img src="@/assets/img/presale/real-estate/ellipse-bg.webp" alt="" />
            </div>
          </div>
        </div>
      </b-container>
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
