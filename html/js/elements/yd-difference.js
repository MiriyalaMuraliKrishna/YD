import $ from 'jquery';
export const ydDifference = {
  init() {
    const $links = $('ul.yd-difference-links > li > a');
    const $firstLink = $links.first();
    const $firstP = $firstLink.find('p');

    $firstLink.addClass('active');
    $firstP.css('maxHeight', $firstP.prop('scrollHeight') + 'px');

    $links.on('click', function (e) {
      e.preventDefault();

      // Remove 'active' class from all
      $links.removeClass('active');
      $links.parent('li').each((_i, li) => {
        $(li).removeClass('transparent');
      });
      $(this).parent('li').prev().addClass('transparent');

      // Collapse all paragraphs
      $('ul.yd-difference-links > li > a > p').css('maxHeight', '0px');

      // Determine target
      let $target = $(e.target);
      if ($target.prop('tagName') === 'SPAN') {
        $target = $target.parent();
      }

      // Activate clicked
      $target.addClass('active');

      // Expand its <p>
      const $p = $target.find('p').eq(0);
      $p.css('maxHeight', $p.prop('scrollHeight') + 'px');

      // Show/hide rows
      const name = $target.data('name');
      $('.yd-difference-row').hide();
      $(`.yd-difference-row[data-value='${name}']`).fadeIn(800);
    });
  },
};
