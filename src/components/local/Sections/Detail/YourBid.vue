<template>
  <div id="test-popup" class="white-popup mfp-hide">
    <div class="top-form-header">
      <h4>Place a Bid</h4>
    </div>
    <form id="main_login_form" action="#" method="post" novalidate="">
      <div class="row">
        <b-col col="12" md="12">
          <base-input />
          <p class="g-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas maxime quo magnam,
            rerum odio quia asperiores, voluptatum impedit sit, amet consectetur adipisicing elit.
          </p>
        </b-col>
        <b-col col="12" sm="5" class="text-left">
          <base-button route="/" mode="btn more-btn"> Place Bid </base-button>
        </b-col>
      </div>
    </form>
  </div>
</template>

<script>
import BaseInput from '@/components/local/UI/Form/BaseInput.vue';

export default {
  components: { BaseInput },
};
</script>
