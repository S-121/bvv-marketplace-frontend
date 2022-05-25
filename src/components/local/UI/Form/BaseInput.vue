<template>
  <div v-if="!search && form != 'mail'" class="group">
    <input v-if="tag == 'input'" id="name0" type="text" :name="name" required="" />
    <textarea v-if="tag == 'textarea'" id="name0" :name="name" required="" />
    <span class="highlight" />
    <span class="bar" />
    <label>{{ value }}</label>
  </div>

  <div
    v-else-if="search"
    class="search-widget-area"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="300"
  >
    <form action="#" method="post">
      <input id="search" type="search" name="search" :value="value" placeholder="Search..." />
      <button type="submit" class="btn">
        <fa :icon="['fa', icon]" />
      </button>
    </form>
  </div>
  <div
    v-if="form == 'mail'"
    class="subscribe-form"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-once="true"
    data-aos-offset="0"
  >
    <form action="#">
      <input id="subs_email" type="email" name="email" placeholder="Your Email" />
      <button type="submit" class="btn mb-0">subscribe</button>
    </form>
  </div>
</template>

<script lang="ts">
// Added typescript support
export default {
  props: {
    search: {
      type: Boolean,
      default: false,
      required: false,
    },
    form: {
      type: String,
      default: '',
      required: false,
    },
    value: {
      type: String,
      default: '',
      required: false,
    },
    icon: {
      type: String,
      default: 'search',
      required: false,
    },
    name: {
      type: String,
      default: '',
      required: false,
    },
    tag: {
      type: String,
      default: 'input',
      required: false,
    },
  },
};
</script>
