<template>
  <b-col col="12" md="6" lg="3">
    <!-- Content -->
    <div class="service_single_content collection-item">
      <!-- Icon -->
      <div class="collection_icon">
        <img :src="`/src/assets/${logo}`" alt="" />
      </div>
      <span class="aut-info">
        <img :src="`/src/assets/${img}`" width="50" alt="" />
      </span>
      <div class="collection_info text-center">
        <h6>{{ authorName }}</h6>
        <p>{{ info }}</p>
        <base-button route="/profile" mode="more-btn mt-15"> Follow </base-button>
      </div>
    </div>
  </b-col>
</template>

<script lang="ts">
// Added typescript support
export default {
  props: ['authorName', 'info', 'logo', 'img'],
};
</script>
