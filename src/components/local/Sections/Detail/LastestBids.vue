<template>
  <h4 class="mb-15">Latest Bids</h4>
  <div class="highest-bid bid-item">
    <last-bid
      v-for="bid in lastBids"
      :key="bid"
      :name="bid.name"
      :price="bid.price"
      :total="bid.total"
      :time="bid.laterTime"
      :logo="bid.logo"
    />
  </div>
</template>

<script>
import LastBid from './LastBid.vue';

export default {
  components: {
    LastBid,
  },
  computed: {
    lastBids() {
      return this.$store.getters.LastBids;
    },
  },
};
</script>
