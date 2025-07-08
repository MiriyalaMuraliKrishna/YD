const header = jQuery("header.site-header");
const headerHeight = header.height();
const onScroll = () => {
  const scroll = window.scrollY || 0;
  scroll >= headerHeight
    ? header.addClass("sticky-header")
    : header.removeClass("sticky-header");
};
jQuery(window).on("load", onScroll());
jQuery(window).on("scroll", onScroll);

jQuery(document).ready(function () {
  if (jQuery(window).width() >= 768 && jQuery(window).width() <= 1023) {
    jQuery(".humburger-btn").on("click", function (event) {
      event.preventDefault();
      jQuery(this).toggleClass("open");
      jQuery("ul.main-menu").toggleClass("open");
      jQuery(".header-overlay").toggleClass("open");
      jQuery(".h-mobile-overlay").toggleClass("open");
    });
  }
  if (jQuery(window).width() <= 767) {
    jQuery(".humburger-btn").on("click", function (event) {
      event.preventDefault();
      jQuery(this).toggleClass("open");
      jQuery(".header-right").toggleClass("open");
      jQuery(".header-overlay").toggleClass("open");
      jQuery(".h-mobile-overlay").toggleClass("open");
    });
  }

  jQuery(".quick-links-dropdown").on("click", function (event) {
    event.preventDefault();
    jQuery(this).toggleClass("open");
    jQuery("ul.quick-links").slideToggle(500);
  });

  jQuery("ul.quick-links > li > a").on("click", function () {
    jQuery("ul.quick-links").slideUp(500);
    jQuery(".quick-links-dropdown").removeClass("open");
  });

  if (jQuery(window).width() <= 767) {
    jQuery(".yd-difference-dropdown").on("click", function (event) {
      event.preventDefault();
      jQuery(this).toggleClass("open");
      jQuery("ul.yd-difference-links").slideToggle(500);
    });

    jQuery("ul.yd-difference-links > li > a").on("click", function () {
      jQuery("ul.yd-difference-links").slideUp(500);
      jQuery(".yd-difference-dropdown").removeClass("open");
    });
  }
});
