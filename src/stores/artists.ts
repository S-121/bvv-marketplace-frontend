import { defineStore } from 'pinia';
import useApiRequest from '@/composables/api-request';
import Data from '@/assets/DummyData/data.json';

export interface State {
  items: any;
}

export const useArtistsStore = defineStore({
  id: 'artists',
  state: () => ({
    allData: Data,
    items: [],
  }),
  getters: {
    topSellers: (state) => state.allData.topSellers,
  },
  actions: {
    fetchTopSellers: () => useApiRequest('artists'),
  },
});
