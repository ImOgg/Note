<?php
    if (post_password_required())
    return;
?>


<!-- 留言的 -->
<h3 class="comment-title">
    <?php comments_number('沒有留言', '留言(1)', '留言(%)' );?>
</h3>
<?php if (have_comments()) : ?>
<ol class="comment-list">
    <?php wp_list_comments('type=comment&callback=displaycomments'); ?>
</ol>
<div class="pagenavi">
    <?php paginate_comments_links('prev_text=Prev Comments&next_text=Next Comments');?>
</div>
<?php else : ?>
<?php if (comments_open()) : ?>
<p>本文沒有留言</p>
<?php else : ?>
<p class="nocomments">本文不開放留言</p>
<?php endif; ?>
<?php endif; ?>


<?php comment_form(); ?>