<?php get_header(); ?>
<div class="content">
    <div class="article">
        <?php while ( have_posts() ) : the_post(); ?>
        <article class="article-content">
            <h1 class="article-title"><?phpthe_title(); ?></h1>
            <?php the_content(); ?>
        </article>
    <?php endwhile; ?>
    </div>
    <div class="sidebar">
        <?php get_sidebar(); ?>
    </div>
</div>
<?php get_footer(); ?>