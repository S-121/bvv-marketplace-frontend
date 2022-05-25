import { createApp, App as Application } from 'vue';
import { createPinia } from 'pinia';
import '@google/model-viewer';

import SolanaWallets from 'solana-wallets-vue';

import VueCollapsiblePanel from '@dafcoe/vue-collapsible-panel';
// import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css';

// You can either import the default styles or create your own.
import 'solana-wallets-vue/styles.css';

// eslint-disable-next-line import/no-extraneous-dependencies
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

import {
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';

import App from './App.vue';
import router from '@/router';

import { assets } from '@/assets';
import { components, registerComponents } from '@/components';

declare const Modernizr: typeof import('modernizr');
window.Modernizr = Modernizr;

const walletOptions = {
  wallets: [
    new PhantomWalletAdapter(),
    new SlopeWalletAdapter(),
    new SolflareWalletAdapter({ network: WalletAdapterNetwork.Devnet }),
  ],
  autoConnect: true,
};

// Initialises app
const app: Application = createApp(App);
registerComponents(app, assets);

app.use(router);
app.use(createPinia());
app.use(SolanaWallets, walletOptions);
app.use(VueCollapsiblePanel).mount('#app');
