import { defineStore } from 'pinia';

export interface State {
  items: any;
}

export const useVirtualCartStore = defineStore({
  id: 'virtual-cart',
  state: () => ({
    items: [],
  }),
  getters: {},
  actions: {},
});
