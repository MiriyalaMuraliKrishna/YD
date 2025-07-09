import jQuery from 'jquery';
import 'slick-carousel';
export let slickJq = {
  init() {
    jQuery('.features-carousel-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: false,
      speed: 1000,
      dots: false,
      arrows: true,
      variableWidth: true,
      draggable: true,
      touchThreshold: 200,
      swipeToSlide: true,
      adaptiveHeight: true,
      prevArrow:
        '<button type="button" aria-label="previous" aria-disabled="false" tabindex="0" class="slick-arrow slick-prev flex flex-center radius-50"><span class="slick-arrows slick-prev-arrow fa-regular fa-chevron-right"></span></button>',
      nextArrow:
        '<button type="button" aria-label="next" aria-disabled="false" tabindex="0" class="slick-arrow slick-next flex flex-center radius-50"><span class="slick-arrows slick-next-arrow fa-regular fa-chevron-right"></span></button>',
      responsive: [
        {
          breakpoint: 1359,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    });

    const $ainav = jQuery('.who-benefit-slider');
    const $aiprogressBar = jQuery('.who-slick-progress');
    const $aiprogressBarLabel = $aiprogressBar.find('span');
    let firstslidecalc = (1 / $ainav.children().length) * 100;
    $aiprogressBarLabel.css({
      width: `${firstslidecalc}%`,
    });
    jQuery(window).on('resize load', function () {
      $aiprogressBarLabel.css({ width: `${firstslidecalc}%` });
    });
    $ainav.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      let calc = (nextSlide / (slick.slideCount - 1)) * 100;
      $aiprogressBarLabel.css({
        width: `${calc}%`,
      });
    });

    jQuery('.who-benefit-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      speed: 1000,
      dots: false,
      arrows: true,
      variableWidth: true,
      draggable: true,
      touchThreshold: 200,
      swipeToSlide: true,
      prevArrow:
        '<button type="button" aria-label="previous" aria-disabled="false" tabindex="0" class="slick-arrow slick-prev flex flex-center radius-50"><span class="slick-arrows slick-prev-arrow fa-regular fa-chevron-right"></span></button>',
      nextArrow:
        '<button type="button" aria-label="next" aria-disabled="false" tabindex="0" class="slick-arrow slick-next flex flex-center radius-50"><span class="slick-arrows slick-next-arrow fa-regular fa-chevron-right"></span></button>',
      responsive: [
        {
          breakpoint: 1359,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    });

    jQuery('.news-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: false,
      speed: 1000,
      dots: false,
      arrows: false,
      variableWidth: true,
      draggable: true,
      touchThreshold: 200,
      swipeToSlide: true,
      prevArrow:
        '<button type="button" aria-label="previous" aria-disabled="false" tabindex="0" class="slick-arrow slick-prev flex flex-center radius-50"><span class="slick-arrows slick-prev-arrow fa-regular fa-chevron-right"></span></button>',
      nextArrow:
        '<button type="button" aria-label="next" aria-disabled="false" tabindex="0" class="slick-arrow slick-next flex flex-center radius-50"><span class="slick-arrows slick-next-arrow fa-regular fa-chevron-right"></span></button>',
      responsive: [
        {
          breakpoint: 1359,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            centerMode: true,
            centerPadding: '32px',
          },
        },
      ],
    });

    const $tinav = jQuery('.testimonial-carousel-slider');
    const $tiprogressBar = jQuery('.testimonial-slick-progress');
    const $tiprogressBarLabel = $tiprogressBar.find('span');
    let secondslidecalc = (1 / $tinav.children().length) * 100;
    $tiprogressBarLabel.css({
      width: `${secondslidecalc}%`,
    });
    jQuery(window).on('resize load', function () {
      $tiprogressBarLabel.css({ width: `${secondslidecalc}%` });
    });
    $tinav.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      let calc = (nextSlide / (slick.slideCount - 1)) * 100;
      $tiprogressBarLabel.css({
        width: `${calc}%`,
      });
    });

    jQuery('.testimonial-carousel-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      speed: 1000,
      dots: false,
      arrows: true,
      variableWidth: true,
      draggable: true,
      touchThreshold: 200,
      swipeToSlide: true,
      prevArrow:
        '<button type="button" aria-label="previous" aria-disabled="false" tabindex="0" class="slick-arrow slick-prev flex flex-center radius-50"><span class="slick-arrows slick-prev-arrow fa-regular fa-chevron-right"></span></button>',
      nextArrow:
        '<button type="button" aria-label="next" aria-disabled="false" tabindex="0" class="slick-arrow slick-next flex flex-center radius-50"><span class="slick-arrows slick-next-arrow fa-regular fa-chevron-right"></span></button>',
      responsive: [
        {
          breakpoint: 1359,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    });

    jQuery('.featured-post-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: false,
      speed: 1000,
      dots: false,
      arrows: false,
      variableWidth: true,
      draggable: true,
      touchThreshold: 200,
      swipeToSlide: true,
      prevArrow:
        '<button type="button" aria-label="previous" aria-disabled="false" tabindex="0" class="slick-arrow slick-prev flex flex-center radius-50"><span class="slick-arrows slick-prev-arrow fa-regular fa-chevron-right"></span></button>',
      nextArrow:
        '<button type="button" aria-label="next" aria-disabled="false" tabindex="0" class="slick-arrow slick-next flex flex-center radius-50"><span class="slick-arrows slick-next-arrow fa-regular fa-chevron-right"></span></button>',
      responsive: [
        {
          breakpoint: 1359,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            centerMode: true,
            centerPadding: '32px',
          },
        },
      ],
    });
  },
};
