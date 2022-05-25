<template>
  <div
    class="absolute bottom-24 left-2 z-[2000] w-24 text-center md:w-20 lg:bottom-40 lg:left-96 lg:w-20"
  >
    <div class="hidden p-1 text-[10px] font-normal lg:block">Views</div>
    <ul class="flex lg:block lg:space-y-2">
      <li
        @click="headshotView"
        class="w-full bg-black/80 bg-opacity-20 !opacity-100 shadow-[0_0_10px_0px_rgba(0,0,0,0.3)] shadow-fuchsia-400 lg:h-20"
      >
        <img :src="assets.cameraViews.head.thumb" class="m-auto h-full p-2" />
      </li>
      <li
        @click="fullBodyView"
        class="w-full cursor-pointer bg-black opacity-50 hover:animate-pulse hover:opacity-100 lg:h-20"
      >
        <img :src="assets.cameraViews.fullBody.thumb" class="m-auto h-full p-2" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
// Added typescript support
import { defineComponent, onMounted } from 'vue';
import { assetPath } from '@google/model-viewer/lib/test/helpers';

export default defineComponent({
  props: {
    assets: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const headshotView = () => {
      const modelViewer: any = document.querySelector('#showcaseModelViewer');
      modelViewer.cameraTarget = props.assets.cameraViews.head.cameraTarget;
      modelViewer.cameraOrbit = props.assets.cameraViews.head.cameraOrbit;
      // @todo Zoom in slightly without changing the orbit
    };

    const fullBodyView = () => {
      const modelViewer: any = document.querySelector('#showcaseModelViewer');
      modelViewer.cameraTarget = props.assets.cameraViews.fullBody.cameraTarget;
      modelViewer.cameraOrbit = props.assets.cameraViews.fullBody.cameraOrbit;
      // @todo Zoom out completely without changing the orbit with fieldOfView?
    };

    onMounted(() => {
      const modelViewer: any = document.querySelector('#showcaseModelViewer');
      modelViewer.addEventListener('camera-change', (event: any) => {
        // console.info(modelViewer.getCameraOrbit());
      });

      modelViewer.addEventListener('load', (event: any) => {
        headshotView();
      });
    });

    return {
      headshotView,
      fullBodyView,
    };
  },
});
</script>
