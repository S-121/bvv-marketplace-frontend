<template>
  <div class="relative lg:h-screen">
    <div class="relative inset-0 flex bg-black/50 opacity-80">
      <img class="w-full h-full bg-cover" :src="`/src/assets/real-estate/bg/${assets[selected].mobileBGImage}`" alt="">
    </div>
    <!-- <wrap-model-viewer :assets="assets" /> -->
    <!-- @todo You can hide the above model viewer and directly write the markup for the page here -->

    <left-menu-real-estate class="md:ml-56" :assets="assets" :selected="selected" @changeAsset="onChangeAsset" />

    <!-- @todo Currently loads avatar side menu we will change this later apply the styling directly in the interface UI components as this needs updating also for avatars -->
    <div>
      <interface />
    </div>
  </div>
</template>

<script lang="ts">
// Added typescript support
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Accessories from '@/components/local/UI/Scene/Accessories.vue';
import CameraViews from '@/components/local/UI/Scene/CameraViews.vue';
import WrapModelViewer from '@/components/local/UI/Scene/ModelViewer.vue';
import LeftMenuRealEstate from '@/components/local/UI/Scene/LeftMenuRealEstate.vue';
import Interface from '@/components/local/UI/Interface/Interface.vue';

export default defineComponent({
  components: {
    WrapModelViewer,
    LeftMenuRealEstate,
    Interface,
  },
  setup() {
    // const route = useRoute();
    const selected = ref(0);

    onMounted(() => {
      // const modelViewer: any = document.querySelector('#showcaseModelViewer');
      // modelViewer.exposure = 0.7;
    });

    const onChangeAsset = (id: number) => {
      selected.value = id;
    };

    // @todo Load this from the API
    const assets = [
      {
        title: 'Villa type 01',
        thumnail: '',
        mobileBGImage: 'villa-mobile-01.png',
        desktopBGImage: '',
      },
      {
        title: 'Villa type 02',
        thumnail: '',
        mobileBGImage: 'villa-mobile-02.png',
        desktopBGImage: '',
      },
    ];
    // if (route.params.itemId === '12') {
    //   assetsJson = {
    //     assets: {
    //       environmentImage: '/models/pillars_4k.hdr',
    //       poster: '/models/futuristic_stand_avatars.webp',
    //       skyboxImage: null,
    //       default: {
    //         thumb: '/img/presale/avatars/default-female-accessories.png',
    //         model: '/models/bvv-female-v2.glb',
    //       },
    //       party: {
    //         thumb: '/img/presale/avatars/party-female-accessories.png',
    //         model: '/models/bvv-girl-party.glb',
    //       },
    //       cameraViews: {
    //         head: {
    //           thumb: '/img/presale/avatars/avatar-head-view.svg',
    //           cameraTarget: '0m 150m 0m',
    //           cameraOrbit: '0deg 80deg 0m',
    //         },
    //         fullBody: {
    //           thumb: '/img/presale/avatars/avatar-full-body-view.svg',
    //           cameraTarget: '0m 80m 0m',
    //           cameraOrbit: '0deg 75deg 10m',
    //         },
    //       },
    //     },
    //   };
    // } else if (route.params.itemId === '1') {
    //   assetsJson = {
    //     assets: {
    //       environmentImage: '/models/pillars_4k.hdr',
    //       poster: '/models/futuristic_stand_avatars.webp',
    //       skyboxImage: '/models/futuristic_stand_avatars.webp',
    //       default: {
    //         thumb: '/img/presale/avatars/male/default-accessories.png',
    //         model: '/models/bvv-male-v1.glb',
    //       },
    //       party: {
    //         thumb: '/img/presale/avatars/male/party-accessories.png',
    //         model: '/models/bvv-male-party.glb',
    //       },
    //       cameraViews: {
    //         head: {
    //           thumb: '/img/presale/avatars/male/avatar-head-view.png',
    //           cameraTarget: '0m 145m -15m',
    //           cameraOrbit: '0deg 80deg 10m',
    //         },
    //         fullBody: {
    //           thumb: '/img/presale/avatars/male/avatar-full-body-view.png',
    //           cameraTarget: '0m 130m 80m',
    //           cameraOrbit: '0deg 75deg 10m',
    //         },
    //       },
    //     },
    //   };
    // }
    return {
      assets,
      selected,
      onChangeAsset,
    };
  },
});
</script>
