import { defineStore } from 'pinia';

export interface State {
  items: any;
}

export const useAvatarsStore = defineStore({
  id: 'avatars',
  state: () => ({
    items: [],
  }),
  getters: {},
  actions: {},
});
