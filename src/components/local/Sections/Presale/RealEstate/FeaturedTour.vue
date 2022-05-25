<template>
  <b-section id="featuredTour" class="hero-section">
    <div class="relative">
      <div class="wrap pt-10 md:pt-20">
        <b-container class="container">
          <div class="pb-24 md:flex">
            <div class="space-y-4 px-4 text-center md:px-0 md:pl-5 md:text-left">
              <h5
                class="text font-saint text-[27px] font-light text-skin-featured md:text-3xl md:font-normal"
              >
                {{ mainHeading }}
              </h5>
              <h5
                class="font-poppin text-[27px] font-semibold leading-tight text-skin-base md:text-5xl md:font-normal"
              >
                Join our constant evolving Metaverse.<br />Be the first - Be part of the future!
              </h5>

              <div
                class="px-2 text-left font-semibold text-skin-muted md:max-w-md md:space-y-6 md:px-0 md:font-normal"
              >
                <p class="my-5 font-poppins text-[16px]">
                  Lot of facilities, direct access to the 3D golf course and to the SPA.
                </p>
                <p class="my-5 font-poppins text-[16px]">
                  Complete your experience with our 3D realistic Avatar service.
                </p>
                <p class="my-5 font-poppins text-[16px]">sit amet, adipisicing elit.</p>
              </div>
              <div
                class="flex items-center justify-around py-10 font-semibold md:max-w-xl md:font-normal"
              >
                <div class="flex flex-col items-center space-y-2">
                  <img
                    class="h-20"
                    src="@/assets/img/presale/real-estate/avatar-icon.webp"
                    alt=""
                  />
                  <p class="font-poppins text-[14px] text-skin-featured">3D Avatar</p>
                </div>
                <div class="flex flex-col items-center space-y-2">
                  <img class="h-20" src="@/assets/img/presale/real-estate/spa-icon.webp" alt="" />
                  <p class="font-poppins text-[14px] text-skin-featured">Virtual SPA</p>
                </div>
                <div class="flex flex-col items-center space-y-2">
                  <img class="h-20" src="@/assets/img/presale/real-estate/golf-icon.webp" alt="" />
                  <p class="font-poppins text-[14px] text-skin-featured">3D Golf</p>
                </div>
              </div>
              <p
                class="px-2 text-left font-poppins text-xl text-[15px] font-semibold text-skin-muted md:max-w-md md:px-0"
              >
                Lorem Ipsum Own blockchain virtual founders....
              </p>
            </div>
            <div class="mt-6 px-10 md:px-0">
              <img class="w-[40rem]" src="@/assets/img/presale/real-estate/Ellipse-1.webp" alt="" />
            </div>
          </div>
          <div class="z-1000 absolute left-0 -bottom-6 w-full">
            <base-button
              id="tourBtn"
              mode="border-2 border-skin-color btn w-48 md:w-60 mx-auto block text-center rounded-full border-skin-color bg-skin-button-featured px-3 py-[12px] text-skin-base hover:bg-black hover:text-skin-base font-semibold md:font-normal"
            >
              <span class="hidden md:block">Metaverse Tour</span>
              <span class="text-[13px] md:hidden">JOIN NOW!</span>
            </base-button>
          </div>
        </b-container>
      </div>
    </div>
    <div class="">
      <img
        src="@/assets/img/presale/real-estate/section-bg-large.webp"
        alt=""
        class="h-80 object-cover md:h-auto"
      />
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
