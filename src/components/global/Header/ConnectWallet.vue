<template>
  <!--  <base-button-->
  <!--    route="/"-->
  <!--    mode="block p-1 rounded-md sm bg-[#2D1158] shadow-inner shadow-black/20 relative block sm:hidden"-->
  <!--  >-->
  <!--    <span class="absolute -top-2 -right-2 block rounded-full bg-[#CAFA01] px-1 text-xs">2</span>-->
  <!--    <img src="@/assets/img/bvv/wallet-icon.png" alt="Wallet" />-->
  <!--  </base-button>-->
  <!--  <base-button-->
  <!--    @click="connectPhantom"-->
  <!--    class="btn login-btn ml-50 hidden border-skin-color bg-skin-button-accent text-skin-base hover:bg-skin-button-accent-hover hover:text-skin-base sm:block"-->
  <!--  >-->
  <!--    Connect wallet-->
  <!--  </base-button>-->
  <template v-if="!publicWalletAddress">
    <div class="relative block w-[44px] overflow-hidden md:hidden">
      <div class="absolute flex h-[31px] w-[44px] items-center justify-center rounded-md walletButton">
        <img src="@/assets/img/bvv/wallet-icon.png" alt="Wallet" />
      </div>
      <div class="top-0 w-5 opacity-0">
        <wallet-multi-button dark />
      </div>
    </div>
    <div class="hidden md:block">
      <wallet-multi-button dark />
    </div>
  </template>

  <template v-if="publicWalletAddress">
    <div>
      <p class="text-white-mg">
        Welcome to the Solana network, <br />
        <strong>{{ publicWalletAddress }}</strong>
      </p>
    </div>
  </template>

  <template v-if="phantom === null">
    <div class="no-phantom-wallet-container hidden md:block">
      <div>
        <div class="lds-dual-ring"></div>
        <p>Checking ...</p>
      </div>
      <a href="https://phantom.app/" target="_blank">
        You don't have a Phantom wallet ! Get one there !
      </a>
    </div>
  </template>
</template>

<script lang="ts">
// Added typescript support
import { defineComponent, inject, ref } from 'vue';
import { WalletMultiButton } from 'solana-wallets-vue';

// @todo create composable for wallet connect logic
// import useSolanaWallet from '@/composables/solana-wallet';

export default defineComponent({
  components: {
    WalletMultiButton,
  },
  setup() {
    const phantom: any = inject('phantom');
    const publicWalletAddress = ref('');

    const connectPhantom = async () => {
      if (phantom) {
        const response = await phantom.connect();
        publicWalletAddress.value = response.publicKey.toString();
        console.log('Connected with Public Key:', response);
      }
    };

    return {
      phantom,
      publicWalletAddress,
      connectPhantom,
    };
  },
});
</script>
<style>
.walletButton {
  background-color: rgb(255 255 255 / 10%);
}
</style>