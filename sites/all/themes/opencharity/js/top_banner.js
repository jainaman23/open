/**
 * Top Banner js.
 */
(function($) {
  Drupal.behaviors.top_banner = {
    attach: function (context, settings) {
      if (settings.opencharity.lenth != 0) {
        $image_path = settings.opencharity.topbanner;
        $("#block-bean-top-banner").css("background-image", "url(" + $image_path + ")");
      }
    }
  }
})(jQuery);
