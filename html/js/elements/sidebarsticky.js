import 'sticksy';

export let sidebar = {
  init() {
    const __h = document.querySelector('header').getBoundingClientRect().height;
    const __eles = document.querySelectorAll('.sticky-widget');
    const targetele = document.querySelector('.services-banner-section');
    __eles.forEach((ele) => {
      new Sticksy(ele, { topSpacing: __h, listen: true });
    });
    const callback = (entries) => {
      const [entry] = entries;
      if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
        targetele.classList.add('remove-sticky-image');
      } else {
        targetele.classList.remove('remove-sticky-image');
      }
    };
    const __observer = new IntersectionObserver(callback, {
      root: null,
      threshold: 0,
      rootMargin: `-${__h}px 0px 0px 0px`,
    });
    if (targetele) {
      __observer.observe(targetele);
    }
  },
};
