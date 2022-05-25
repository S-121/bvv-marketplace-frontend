<template>
  <StdNotifications :is-connected="isConnected" :is-loading="isLoading" :error="error" />
  <div class="bg-black p-6">
    <a href="#" @click="mintNewMaster" class="block text-center text-white underline">
      Test Mint Master
    </a>
  </div>
</template>

<!--<script lang="ts">-->
<!--import { defineComponent, ref } from 'vue';-->
<!--import solana from '@solana/web3.js';-->
<!--import { NFTMintEditionFromMaster, NFTMintMaster } from '@/solana/nft/common/NFTmint';-->
<!--import useWallet from '@/composables/solana/wallet';-->
<!--import { IMintResult, INFT } from '@/solana/nft/common/helpers/types';-->
<!--import { NFTGet } from '@/solana/nft/common/NFTget';-->
<!--import useError from '@/composables/solana/error';-->
<!--import StdNotifications from '@/components/solana/StdNotifications.vue';-->

<!--export default defineComponent({-->
<!--  components: {-->
<!--    StdNotifications,-->
<!--  },-->
<!--  setup() {-->
<!--    const { isConnected, getWallet } = useWallet();-->
<!--    const { error, clearError, setError, tryConvertToPk } = useError();-->

<!--    const chosenNFTType = ref('master');-->
<!--    const isLoading = ref<boolean>(false);-->
<!--    const mintResult = ref<IMintResult | null>(null);-->
<!--    const newNFT = ref<INFT | null>(null);-->

<!--    const clearPreviousResults = () => {-->
<!--      isLoading.value = false;-->
<!--      mintResult.value = null;-->
<!--      newNFT.value = null;-->
<!--      clearError();-->
<!--    };-->

<!--    const fetchNewNFT = async () => {-->
<!--      // this will keep failing, while the network updates, for a while so keep retrying-->
<!--      try {-->
<!--        [newNFT.value] = await NFTGet({ mint: new solana.PublicKey(mintResult.value!.mint) });-->
<!--      } catch (e) {-->
<!--        await fetchNewNFT();-->
<!--      }-->
<!--    };-->

<!--    // -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; master-->
<!--    const uri = ref<string | null>('https://gateway.pinata.cloud/ipfs/QmYEkC719CNibAF5UPwQWn6Q2vCs1ecJJnBqsypSW2uNtm/advatar/3.json');-->
<!--    const maxSupply = ref<number | null>(null);-->
<!--    const mintNewMaster = async () => {-->
<!--      clearPreviousResults();-->
<!--      isLoading.value = true;-->
<!--      NFTMintMaster(getWallet() as any, uri.value!, maxSupply.value as any)-->
<!--        .then(async (result) => {-->
<!--          alert('Minting Master ...');-->
<!--          mintResult.value = result as IMintResult;-->
<!--          isLoading.value = false;-->
<!--          await fetchNewNFT();-->
<!--        })-->
<!--        .catch((e) => {-->
<!--          setError(e);-->
<!--          isLoading.value = false;-->
<!--        });-->
<!--    };-->

<!--    // -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; print-->
<!--    const masterEditionMint = ref<string | null>(null);-->
<!--    const updateAuthority = ref<string | null>();-->

<!--    const mintNewPrint = async () => {-->
<!--      clearPreviousResults();-->
<!--      isLoading.value = true;-->

<!--      // if PKs don't deserialize, we don't want to call the rest of the function-->
<!--      const masterPk = tryConvertToPk(masterEditionMint.value!);-->
<!--      const updatePk = tryConvertToPk(updateAuthority.value!);-->
<!--      if (error.value) {-->
<!--        return;-->
<!--      }-->

<!--      NFTMintEditionFromMaster(getWallet() as any, masterPk!, updatePk as any)-->
<!--        .then(async (result) => {-->
<!--          mintResult.value = result as IMintResult;-->
<!--          isLoading.value = false;-->
<!--          await fetchNewNFT();-->
<!--        })-->
<!--        .catch((e) => {-->
<!--          setError(e);-->
<!--          isLoading.value = false;-->
<!--        });-->
<!--    };-->

<!--    return {-->
<!--      isConnected,-->
<!--      error,-->
<!--      chosenNFTType,-->
<!--      isLoading,-->
<!--      mintResult,-->
<!--      newNFT,-->
<!--      // master-->
<!--      uri,-->
<!--      maxSupply,-->
<!--      mintNewMaster,-->
<!--      // print-->
<!--      masterEditionMint,-->
<!--      updateAuthority,-->
<!--      mintNewPrint,-->
<!--    };-->
<!--  },-->
<!--});-->
<!--</script>-->
