<template>
  <div class="service_single_content collection-item">
    <!-- Icon -->
    <div class="collection_icon">
      <img src="@/assets/img/art-work/profile-header.jpg" class="center-block" alt="" />
    </div>
    <span class="aut-info">
      <img src="@/assets/img/authors/2.png" width="50" alt="" />
    </span>
    <div class="collection_info text-center">
      <h6>Morgan Wright</h6>
      <p class="w-text mr-5p">
        Creative NFTs Designer
        <img src="@/assets/img/art-work/fire.png" width="20" alt="" />
      </p>
      <p class="mt-15">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos distinctio labore.
      </p>

      <base-input search="true" value="Xjo03s-osi6732..." icon="copy" />

      <ul class="social-links mt-15">
        <social-box font="fab" social="facebook-f" />
        <social-box font="fab" social="twitter" />
        <social-box font="fab" social="google-plus-g" />
        <social-box font="fab" social="linkedin-in" />
        <social-box font="fab" social="instagram" />
      </ul>

      <base-button route="/profile" mode="more-btn mt-15"> Follow </base-button>
    </div>
  </div>
</template>

<script lang="ts">
// Added typescript support
import SocialBox from '@/components/helper/SocialBox.vue';
import BaseInput from '@/components/local/UI/Form/BaseInput.vue';

export default {
  components: {
    SocialBox,
    BaseInput,
  },
};
</script>
