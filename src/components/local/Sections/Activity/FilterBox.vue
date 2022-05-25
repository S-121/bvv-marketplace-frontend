<template>
  <div class="filers-list">
    <base-tab img="img/icons/f1.png" filter="Art" />
    <base-tab img="img/icons/f5.png" filter="Virtual Worlds" />
    <base-tab img="img/icons/f2.png" filter="Purchasses" />
    <base-tab img="img/icons/f3.png" filter="NFT Gifts" />
    <base-tab img="img/icons/f4.png" filter="Collectibles" />
    <base-tab img="img/icons/f6.png" filter="Gifts" />
    <base-tab img="img/icons/f7.png" filter="Trading Cards" />
  </div>
</template>
<script>
import BaseTab from '@/components/local/Sections/Detail/BaseTab.vue';

export default {
  components: {
    BaseTab,
  },
};
</script>
