<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Authenticity Dance Company</title>

    <!-- Bootstrap Core CSS -->
    <link href="<?php echo get_template_directory_uri() . '/vendor/bootstrap/css/bootstrap.min.css'; ?>" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="<?php echo get_template_directory_uri() . '/vendor/font-awesome/css/font-awesome.min.css'; ?>" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css">
    <link href="<?php echo get_template_directory_uri() . '/vendor/simple-line-icons/css/simple-line-icons.css'; ?>" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="<?php echo get_template_directory_uri() . '/style.min.css'; ?>" rel="stylesheet">

  </head>

  <body id="home">
    <!-- Navigation -->
    <a class="menu-toggle rounded" href="#">
      <i class="fa fa-bars"></i>
    </a>
    <nav id="sidebar-wrapper">
      <?php wp_nav_menu( array('menu' => 'primary','container'=> '','items_wrap'=>'<ul class="sidebar-nav">%3$s</ul>')); ?>
    </nav>

    <!-- Header -->
    <header class="masthead d-flex">
      <div class="container text-center my-auto">
      </div>
      <div class="overlay"></div>
    </header>