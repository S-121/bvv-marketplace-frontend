<template>
  <div class="col-12 col-lg-8">
    <div class="creator-sec dd-bg">
      <create-item />
      <section-header left="true">
        <template #main-heading> Create New Item </template>

        <template #sub-heading> Create Item </template>
      </section-header>
      <div class="contact_form">
        <form id="main_contact_form" action="#" method="post" novalidate>
          <b-row>
            <b-col col="12">
              <div id="success_fail_info" />
            </b-col>

            <b-col col="12" md="12">
              <p class="w-text">Upload Item File</p>
              <upload-file />
            </b-col>
            <b-col col="12" md="12">
              <base-button value="Item name" name="name" />
            </b-col>
            <b-col col="12" md="12">
              <div class="mb-15">
                <p>Choose item Category</p>
                <only-filter />
              </div>
            </b-col>
            <b-col col="12">
              <base-input tag="textarea" name="Description" value="Item Description" />
            </b-col>
            <b-col col="12" md="12">
              <base-input value="Item Price in ETH" name="Price" />
            </b-col>
            <b-col col="12" md="6">
              <base-input name="Royalties" value="Royalties" />
            </b-col>
            <b-col col="12" md="6">
              <base-input name="Size" value="Size" />
            </b-col>
            <b-col col="12">
              <base-input name="copies" value="Number of copies" />
            </b-col>
            <b-col col="12" class="text-center">
              <base-button mode="more-btn mb-15">
                <button type="submit">CREATE ITEM</button>
              </base-button>
            </b-col>
          </b-row>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// Added typescript support
import CreateItem from '@/components/helper/CreateItem.vue';
import UploadFile from '@/components/local/UI/Form/Uploadfile.vue';
import OnlyFilter from '@/components/local/Sections/Activity/FilterBox.vue';
import BaseInput from '@/components/local/UI/Form/BaseInput.vue';

export default {
  components: {
    CreateItem,
    UploadFile,
    OnlyFilter,
    BaseInput,
  },
};
</script>
