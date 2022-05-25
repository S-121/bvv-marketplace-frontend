import { defineStore } from 'pinia';
import useApiRequest from '@/composables/api-request';

export interface State {
  items: any;
}

export const useBrandsStore = defineStore({
  id: 'brands',
  state: () => ({
    items: [],
  }),
  getters: {
    getItems: (state: State) => state.items,
  },
  actions: {
    getItems: (state: State) => state.items,
    fetchAll: (state?: State): Promise<any> => useApiRequest('brands'),
  },
});
