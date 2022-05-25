export default function useNav() {
  const collapse = () => {
    const links = document.querySelectorAll('.dropdown-item , .nav-link:not(.dropdown-toggle)');
    const navbarCollapse: HTMLElement | null = document.querySelector('.navbar-collapse');

    if (navbarCollapse) {
      const linkOnClick = (link: any) =>
        link.addEventListener('click', () => navbarCollapse.classList.remove('show'));
      links.forEach((link) => linkOnClick(link));
    }
  };

  const whenScroll = () => {
    const banner: HTMLElement | null = document.getElementById('banner');
    const method = document.documentElement.scrollTop > 0 ? 'add' : 'remove';
    if (banner) banner.classList[method]('sticky', 'z-[5000]');
  };

  const navItems: Array<any> = [
    { name: 'Home', route: 'home', iconOne: 'check-circle', iconTwo: 'chevron-right' },
    {
      name: 'Explore',
      children: [
        { name: 'Collections', route: 'exploreCollections' },
        { name: 'NFTs', route: 'exploreNfts' },
      ],
      iconOne: 'check-circle',
      iconTwo: 'chevron-right'
    },
    {
      name: 'Presale',
      children: [
        { name: 'Avatars', route: 'avatars' },
        { name: 'Real-estate', route: 'real-estate' },
        { name: 'Groasis', route: 'groasis' },
      ],
      iconOne: 'check-circle',
      iconTwo: 'chevron-right'
    },
    { name: 'Create', route: 'createItem', iconOne: 'check-circle', iconTwo: 'chevron-right'  },
    { name: 'Contact', route: 'contactUs', iconOne: 'check-circle', iconTwo: 'chevron-right'  },
    {
      name: 'Other',
      children: [
        { name: 'Activity', route: 'activity' },
        { name: 'Authors', route: 'authors' },
        { name: 'Item Detail', route: 'itemDetails' },
        { name: 'Login', route: 'login' },
        { name: 'Profile', route: 'profile' },
        { name: 'Signup', route: 'signup' },
      ],
      iconOne: 'check-circle',
      iconTwo: 'chevron-right'
    },
  ];

  return { collapse, whenScroll, navItems };
}
