<template>
  <nav
    id="banner"
    class="fixed-top bg-gradient-to-r from-skin-start via-skin-start to-skin-end shadow-md"
  >
    <div class="container mx-auto flex items-center justify-between px-6">
      <!-- Toggle/collapsible Button -->
      <button
        class="navbar_icon rounded-md px-1 py-0.5 focus:shadow-none md:hidden"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar"
        id="showMenu"
      >
        <span class="anicons-icon text-2xl text-[#ffffff]">C</span>
      </button>

      <!-- Brand -->
      <brand-logo />

      <!-- Navbar links -->
      <div id="collapsibleNavbar" class="hidden md:block">
        <ul class="flex space-x-4">
          <li
            v-for="({ name, route, children }, index) in navItems"
            :key="index"
            :class="{ dropdown: children }"
            class="nav-item"
          >
            <router-link v-if="!children" class="nav-link" v-text="name" :to="{ name: route }" />
            <template v-else>
              <div class="dropdown relative">
                <router-link class="nav-link" role="button" v-text="name" to="" />
                <div
                  class="dropdown-menu absolute top-0 right-0 z-50 mt-6 hidden w-48 overflow-hidden rounded-lg bg-white text-gray-700"
                >
                  <div class="flex flex-col">
                    <router-link
                      v-for="({ name, route }, index) in children"
                      :key="index"
                      class="dropdown-item px-4 py-2 hover:bg-gray-300"
                      :to="{ name: route }"
                      v-text="name"
                    />
                  </div>
                </div>
              </div>
            </template>
          </li>
        </ul>
      </div>

      <!-- Wallet -->
      <connect-wallet />
    </div>
  </nav>
</template>

<script lang="ts">
// Added typescript support
import { defineComponent, onMounted } from 'vue';
import useNav from '@/composables/nav';
import BrandLogo from '@/components/global/Header/BrandLogo.vue';
import ConnectWallet from '@/components/global/Header/ConnectWallet.vue';

export default defineComponent({
  components: { BrandLogo, ConnectWallet },
  setup() {
    const { collapse, whenScroll, navItems } = useNav();

    onMounted(() => {
      window.addEventListener('scroll', whenScroll);
      collapse();
    });

    return {
      navItems,
    };
  },
});
</script>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
  z-index: 9999;
}

.navbar_icon {
  background-color: var(--color-button-featured);
}
</style>
