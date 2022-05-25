<template>
  <b-section id="featuredInfo" class="relative bg-white/5">
    <div class="wrap pt-6 md:pt-20">
      <b-container class="container mx-auto px-4 md:px-10">
        <div class="flex flex-col gap-6 pb-24 lg:flex-row lg:justify-around">
          <div class="relative">
            <h2
              class="bg-gradient-to-r from-skin-text-start to-skin-text-end bg-clip-text font-header text-2xl text-transparent"
            >
              {{ mainHeading }}
            </h2>
            <ul class="mt-12 space-y-4 text-xl">
              <li>
                <span
                  class="inline-block w-6 rounded-full bg-[#7FD71B] text-center text-base text-black"
                  v-text="1"
                />
                Plant trees and the insects will come
              </li>
              <li>
                <span
                  class="inline-block w-6 rounded-full bg-[#7FD71B] text-center text-base text-black"
                  v-text="2"
                />
                With insects, birds will appear.
              </li>
              <li>
                <span
                  class="inline-block w-6 rounded-full bg-[#7FD71B] text-center text-base text-black"
                  v-text="3"
                />
                The birds bring digested seeds that begin the undergrowth.
              </li>
              <li>
                <span
                  class="inline-block w-6 rounded-full bg-[#7FD71B] text-center text-base text-black"
                  v-text="4"
                />
                The ecosystem starts naturally replenishing itself!
              </li>
            </ul>
            <div class="space-y-4 py-6">
              <p class="leading-tight">
                While this may sound simple, planting and maintaining trees can be very costly and
                labor intensive.
              </p>
              <p class="leading-tight">Traditionally, this requires A LOT of water.</p>
              <p class="leading-tight">
                In addition to this, trees planted in unfavorable conditions usually have a very low
                survival rate.
              </p>
            </div>
          </div>
          <div class="featured-image flex flex-row-reverse">
            <img src="@/assets/img/presale/groasis/think-green.webp" class="w-full lg:w-3/5" />
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
