<template>
  <wrap-model-viewer :assets="assets" />
  <accessories :assets="assets" />
  <camera-views :assets="assets" />
</template>

<script lang="ts">
// Added typescript support
import { defineComponent, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Accessories from '@/components/local/UI/Scene/Accessories.vue';
import CameraViews from '@/components/local/UI/Scene/CameraViews.vue';
import WrapModelViewer from '@/components/local/UI/Scene/ModelViewer.vue';

export default defineComponent({
  components: { Accessories, CameraViews, WrapModelViewer },
  setup() {
    const route = useRoute();

    onMounted(() => {
      const modelViewer: any = document.querySelector('#showcaseModelViewer');
      modelViewer.exposure = 0.5;
    });

    // @todo Load this from the API

    return {
      assets: {
        environmentImage: '/models/HDR_029_Sky_Cloudy_Ref.hdr',
        poster: '/models/pillars.webp',
        skyboxImage: '/models/HDR_029_Sky_Cloudy_Ref.hdr',
        default: {
          thumb: '/img/presale/real-estate/',
          model: '/models/villa-type3-v1.glb',
        },
        party: {
          thumb: '/img/presale/real-estate/',
          model: '/models/villa-type3-v1.glb',
        },
        cameraViews: {
          head: {
            thumb: '/img/presale/avatars/avatar-head-view.png',
            cameraTarget: '20m 0m -20m',
            cameraOrbit: '0deg 60deg 50m',
          },
          fullBody: {
            thumb: '/img/presale/avatars/avatar-full-body-view.png',
            cameraTarget: '0m 100m 80m',
            cameraOrbit: '0deg 75deg 10m',
          },
        },
      },
    };
  },
});
</script>
