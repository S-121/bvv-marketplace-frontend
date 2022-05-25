<template>
  <div class="owner-info">
    <img :src="`/src/assets/${logo}`" width="40" alt="" />
    <router-link to="/profile">
      <h3>{{ '@' + username }}</h3>
    </router-link>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    logo: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  setup(props: { logo: any }) {
    // console.info(props.logo);
  },
};
</script>
