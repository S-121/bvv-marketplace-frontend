import { defineStore } from 'pinia';

export interface State {
  items: any;
}

export const useRealEstateStore = defineStore({
  id: 'real-estate',
  state: () => ({
    items: [],
  }),
  getters: {},
  actions: {},
});
