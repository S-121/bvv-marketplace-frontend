<template>
  <b-col col="12" lg="4" class="mt-s">
    <div class="sidebar-area">
      <div class="donnot-miss-widget">
        <div class="who-we-contant">
          <div class="filers-list">
            <base-tab filter="  Crypto Art" img="img/icons/f1.png" />
            <h4 class="fadeInUp" data-wow-delay="0.3s">Floyd Mayweather Jr.</h4>
          </div>
        </div>

        <info-item
          v-for="info in information"
          :key="info"
          :price="info.price"
          :name="info.name"
          :owner="info.owner"
          :total="info.total"
          :date="info.date"
          :size="info.size"
          :logo="info.logo"
          :collection="info.collection"
        />
        <highest-bid
          v-for="bid in highestBid"
          :key="bid"
          :price="bid.price"
          :name="bid.name"
          :total="bid.total"
          :img="bid.img"
          :logo="bid.logo"
        />
        <base-button route="/" mode="btn more-btn open-popup-link width-100 mt-30">
          Purchase Now
        </base-button>
      </div>
    </div>
  </b-col>
</template>

<script>
import BaseTab from '@/components/local/Sections/Detail/BaseTab.vue';
import HighestBid from '@/components/local/Sections/Detail/HighBid.vue';
import InfoItem from '@/components/local/Sections/Detail/InfoItem.vue';

export default {
  components: {
    BaseTab,
    HighestBid,
    InfoItem,
  },
  computed: {
    information() {
      return this.$store.getters.itemInformation;
    },
    highestBid() {
      return this.$store.getters.highestBid;
    },
  },
};
</script>
