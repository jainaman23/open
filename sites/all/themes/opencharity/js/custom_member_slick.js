/**
 * @file
 *  All Configuration for department.
 */
(function($) {
  Drupal.behaviors.member_slick_config = {
    attach: function (context, settings) {
      $(".field-name-field-member-image .field-items", context).slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 799,
          settings: {
            slidesToShow: 2,
            arrows: false
          }
        },
        {
          breakpoint: 361,
          settings: {
            slidesToShow: 1,
            arrows: false
          }
        }
      ]
      });
    }
  }
})(jQuery);
