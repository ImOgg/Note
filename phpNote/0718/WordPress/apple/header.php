<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <title><?php
            if (is_home()) {
                bloginfo('name');
                echo ' - ';
                bloginfo('description');
            } else {
                wp_title(' - ', true, 'right');
                bloginfo('name');
            } ?>
    </title>
    <?php wp_head(); ?>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="<?php
                bloginfo('template_directory') ?>/style.css" rel="stylesheet" />
</head>

<body>

<nav>
    <?php wp_nav_menu( array( 'theme_location' =>'primary-menu' ) ); ?>
    <!-- 放選單的方法就是把 primary-menu換成要放的那個選單的名字就好-->
</nav>