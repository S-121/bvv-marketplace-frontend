<template>
  <base-input search="true" />
  <filters />
  <widget-title
    data-aos="fade-up"
    data-aos-duration="1100"
    title="Subscribe"
    data-aos-once="true"
    data-aos-offset="0"
  />
  <base-input form="mail" />
</template>

<script>
import BaseInput from '@/components/local/UI/Form/BaseInput.vue';
import Filters from '@/components/local/Sections/Activity/Filters.vue';
import WidgetTitle from '@/components/helper/WidgetTitle.vue';

export default {
  components: {
    BaseInput,
    Filters,
    WidgetTitle,
  },
};
</script>
