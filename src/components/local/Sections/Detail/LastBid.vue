<template>
  <div class="author-item">
    <div class="author-img ms-0">
      <img :src="`/src/assets/${logo}`" width="40" alt="" />
    </div>
    <div class="author-info">
      <p>
        by <span class="w-text"> {{ name }}</span>
      </p>
      <p>
        Bid by
        <span class="w-text"> {{ price }}</span>
      </p>
    </div>
    <div class="bid-price">
      <p>{{ total }}</p>
      <p><fa :icon="['fa', 'clock']" class="mr-5p" />{{ time }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
      required: true,
    },
    bid: {
      type: String,
      default: '',
      required: false,
    },
    price: {
      type: String,
      default: '',
      required: true,
    },
    time: {
      type: String,
      default: '',
      required: true,
    },
    logo: {
      type: String,
      default: '',
      required: true,
    },
    total: {
      type: String,
      default: '',
      required: false,
    },
  },
};
</script>
