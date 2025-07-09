'use strict';
import { sidebar } from './elements/sidebarsticky';
import { slickJq } from './elements/custom-slick';
import { uiAccordion } from './elements/accordion';

document.addEventListener('DOMContentLoaded', function () {
  slickJq.init();
  uiAccordion.init();
});
window.onload = function () {
  sidebar.init();
};
