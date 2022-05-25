<template>
  <div class="absolute left-20 top-48 z-[2000] w-40">
    <ul class="space-y-6">
      <li @click="defaultAccessory" class="h-32 w-full w-full cursor-pointer bg-white opacity-100">
        <img :src="assets.default.thumb" class="m-auto h-full" />
      </li>
      <li
        @click="partyAccessory"
        class="h-32 w-full cursor-pointer bg-white opacity-50 hover:animate-pulse hover:opacity-100"
      >
        <img :src="assets.party.thumb" class="m-auto h-full" />
      </li>
      <li
        class="h-32 w-full cursor-pointer bg-white opacity-10 hover:animate-pulse hover:opacity-50"
      ></li>
      <li
        class="h-32 w-full cursor-pointer bg-white opacity-10 hover:animate-pulse hover:opacity-50"
      ></li>
    </ul>
  </div>
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
  setup(props) {
    const defaultAccessory = () => {
      const modelViewer: any = document.querySelector('#showcaseModelViewer');
      modelViewer.src = props.assets.default.model;
    };

    const partyAccessory = () => {
      const modelViewer: any = document.querySelector('#showcaseModelViewer');
      modelViewer.src = props.assets.party.model;
    };

    return {
      defaultAccessory,
      partyAccessory,
    };
  },
});
</script>
