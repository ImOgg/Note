<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset');?>" />
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
</head>
<body>