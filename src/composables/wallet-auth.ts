import { useWallet } from 'solana-wallets-vue';
import { computed, ref, watchEffect } from 'vue';

export default function useWalletAuth() {
  const { publicKey } = useWallet();
  const myDataProperty = ref(4);
  const walletPubKey = computed(() =>
    !publicKey.value ? false : publicKey.value.toBase58().slice(0, myDataProperty.value)
  );

  watchEffect(() => {
    if (!publicKey.value) return;
    console.log(publicKey.value, myDataProperty.value, walletPubKey.value);
  });

  return {
    walletPubKey,
  };
}
