<template>
  <li>
    <div class="timelineDot" />
    <div class="timelineDate">
      <p><fa :icon="['fa', 'calendar']" class="mr-5p" />{{ day }}</p>
      <p><fa :icon="['fa', 'clock']" class="mr-5p" />{{ time }}</p>
    </div>
    <div class="timelineWork">
      <h6>{{ work }}</h6>
      <span
        >{{ action }}
        <router-link to="/profile">{{ by + ' ' }} </router-link>
        <span class="w-text"> {{ moreDetails }}</span></span
      >
    </div>
  </li>
</template>
<script>
export default {
  props: {
    day: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    work: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    moreDetails: {
      type: String,
      required: false,
      default: '',
    },
    by: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>
