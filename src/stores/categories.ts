import { defineStore } from 'pinia';
import useApiRequest from '@/composables/api-request';

export interface State {
  items: any;
}

export const useCategoriesStore = defineStore({
  id: 'categories',
  state: () => ({
    items: [],
  }),
  getters: {
    getItems: (state: State) => state.items,
  },
  actions: {
    fetchByArtist: (artist: string) => useApiRequest('artist-collections', { artist }),
    fetchByType: (type: string, parentId?: number) =>
      useApiRequest('categories-type-parent', { type, parentId }),
    getItems: (state: State) => state.items,
    setItems: (state: State, items: any) => {
      state.items = items;
    },
  },
});
