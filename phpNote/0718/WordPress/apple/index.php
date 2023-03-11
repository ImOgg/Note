<?php
get_header(); ?>

<?php while (have_posts()) : the_post(); ?>
    <article class="article-content">
        <h1 class="article-title">
            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
        </h1>

        <div class="article-meta">
            <span><?php the_time('n / j, Y'); ?></span>
            <span> / </span>
            <span><?php the_category(' , '); ?></span>
            <span> / </span>
            <span><?php the_tags('標籤：', ' , ', '{後綴}'); ?></span>
        </div>
        <?php the_content(); ?>
        <div class="clearfix"></div>
    </article>
<?php endwhile; ?>


<?php
get_footer();?>
