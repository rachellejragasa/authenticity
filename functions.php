<?php

// Register WP Menu
function register_my_menu() {
    register_nav_menu('primary',__( 'Primary menu' ));
}

add_action( 'init', 'register_my_menu' );

// Add class to WP Menu li
function add_classes_on_li($classes, $item, $args) {
    $classes[] = 'sidebar-nav-item';
    return $classes;
  }
  add_filter('nav_menu_css_class','add_classes_on_li',1,3);

  // Add class to WP Menu a
  add_filter( 'nav_menu_link_attributes', function($atts) {
    $atts['class'] = "js-scroll-trigger";
    return $atts;
}, 100, 1 );
?>