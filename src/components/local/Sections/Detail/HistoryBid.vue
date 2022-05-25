<template>
  <h4 class="mb-15 mt-30">History</h4>
  <div class="highest-bid bid-item">
    <div class="author-item mb-0">
      <div class="author-img ml-0">
        <img :src="`/src/assets/${historyBid.logo}`" width="40" alt="" />
      </div>
      <div class="author-info">
        <p>
          Listed by <span class="w-text"> {{ historyBid.name }}</span>
        </p>
        <p>
          Price <span class="w-text mr-15"> {{ historyBid.price }}</span
          ><span><fa :icon="['fa', 'clock']" class="mr-5p" />{{ historyBid.laterTime }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    historyBid() {
      return this.$store.getters.LastBids['1'];
    },
  },
};
</script>
