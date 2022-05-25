<template>
  <div class="relative">
    <wrap-model-viewer :assets="assets" />
    <left-menu class="md:ml-80" />
    <interface />
    <!--    <accessories :assets="assets" />-->
    <camera-views :assets="assets" />
  </div>
</template>

<script lang="ts">
// Added typescript support
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Accessories from '@/components/local/UI/Scene/Accessories.vue';
import CameraViews from '@/components/local/UI/Scene/CameraViews.vue';
import WrapModelViewer from '@/components/local/UI/Scene/ModelViewer.vue';
import LeftMenu from '@/components/local/UI/Scene/LeftMenu.vue';
import Interface from '@/components/local/UI/Interface/Interface.vue';

export default defineComponent({
  components: {
    Accessories,
    CameraViews,
    WrapModelViewer,
    LeftMenu,
    Interface,
  },
  setup() {
    const route = useRoute();

    onMounted(() => {
      const modelViewer: any = document.querySelector('#showcaseModelViewer');
      modelViewer.exposure = 0.7;
    });

    // @todo Load this from the API

    let assetsJson = null;
    if (route.params.itemId === '2') {
      assetsJson = {
        assets: {
          environmentImage: '/models/pillars_4k.hdr',
          poster: '/models/futuristic_stand_avatars.webp',
          skyboxImage: null,
          default: {
            thumb: '/img/presale/avatars/default-female-accessories.png',
            model: '/models/bvv-female-v2.glb',
          },
          party: {
            thumb: '/img/presale/avatars/party-female-accessories.png',
            model: '/models/bvv-girl-party.glb',
          },
          cameraViews: {
            head: {
              thumb: '/img/presale/avatars/avatar-head-view.svg',
              cameraTarget: '0m 150m 0m',
              cameraOrbit: '0deg 80deg 0m',
            },
            fullBody: {
              thumb: '/img/presale/avatars/avatar-full-body-view.svg',
              cameraTarget: '0m 80m 0m',
              cameraOrbit: '0deg 75deg 10m',
            },
          },
        },
      };
    } else if (route.params.itemId === '1') {
      assetsJson = {
        assets: {
          environmentImage: '/models/pillars_4k.hdr',
          poster: '/models/futuristic_stand_avatars.webp',
          skyboxImage: '/models/futuristic_stand_avatars.webp',
          default: {
            thumb: '/img/presale/avatars/male/default-accessories.png',
            model: '/models/bvv-male-v1.glb',
          },
          party: {
            thumb: '/img/presale/avatars/male/party-accessories.png',
            model: '/models/bvv-male-party.glb',
          },
          cameraViews: {
            head: {
              thumb: '/img/presale/avatars/male/avatar-head-view.png',
              cameraTarget: '0m 145m -15m',
              cameraOrbit: '0deg 80deg 10m',
            },
            fullBody: {
              thumb: '/img/presale/avatars/male/avatar-full-body-view.png',
              cameraTarget: '0m 130m 80m',
              cameraOrbit: '0deg 75deg 10m',
            },
          },
        },
      };
    }
    return assetsJson;
  },
});
</script>
