import { computed, ref, shallowRef, Ref, onMounted, onUnmounted } from 'vue';

export default function withCarousel() {
  return {
    // carousel settings
    settings: {
      itemsToShow: 1,
      wrapAround: true,
    },
    // breakpoints are mobile first
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 4,
        snapAlign: 'start',
      },
    },
  };
}
