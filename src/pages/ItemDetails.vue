<template>
  <base-header main-heading="Item">Item Details</base-header>
  <b-section class="section-padding-100">
    <b-container>
      <b-row>
        <banner-img />
        <information />
        <notification-side />
      </b-row>
    </b-container>
  </b-section>
  <your-bid />
  <sellers-section />
  <b-section class="section-padding-0-70 clearfix">
    <collection-section main-heading="Our Top Collections" sub-heading="Our Top Collections" />
  </b-section>
</template>

<script lang="ts">
// Added typescript support
import NotificationSide from '@/components/local/Sections/Detail/NotificationSide.vue';
import Information from '@/components/local/Sections/Detail/Information.vue';
import BannerImg from '@/components/local/Sections/Detail/BannerImg.vue';
import YourBid from '@/components/local/Sections/Detail/YourBid.vue';
import SellersSection from '@/components/local/Sections/Home/TopSellers.vue';
import CollectionSection from '@/components/local/Sections/Home/HotCollections.vue';

export default {
  components: {
    NotificationSide,
    Information,
    BannerImg,
    YourBid,
    SellersSection,
    CollectionSection,
  },
};
</script>
