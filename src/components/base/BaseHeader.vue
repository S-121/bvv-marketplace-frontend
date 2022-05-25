<template>
  <div class="breadcrumb-area clearfix">
    <!-- breadcrumb content -->
    <div class="breadcrumb-content banner overflow-hidden">
      <div class="h-100 container">
        <div class="row h-100 align-items-center">
          <div class="col-12">
            <nav aria-label="breadcrumb" class="breadcrumb--con text-center">
              <h2
                class="title w-text"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-anchor-placement="top-center"
              >
                {{ mainHeading }}
              </h2>

              <ol
                v-if="isFound"
                class="breadcrumb justify-content-center"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="600"
                data-aos-easing="ease"
                data-aos-anchor-placement="top-center"
              >
                <li class="breadcrumb-item">
                  <base-button>Home</base-button>
                </li>

                <!-- Auctions -->
                <li class="breadcrumb-item active font-semibold" aria-current="page">
                  <slot />
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// Added typescript support
import { defineComponent, onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
  props: ['mainHeading'],
  setup() {
    const router = useRouter();
    const route = useRoute();
    const isFound = ref(true);

    onMounted(() => {
      if (route.meta.NotFound) {
        isFound.value = false;
      }
    });

    return {
      isFound,
    };
  },
});
</script>
