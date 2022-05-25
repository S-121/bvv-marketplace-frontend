<template>
  <b-col col="12" lg="3" class="mt-s">
    <lastest-bids />
    <history-bid />
    <biding-end />
  </b-col>
</template>

<script>
import LastestBids from '@/components/local/Sections/Detail/LastestBids.vue';
import HistoryBid from '@/components/local/Sections/Detail/HistoryBid.vue';
import BidingEnd from '@/components/local/Sections/Detail/BidingEnd.vue';

export default {
  components: {
    BidingEnd,
    HistoryBid,
    LastestBids,
  },
};
</script>
