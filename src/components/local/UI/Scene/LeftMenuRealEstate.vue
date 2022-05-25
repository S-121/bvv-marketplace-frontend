<template>
  <div class="mt-5 lg:mt-20 absolute top-0 left-0 w-auto duration-1000 ease-in-out sm:top-4 sm:left-4 z-[2000] md:left-10 md:top-48 lg:block">
    <div class="relative flex items-center justify-end rounded-r-full rounded-l-md bg-gray-800/40 px-2">
      <div class="px-2 text-right" :class="{ 'hidden': !isOpen }">
        <div class="text-sm lg:text-md font-normal uppercase">Welcome in the</div>
        <p class="text-skin-border-color">{{ assets[selected].title }}</p>
        <div class="text-xs lg:text-sm">Change the villa type ></div>
      </div>

      <template v-if="!isOpen">
        <div class="absolute -right-1 top-0 lg:top-8 z-[2000] text-sm">
          <button @click="togglePanel" class="flex justify-end space-x-2">
            <span
              class="icon rounded-full border border-white/5 font-bold bg-[#091937] p-0.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>
        </div>
      </template>

      <template v-if="isOpen">
        <div class="absolute -right-3 top-5 lg:top-8 z-[2000] text-sm">
          <button @click="togglePanel" class="flex justify-end space-x-2">
            <span
              class="icon rounded-full border border-white/5 font-bold bg-[#091937] p-0.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </button>
        </div>

        <div class="absolute -top-4 right-6 lg:right-8 z-[2000] text-sm">
          <button @click="prev" class="flex justify-end space-x-2">
            <span
              class="icon -ml-6 rounded-full border border-white/5 font-bold bg-[#091937] p-0.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </span>
          </button>
        </div>

        <div class="absolute -bottom-4 right-6 lg:right-8 z-[2000] text-sm">
          <button @click="next" class="flex justify-end space-x-2">
            <span
              class="icon -ml-6 rounded-full border border-white/5 font-bold bg-[#091937] p-0.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
        </div>
      </template>

      <div @click.prevent="togglePanel" class="h-14 w-14 lg:w-20 lg:h-20 cursor-pointer shrink-0 overflow-hidden rounded-full border-2 relative">
        <img
          class="w-full h-full"
          :src="`/src/assets/real-estate/bg/${assets[selected].mobileBGImage}`"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import Slider from '@vueform/slider';

export default defineComponent({
  components: { Slider },
  props: {
    assets: Array,
    selected: Number
  },
  emits: ['changeAsset'],
  setup(props, { emit }) {
    let slider = ref(20);
    const isOpen = ref(false);

    const togglePanel = () => {
      isOpen.value = !isOpen.value;
    };

    const next = () => {
      if (props.selected === props.assets.length - 1) {
        emit('changeAsset', 0);
      } else {
        emit('changeAsset', props.selected + 1);
      }
    };

    const prev = () => {
      if (props.selected === 0) {
        emit('changeAsset', props.assets.length - 1);
      } else {
        emit('changeAsset', props.selected - 1);
      }
    };

    return { slider, togglePanel, next, prev, isOpen };
  },
});
</script>

<style src="@vueform/slider/themes/default.css"></style>
