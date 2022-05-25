import { App as Application } from 'vue';

// helper Components
import BaseButton from '@/components/base/BaseButton.vue';
import BaseHeader from '@/components/base/BaseHeader.vue';
import BaseSpinner from '@/components/base/BaseSpinner.vue';
import BContainer from '@/components/grid/BContainer.vue';
import BCol from '@/components/grid/BCol.vue';
import BRow from '@/components/grid/BRow.vue';
import BSection from '@/components/grid/BSection.vue';
import SectionHeader from '@/components/helper/SectionHeader.vue';
import PerspectiveView from '@/components/local/UI/Navigation/PerspectiveView.vue';

export const components = {
  Helpers: {
    BaseButton,
    BaseHeader,
    BaseSpinner,
    SectionHeader,
    BSection,
    BContainer,
    BCol,
    BRow,
    PerspectiveView,
  },
};

export const registerComponents = (app: Application, assets: any) => {
  app.component('Fa', assets.FontAwesomeIcon);
  app.component('BaseButton', components.Helpers.BaseButton);
  app.component('BaseHeader', components.Helpers.BaseHeader);
  app.component('BaseSpinner', components.Helpers.BaseSpinner);
  app.component('SectionHeader', components.Helpers.SectionHeader);
  app.component('BSection', components.Helpers.BSection);
  app.component('BContainer', components.Helpers.BContainer);
  app.component('BCol', components.Helpers.BCol);
  app.component('BRow', components.Helpers.BRow);
  app.component('PerspectiveView', components.Helpers.PerspectiveView);
};
