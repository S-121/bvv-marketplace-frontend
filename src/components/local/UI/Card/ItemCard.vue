<template>
  <div class="col-12">
    <router-link
      :to="{ name: $route.name, params: { itemId: id } }"
      class="service_single_content collection-item"
    >
      <!-- Icon -->
      <div class="collection_icon">
        <img :src="img" :alt="collectionInfo" class="aspect" />
      </div>
      <div class="collection_info">
        <h6>{{ collectionInfo }}</h6>
        <p>
          Owner : <span class="text-skin-featured">{{ ownerName }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
// Added typescript support
export default {
  props: {
    collectionInfo: {
      default: '',
      type: String,
      required: true,
    },
    ownerName: {
      default: '',
      type: String,
      required: true,
    },
    img: {
      default: '',
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: false,
    },
  },
};
</script>
