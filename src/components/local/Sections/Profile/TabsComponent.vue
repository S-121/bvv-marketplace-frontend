<template>
  <div class="dream-projects-menu mb-50">
    <div class="portfolio-menu text-center">
      <button
        :class="[{ active: curr === 'ALL' }, 'btn']"
        data-filter="*"
        @click="setFilter('ALL'), activeBtn()"
      >
        All
      </button>
      <button
        :class="[{ active: curr === 'collectable' }, 'btn']"
        data-filter=".branding"
        @click="setFilter('collectable'), activeBtn()"
      >
        Collectable
      </button>
      <button
        :class="[{ active: curr === 'created' }, 'btn']"
        data-filter=".design"
        @click="setFilter('created'), activeBtn()"
      >
        Created
      </button>
      <button
        :class="[{ active: curr === 'onAction' }, 'btn']"
        data-filter=".development"
        @click="setFilter('onAction'), activeBtn()"
      >
        On Auction
      </button>
    </div>
  </div>
  <b-row>
    <b-container>
      <b-row class="dream-portfolio">
        <transition-group name="list">
          <item
            v-for="(item, i) in newListedItems"
            :key="i"
            class="col-12 col-md-6 col-lg-4 single_gallery_item branding"
            :item-details="item.title"
            :user-name="item.name"
            :price="item.price"
            :pricing="item['Highest Bid']"
            :likes="item.like"
            :clock="item['hour ago']"
            :img="item.imgUrl"
            :logo="item.logo"
            :category="item.category"
            :curr="curr"
          />
        </transition-group>
      </b-row>
      <b-col col="12" lg="12" class="text-center">
        <base-button mode="btn more-btn fadeInUp" data-wow-delay="0.6s" route="/discover">
          Load More
        </base-button>
      </b-col>
    </b-container>
  </b-row>
</template>
<script>
import Item from '@/components/local/Item/Item.vue';

export default {
  components: {
    Item,
  },

  data() {
    return {
      currentFilter: 'ALL',
      isActive: false,
    };
  },
  computed: {
    newListedItems() {
      return this.$store.getters.newListedItemsProfile;
    },
    curr() {
      return this.currentFilter;
    },
    // Data(){
    //     return this.curr
    // }
  },
  mounted() {
    this.filterData();
  },
  methods: {
    setFilter(filter) {
      this.currentFilter = filter;
      this.filterData();
    },
    filterData() {
      if (this.curr === 'ALL') {
        this.data = this.newListedItems;
      } else {
        const convertToObj = JSON.parse(JSON.stringify(this.newListedItems));
        const arrayData = Object.keys(convertToObj).map((key) => ({ [key]: convertToObj[key] }));
        const DataFiltered = arrayData.filter((item, i) => item[`${i + 1}`].category === this.curr);
        const res = {};
        for (const i of DataFiltered) {
          // eslint-disable-next-line prefer-destructuring
          res[Object.keys(i)[0]] = Object.values(i)[0];
        }
        this.data = res;
      }
    },
  },
};
</script>
