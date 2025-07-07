(() => {
  const __h = jQuery("header").height();
  const __ele = jQuery(".sticky-widget");
  const nextele = jQuery(".services-banner-section")
    .next()
    .addClass("target-sec");
  const targetele = nextele[0];

  console.log(targetele);

  __ele.sticksy({ topSpacing: __h, listen: true });
  const callback = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      jQuery(".services-banner-section").addClass("remove-sticky-image");
    } else {
      jQuery(".services-banner-section").removeClass("remove-sticky-image");
    }
  };
  const __observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0,
    rootMargin: "0px",
  });
  __observer.observe(targetele);
})();
