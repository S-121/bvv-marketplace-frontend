import { defineStore } from 'pinia';
import useApiRequest from '@/composables/api-request';

export interface State {
  items: any;
}

export const useItemsStore = defineStore({
  id: 'items',
  state: () => ({
    items: [],
  }),
  getters: {
    getItems: (state: State) => state.items,
    filterByCategory: (state) => (categoryId: number) =>
      state.items.filter((item: any) => item.categoryId === categoryId),
    filterByBrand: (state) => (brandId: number) =>
      state.items.filter((item: any) => item.brandId === brandId),
  },
  actions: {
    async getUsersInventory(userId: number) {
      // const payload: any = await api.user.load(id);
      // this.updateItems(payload);
    },
    async getMarketplaceItems() {
      // const payload = await api.user.load(id);
      // this.updateItems(payload);
    },
    fetchByArtist: (artist: string) => useApiRequest('artist-collections', { artist }),
    fetchByCollection: (collection: string) => useApiRequest('collection-by-name', { collection }),
    fetchByCategory: (categoryId: number) => useApiRequest('items', { categoryId }),
    fetchByTags: (tags: string) => useApiRequest('tags-collections', { tags }),
    fetchItem: (id: number) => useApiRequest(`items/${id}`),
    getItems: (state: State) => state.items,
    setItems: (state: State, items: any) => {
      state.items = items;
    },
    updateItems(payload: any) {
      this.items = payload.items;
    },
  },
});
