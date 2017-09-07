/**
 * @file
 *  All Configuration for department.
 */
(function($) {
  Drupal.behaviors.blog_slick_config = {
    attach: function (context, settings) {
      $(".view-views-blogs .view-content", context).slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
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
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 361,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true
          }
        }
      ]
      });
    }
  }
})(jQuery);
