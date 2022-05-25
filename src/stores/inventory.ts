import { defineStore } from 'pinia';
import { useItemsStore } from '@/stores/items';
import { useBrandsStore } from '@/stores/brands';
import { useCategoriesStore } from '@/stores/categories';

export interface State {
  isLoading: boolean;
  mode: string;
  brands: Array<any>;
  categories: Array<any>;
  items: Array<any>;
  selectedBrandId: number;
  selectedCategoryId: number;
}

export const useInventoryStore = defineStore({
  id: 'inventory',
  state: () => ({
    isLoading: false,
    mode: 'marketplace',
    brands: [],
    categories: [],
    items: [],
    selectedBrandId: 0,
    selectedCategoryId: 1,
  }),
  getters: {
    getMode: (state) => state.mode,
    getBrands: (state) => state.brands,
    getCategories: (state) => state.categories,
    getItems: (state) => state.items,
    getSelectedBrandId: (state) => state.selectedBrandId,
    getSelectedCategoryId: (state) => state.selectedCategoryId,

    // getSelectedBrand: (state) => {
    //   const { brands, selectedBrandId } = state;
    //   return brands.find((brand: any) => brand.id === selectedBrandId);
    // },
    getSelectedCategory: (state) => {
      const { categories, selectedCategoryId } = state;
      return categories.find((category: any) => category.id === selectedCategoryId);
    },
    getSelectedBrandItems: (state) => {
      const { items, selectedBrandId } = state;
      return items.filter((item: any) => item.brandId === selectedBrandId);
    },
    getSelectedCategoryItems: (state) => {
      const { items, selectedCategoryId } = state;
      return items.filter((item: any) => item.categoryId === selectedCategoryId);
    },
  },
  actions: {
    changeMode(mode: string) {
      this.mode = mode;
    },
    setSelectedBrandId(id: number) {
      this.selectedBrandId = id;
    },
    setSelectedCategoryId(id: number) {
      this.selectedCategoryId = id;
    },
    setLoading(isLoading: boolean) {
      this.isLoading = isLoading;
    },
    setBrands(brands: any) {
      this.brands = brands;
    },
    fetchBrands(): Promise<any> {
      const brandsStore = useBrandsStore();
      return brandsStore.fetchAll();
    },
    async fetchCategoriesByType(type: string, parentId?: number): Promise<any> {
      const categoriesStore = useCategoriesStore();
      return categoriesStore.fetchByType(type, parentId);
    },
    async fetchItems() {
      this.setLoading(true);
      const itemsStore = useItemsStore();
      const { data } = await itemsStore.getItems(this.mode);
      this.items = data;
      this.setLoading(false);
    },
    async filterItemsByBrand() {
      this.setLoading(true);
      const itemsStore = useItemsStore();
      this.items = itemsStore.filterByBrand(this.selectedBrandId);
      this.setLoading(false);
    },
    async filterItemsByCategory(): Promise<any> {
      const itemsStore = useItemsStore();
      return itemsStore.fetchByCategory(this.selectedCategoryId);
    },
  },
});
