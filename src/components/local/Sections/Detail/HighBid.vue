<template>
  <div class="highest-bid">
    <h5 class="w-text mb-15">Highest Bid</h5>
    <div class="admire">
      <div class="adm w-text">
        <img :src="`/src/assets/${img}`" width="30" alt="" class="mr-5p" />{{ name }}
      </div>
      <div class="adm">
        <img :src="`/src/assets/${logo}`" width="30" alt="" class="mr-5p" /><span
          class="bold mr-5p"
          >{{ price }}</span
        ><span class="gray-text"> {{ total }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['img', 'price', 'total', 'name', 'logo'],
};
</script>
