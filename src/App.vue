<template>
  <div :class="theme" class="bg-gradient-to-r from-skin-start via-skin-start to-skin-end">
    <PerspectiveView>
      <template #content>
        <header-component />
        <base-spinner />
        <router-view />
        <scroll-to-top />
        <footer-component />
      </template>

      <template #nav>
        <ul>
          <li
            v-for="({ name, route, children, iconOne, iconTwo }, index) in navItems"
            :key="index"
            :class="{ dropdown: children }"
            class="nav-item"
          >
            <router-link
              v-if="!children"
              class="nav-link"
              :to="{ name: route }"
              @click="closeMenuOne"
            >
              <fa :icon="['far', iconOne]" /> <span class="hover:text-skin-border-color">{{name}}</span>
            </router-link>
            <template v-else>
              <vue-collapsible-panel-group>
                <vue-collapsible-panel :expanded="false">
                  <template #title style="padding: 0;">
                    <router-link to="">
                      <fa :icon="['far', iconOne]" /> {{name}}
                    </router-link>
                  </template>
                  <template #content style="padding: 0;">
                    <router-link
                      v-for="({ name, route }, index) in children"
                      :key="index"
                      class="nav-item"
                      :to="{ name: route }"
                      v-text="name"
                      @click="closeMenuOne"
                    />
                  </template>
                </vue-collapsible-panel>
              </vue-collapsible-panel-group>
            </template>
          </li>
        </ul>
      </template>
    </PerspectiveView>
  </div>
</template>

<script lang="ts">
// Added typescript support
import { defineComponent, provide } from 'vue';
import useTheme from '@/composables/theme';
import useNav from '@/composables/nav';
import onWindowResize from '@/composables/window-resize';
import HeaderComponent from '@/components/global/Header/Header.vue';
import FooterComponent from '@/components/global/Footer/Footer.vue';
import ScrollToTop from '@/components/helper/ScrollToTop.vue';

import '@/assets/css/navigation/vue-collapsible-panel.css';

export default defineComponent({
  components: { HeaderComponent, FooterComponent, ScrollToTop },
  setup() {
    const { theme } = useTheme();
    const { navItems } = useNav();
    const { windowWidth } = onWindowResize();

    // @ts-ignore
    const { solana } = window;
    if (solana?.isPhantom) {
      provide('phantom', solana);
    } else {
      provide('phantom', null);
    }

    function closeMenuOne(e: any) {
      console.log("classList1", e.target.classList.value)
      if(e.target.classList.value.indexOf('nav-link') > -1) {
        document.getElementById('perspective').classList.remove('animate');
      } else {
        return;
      }
    }

    return { theme, windowWidth, navItems, closeMenuOne };
  },
});
</script>

<style scoped>
.dropdown:hover .collapseExample {
  display: block;
}
.float-right {
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  right: 0;
}

/* vue-collapsible-panel */
.vcpg {
  border: none;
}
</style>