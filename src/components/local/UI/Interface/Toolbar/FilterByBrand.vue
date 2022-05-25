<template>
  <div class="right-4 z-[2000] hidden w-80 lg:absolute lg:block">
    <div class="flex">
      <div class="flex -skew-x-3 flex-col justify-center bg-[#091937] px-4 py-2">
        <span class="inline-block text-xs font-normal text-[#E63963]">FILTER BY</span>
        <span class="text-base leading-none">BRAND</span>
      </div>
      <Multiselect
        v-model="selectedBrandId"
        :options="brands"
        :loading="loading"
        class="-skew-x-3"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, UnwrapRef, watchEffect } from 'vue';
import Multiselect from '@vueform/multiselect';
import { useRequest } from 'vue-request';
import { useInventoryStore } from '@/stores/inventory';

type Brand = {
  id: number;
  name: string;
};

export default defineComponent({
  components: { Multiselect },
  setup(props, { emit }) {
    const store = useInventoryStore();
    const { data, loading, error } = useRequest(store.fetchBrands(), {
      formatResult: (data: Array<Brand>) =>
        [{ id: 0, name: 'All' }]
          .concat(data)
          .map((brand: any) => ({ label: brand.name, value: brand.id })),
    });

    const brands: Ref<any> | Ref<{ label: any; value: any }[] | undefined> = data;
    const selectedBrandId: Ref<UnwrapRef<number>> = ref(store.selectedBrandId);
    watchEffect(() => {
      store.setBrands(brands.value);
      store.setSelectedBrandId(selectedBrandId.value);
    });

    return {
      loading,
      error,
      brands,
      selectedBrandId,
    };
  },
});
</script>
