<template>
  <model-viewer
    id="showcaseModelViewer"
    :environment-image="assets.environmentImage"
    :poster="assets.poster"
    :skybox-image="assets.skyboxImage"
    :src="assets.default.model"
    ar
    ar-modes="webxr scene-viewer quick-look"
    camera-controls
    class="poster-overlay h-96 md:h-screen w-full"
    enable-pan
    exposure="0.95"
    interpolation-decay="200"
    oncontextmenu="return false;"
    shadow-intensity="1"
  >
    <div class="hidden bg-gray-800/20 md:block">
      <div class="container mx-auto flex items-center">
        <div>
          <div class="flex items-center">
            <div class="h-8 w-8">
              <img src="/src/assets/img/icons/bitcoin.png" alt="" />
            </div>
            <div class="pl-2">
              <div class="text-sm uppercase">Credits</div>
              <div class="text-xs text-orange-300">$1.233</div>
            </div>
          </div>
        </div>
        <div class="py-4 md:mx-auto md:w-full">
          <h3 class="special-head font-header text-lg md:text-5xl">
            <span
              class="bg-gradient-to-r from-skin-text-start to-skin-text-end bg-clip-text text-transparent"
            >
              EXCLUSIVE PRESALE
            </span>
          </h3>
          <h4 class="special-head text-xs text-white md:text-2xl">
            Your unique 3D Avatar | Metaverse ready
          </h4>
        </div>
        <div class="shrink-0">
          <div class="flex flex-row-reverse items-center">
            <div class="h-10 w-10 rounded-full border-2 border-red-500 p-1">
              <img src="/src/assets/img/icons/add-to-cart.png" alt="" />
            </div>
            <div class="pr-2 text-right">
              <div class="text-sm uppercase text-red-500">8 Items</div>
              <div class="text-xs text-orange-300">$1.233</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div slot="poster" class="opacity-80">
      <div class="poster-overlay fixed inset-0 z-[2000] flex bg-black/50">
        <Fa icon="spinner" size="6x" class="fa-spin m-auto" />
      </div>
    </div>
    <button
      class="hidden"
      slot="ar-button"
      style="
        background-color: white;
        border-radius: 4px;
        border: none;
        z-index: 1000;
        color: #000;
        padding: 5px 10px;
        position: absolute;
        top: 10px;
        right: 10px;
      "
    >
      👋 Activate AR
    </button>
    <div id="ar-prompt" slot="ar-button">
      <img src="https://modelviewer.dev/shared-assets/icons/hand.png" />
    </div>
  </model-viewer>
</template>

<script lang="ts">
// Added typescript support
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  props: {
    assets: {
      type: Object,
      required: true,
    },
  },
  setup() {
    onMounted(() => {
      const modelViewer: any = document.querySelector('#showcaseModelViewer');
      modelViewer.exposure = 0.7;
    });
  },
});
</script>

<style>
model-viewer#showcaseModelViewer {
  --poster-color: transparent;
}
.poster-overlay {
  background-size: 100% 100%;
  background-image: url('/models/futuristic_stand_avatars.webp');
}
</style>
