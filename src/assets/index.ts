import 'aos/dist/aos.css';
import '@/assets/css/responsive.css';
import '@/assets/css/tailwind.css';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// Registers font-awesome packs
library.add(fas, far, fab);

export const assets = {
  FontAwesomeIcon,
};
