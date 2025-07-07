(() => {
  const __h = jQuery("header").height();
  const __ele = jQuery(".sticky-widget");
  //   let jQuery(".services-banner-section").next().addClass("target-sec");

  __ele.sticksy({ topSpacing: __h, listen: true });
  const callback = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      jQuery(".services-banner-section").addClass("ha");
    } else {
      jQuery(".services-banner-section").removeClass("ha");
    }
  };
  const __observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0,
    rootMargin: "0px",
  });
  __observer.observe(document.querySelector(".services-banner-section"));
})();
