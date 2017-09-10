<?php

/**
 * Implements template_preprocess_block(&$variables).
 */
function opencharity_preprocess_block(&$variables) {
  // Getting  Banner Image.
  if ($variables['elements']['#block']->delta == 'top-banner') {
    $image = $variables['elements']['bean']['top-banner']['field_member_image']['#items'][0]['uri'];
    $image_path = file_create_url($image);
    $variables['elements']['bean']['top-banner']['field_member_image']['#access'] = FALSE;
    drupal_add_js(array('opencharity' => array('topbanner' => $image_path)), array('type' => 'setting'));
  }
}

/**
 * Implements template_preprocess_entity(&$variables).
 */
function opencharity_preprocess_entity(&$variables) {
  if ($variables['elements']['#entity']->delta == 'top-banner') {
    $variables['content']['field_member_image']['#access'] = FALSE;
  }
}

/**
 * Implements Preprocess Html(&$variables).
 */
function opencharity_preprocess_html(&$variabels) {
  // Fix the viewport and zooming in mobile devices.
  $viewport = array(
   '#tag' => 'meta',
   '#attributes' => array(
     'name' => 'viewport',
     'content' => 'width=device-width, maximum-scale=1, minimum-scale=1, user-scalable=no, initial-scale=1',
   ),
  );
  drupal_add_html_head($viewport, 'viewport');
}

/**
 * Implements Preprocess Html(&$variables).
 */
function opencharity_preprocess_page(&$variabels) {
  $theme_path = drupal_get_path('theme', 'opencharity');

  // Adding Global Fonts Css Files.
  drupal_add_css('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700', array('group' => CSS_SYSTEM, 'every_page' => TRUE));

  // Adding Global Css Files.
  drupal_add_css($theme_path . "/css/base/base.css", array('group' => CSS_DEFAULT, 'every_page' => TRUE));
  drupal_add_css($theme_path . "/css/layout/layout.css", array('group' => CSS_DEFAULT, 'every_page' => TRUE));
  drupal_add_css($theme_path . "/css/state/header.css", array('group' => CSS_DEFAULT, 'every_page' => TRUE));
  drupal_add_css($theme_path . "/css/state/footer.css", array('group' => CSS_DEFAULT, 'every_page' => TRUE));
  drupal_add_js($theme_path . "/js/header.js", array('group' => JS_DEFAULT, 'every_page' => TRUE));
}
