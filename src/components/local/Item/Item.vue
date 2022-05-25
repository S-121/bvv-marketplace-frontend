<template>
  <div class="item-wrap">
    <div class="pricing-item">
      <div class="wrapper">
        <item-owner :logo="logo" :username="userName" />
        <item-image :image="img" />
        <item-title :title="itemDetails" />
        <item-price :price="price" />

        <div>
          <div class="pricing">
            Highest Bid : <span class="ml-15">{{ pricing }}</span>
          </div>

          <div class="admire text-center">
            <div class="adm"><fa :icon="['far', 'clock']" />{{ clock }}</div>
            <div class="adm"><fa :icon="['far', 'heart']" />{{ likes }} Like</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemOwner from '@/components/local/Item/ItemOwner.vue';
import ItemImage from '@/components/local/Item/ItemImage.vue';
import ItemTitle from '@/components/local/Item/ItemTitle.vue';
import ItemPrice from '@/components/local/Item/ItemPrice.vue';

export default {
  components: { ItemOwner, ItemImage, ItemTitle, ItemPrice },
  props: {
    userName: {
      type: String,
      required: true,
      default: '',
    },
    likes: {
      type: Number,
      required: false,
      default: 0,
    },
    price: {
      type: String,
      required: true,
      default: '',
    },
    clock: {
      type: String,
      required: false,
      default: '',
    },
    pricing: {
      type: String,
      required: false,
      default: '',
    },
    itemDetails: {
      type: String,
      required: true,
      default: '',
    },
    img: {
      type: String,
      required: true,
      default: '',
    },
    logo: {
      type: String,
      required: false,
      default: '',
    },
    hours: {
      type: String,
      required: false,
      default: '',
    },
    minutes: {
      type: String,
      required: false,
      default: '',
    },
    seconds: {
      type: String,
      required: false,
      default: '',
    },
    days: {
      type: String,
      required: false,
      default: '',
    },
    deadline: {
      type: String,
      required: false,
    },
  },
};
</script>
