import { defineStore } from 'pinia';

export interface State {
  items: any;
}

export const useGroasisStore = defineStore({
  id: 'groasis',
  state: () => ({
    items: [],
  }),
  getters: {},
  actions: {},
});
