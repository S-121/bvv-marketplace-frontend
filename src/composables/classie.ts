export default function useClassie() {
  let hasClass: any;
  let addClass: any;
  let removeClass: any;

  const classReg = (className: string) => new RegExp(`(^|\\s+)${className}(\\s+|$)`);

  const toggleClass = (elem: any, c: any) => {
    const fn = hasClass(elem, c) ? removeClass : addClass;
    fn(elem, c);
  };

  if ('classList' in document.documentElement) {
    hasClass = (elem: any, c: any) => elem.classList.contains(c);
    addClass = (elem: any, c: any) => {
      elem.classList.add(c);
    };
    removeClass = (elem: any, c: any) => {
      elem.classList.remove(c);
    };
  } else {
    hasClass = (elem: any, c: any) => classReg(c).test(elem.className);
    addClass = (elem: any, c: any) => {
      if (!hasClass(elem, c)) {
        elem.className = `${elem.className} ${c}`;
      }
    };
    removeClass = (elem: any, c: any) => {
      elem.className = elem.className.replace(classReg(c), ' ');
    };
  }

  const classie = {
    hasClass,
    addClass,
    removeClass,
    toggleClass,
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass,
  };

  return { classie };
}
