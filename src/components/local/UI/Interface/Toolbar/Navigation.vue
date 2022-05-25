<template>
  <div
    class="relative left-0 z-[2000] mx-4 flex space-x-4 text-xs lg:absolute lg:left-10 lg:text-sm"
  >
    <button
      v-if="walletPubKey"
      @click="switchNavItem('my-items')"
      class="grow -skew-x-6 border py-3 px-4 font-semibold uppercase opacity-50 lg:px-6"
      :class="{
        'border-[#E63963] bg-[#091937]/60 font-bold text-[#E63963] !opacity-100':
          activeItem === 'my-items',
      }"
    >
      My items
    </button>
    <button
      @click="switchNavItem('marketplace')"
      class="-skew-x-6 border py-3 px-6 font-semibold uppercase opacity-50"
      :class="{
        'border-[#E63963] bg-[#091937]/60 font-bold text-[#E63963] !opacity-100':
          activeItem === 'marketplace',
      }"
    >
      <span>BVV</span> Marketplace
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import useWalletAuth from '@/composables/wallet-auth';

export default defineComponent({
  emits: ['loadSection'],
  setup(props, { emit }) {
    const { walletPubKey } = useWalletAuth();

    const activeItem = ref('marketplace');
    const switchNavItem = (section: string) => {
      activeItem.value = section;
      emit('loadSection', section);
    };
    return {
      activeItem,
      switchNavItem,
      walletPubKey,
    };
  },
});
</script>
