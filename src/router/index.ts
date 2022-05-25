import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// @todo Define all the application routes
import Home from '@/pages/Home.vue';
import LogIn from '@/pages/auth/Login.vue';
import SignUp from '@/pages/auth/Signup.vue';
import Profile from '@/pages/Profile.vue';
import Authors from '@/pages/Authors.vue';
import ContactUs from '@/pages/Contact.vue';
import Activity from '@/pages/Activity.vue';
import CreateItem from '@/pages/CreateItem.vue';
import ItemDetails from '@/pages/ItemDetails.vue';
import Explore from '@/pages/Explore.vue';
import NotFound from '@/pages/NotFound.vue';
import Presale from '@/pages/presale/Index.vue';
import Avatars from '@/pages/presale/Avatars.vue';
import RealEstate from '@/pages/presale/RealEstate.vue';
import Groasis from '@/pages/presale/Groasis.vue';

const routes: any = [
  { path: '/', redirect: '/home' },
  { name: 'home', path: '/home', component: Home },
  {
    path: '/explore',
    component: Explore,
    children: [
      {
        name: 'exploreCollections',
        path: 'collections/:collection?',
        component: Explore,
      },
      {
        name: 'exploreNfts',
        path: 'nfts/:categoryId?',
        component: Explore,
      },
    ],
  },
  {
    path: '/presale',
    component: Presale,
    children: [
      {
        name: 'avatars',
        path: 'avatars/:itemId?',
        component: Avatars,
        meta: {
          theme: 'theme-avatars',
          logo: '/img/presale/avatars/logo.svg',
        },
      },
      {
        name: 'real-estate',
        path: 'real-estate/:itemId?',
        component: RealEstate,
        meta: {
          theme: 'theme-real-estate',
          logo: '/img/presale/real-estate/logo.svg',
        },
      },
      {
        name: 'groasis',
        path: 'groasis/:itemId?',
        component: Groasis,
        meta: {
          theme: 'theme-groasis',
          logo: '/img/presale/groasis/logo.svg',
        },
      },
    ],
  },
  { name: 'createItem', path: '/create', component: CreateItem },
  { name: 'contactUs', path: '/contact', component: ContactUs },
  { name: 'signup', path: '/signup', component: SignUp },
  { name: 'login', path: '/login', component: LogIn },
  { name: 'profile', path: '/profile', component: Profile },
  { name: 'authors', path: '/authors', component: Authors },
  { name: 'activity', path: '/Activity', component: Activity },
  { name: 'itemDetails', path: '/details', component: ItemDetails },
  { path: '/:notfound(.*)', component: NotFound, meta: { NotFound: true } },
];

const router = createRouter({
  // @ts-ignore
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: 'history',
  // @ts-ignore
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
  routes,
});

router.beforeEach((_, _2, next) => {
  setTimeout(() => {
    window.scrollTo(0, 0);
    next();
  }, 10);
});

export default router;
