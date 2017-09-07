/**
 * @file
 *  All Configuration for department.
 */
(function($) {
  Drupal.behaviors.header_menu = {
    attach: function (context, settings) {
      if ($(window).width() < 640) {
        $("header").once("header", function(){
          $join_html = $(this).find(".menu li:last-of-type").html();
          $('<div class="join"></div>').insertAfter(".site-logo");
          $(".join").html($join_html);
          $(this).find(".menu").prepend('<div class="close">x</div>');

          $(this).find(".navbar-toggle").on("click", function(){
            $this = $(this);
            $this.addClass("active");

            $(this).siblings(".region-header").slideDown(function(){
              $(".close").on("click", function(){
                $this.siblings(".region-header").slideUp(function(){
                  $this.removeClass("active");
                });
              });
            });
          });
        });
      }
    }
  }
})(jQuery);
