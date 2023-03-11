<?php
    register_nav_menus(
        array('primary-menu' => __('{主選單}'),'second-menu' => __('{副選單}'))
    );
?>


<?php
function displaycomments($comment, $args, $depth){
    $GLOBALS['comment'] = $comment;
?>
    <li class="comment-list-box">
        <div class="comment-author">
            <!-- avatar是頭像 -->
            <?php echo get_avatar($comment, 40); ?>
        </div>
        <div class="comment-fn">
            <?php printf(
                __('<span class="fn">%s</span>'),
                get_comment_author_link()
            ) ?>
        </div>
        <div class="comment-meta">
            <?php printf(
                __('%1$s @ %2$s'),
                get_comment_date(),
                get_comment_time()
            ) ?> <?php edit_comment_link() ?>
        </div>
        <?php if ($comment->comment_approved == '0') : ?>
            <em class="comment-approved">你的迴響正在審核中。
            </em>
        <?php endif; ?>
        <?php comment_text() ?>
        <?php comment_reply_link(array_merge(
            $args,
            array('depth' => $depth, 'max_depth' => $args['max_depth'])));} ?>
    </li>