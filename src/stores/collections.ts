import { defineStore } from 'pinia';
import { useItemsStore } from '@/stores/items';

export interface State {
  items: any;
}

export const useCollectionsStore = defineStore({
  id: 'collections',
  state: () => ({
    items: [],
  }),
  getters: {},
  actions: {
    fetchByArtist(artist: string): Promise<any> {
      const itemsStore = useItemsStore();
      return itemsStore.fetchByArtist(artist);
    },
    fetchByName(name: string): Promise<any> {
      const itemsStore = useItemsStore();
      return itemsStore.fetchByCollection(name);
    },
    fetchCollectionsByTags(tags: any): Promise<any> {
      const itemsStore = useItemsStore();
      return itemsStore.fetchByTags(tags);
    },
  },
});
