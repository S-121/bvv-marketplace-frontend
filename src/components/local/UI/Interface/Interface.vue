<template>
  <div class="absolute right-0 top-4 z-[2000] lg:top-32">
    <div
      class="relative z-50 flex rounded-sm before:absolute before:-inset-4 before:-z-10 before:-ml-2 before:bg-black/10 before:shadow-sm before:shadow-white/20 lg:flex-row-reverse before:-skew-x-2"
      :class="{ 'h-screen before:bg-black/60': isReady }"
    >
      <div
        :class="interfaceClassWidth"
        class="pr-4 interface-wrap flex overflow-hidden duration-1000 ease-in-out lg:mt-4 lg:justify-around"
      >
        <interface-toolbar :is-ready="isReady" category-id="0" @loadSection="onLoadSection" />
        <interface-panel :is-ready="isReady" category-id="0" />
        <interface-sidebar
          @openPanel="onPanelOpen"
          @closePanel="onPanelClose"
          @loadCategory="loadPanelCategory"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import InterfaceToolbar from '@/components/local/UI/Interface/Toolbar.vue';
import InterfaceSidebar from '@/components/local/UI/Interface/Sidebar.vue';
import InterfacePanel from '@/components/local/UI/Interface/Panel.vue';

export default defineComponent({
  components: {
    InterfaceToolbar,
    InterfaceSidebar,
    InterfacePanel,
  },
  emits: ['loadSection'],
  setup() {
    const interfaceClassWidth = ref('w-auto lg:w-24');
    const isOpen = ref(false);
    const isReady = ref(false);

    const onPanelClose = () => {
      interfaceClassWidth.value = 'w-auto lg:w-24';
      isOpen.value = false;
      isReady.value = false;
    };

    const onPanelOpen = () => {
      interfaceClassWidth.value = 'ml-0 lg:w-[30vw] lg:ml-10';
      isReady.value = false;
    };

    const loadPanelCategory = (id: number) => {
      isReady.value = true;
    };

    const onLoadSection = (section: string) => {
      console.info(section);
    };

    return {
      interfaceClassWidth,
      onPanelClose,
      onPanelOpen,
      loadPanelCategory,
      onLoadSection,
      isOpen,
      isReady,
    };
  },
});
</script>
