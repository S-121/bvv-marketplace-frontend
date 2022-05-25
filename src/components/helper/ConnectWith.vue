<template>
  <div class="pricing-item v2 flex" @click="connectToWallet(connectWith)">
    <img :src="img" width="30" class="wal-icon" alt="" />
    {{ connectWith }} Wallet
    <!--    {{ connectWith }} Wallet {{ connectWith.trim() === 'Phantom' ? getWalletAddress() : '' }}-->
  </div>
</template>

<script lang="ts">
// Added typescript support
import { computed, defineComponent } from 'vue';

export default defineComponent({
  props: ['img', 'connectWith'],
});
</script>
