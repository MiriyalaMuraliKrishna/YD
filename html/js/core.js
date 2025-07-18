'use strict';
import { iframe } from './elements/iframe';
import { customScript } from './elements/custom-script';
import { ydDifference } from './elements/yd-difference';
import { sidebar } from './elements/sidebarsticky';
import { slickJq } from './elements/custom-slick';
import { uiAccordion } from './elements/accordion';
import { magnificPopup } from './elements/magnificpopup';

document.addEventListener('DOMContentLoaded', function () {
  iframe.init();
  customScript.init();
  ydDifference.init();
  slickJq.init();
  uiAccordion.init();
  magnificPopup.init();
});
window.onload = function () {
  sidebar.init();
};
