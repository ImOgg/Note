<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <!-- <?= print_r($_POST) ?> -->

    <!-- <?= print_r($_REQUEST) ?> 雖然很好用但不安全，不建議用來處理POST的資料-->
    <!-- POST跟GET 都要對應 -->

    <?
    // if ($_POST['name']) {
    //     echo '您的名字叫:' . $_POST['name'] . '<br>';
    //     echo '您的信箱是:' . $_POST['email'] . '<br>';
    // } else {
    //     echo '請填寫姓名';
    // }
    ?>


    <!-- 若覺得很麻煩、執行的很複雜，下面這個方法不錯 -->

    <!-- <?php if ($_POST['name']) : ?>
        <h1>Title</h1>
        <p>LOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
        <?= $_POST['name']; ?>
        <? else : ?>
            <h1>Error</h1>
            <p>51561515</p>
    <?php endif; ?> -->


<!-- 判斷輸入的資料是否為正確 -->

    <!-- <?php if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) : ?>
        <!-- 判斷是不是正常的EMAIL -->
        <!-- 若要查可以找 https://www.php.net/manual/en/filter.filters.validate.php-->
        <h1>Title</h1>
        <p>LOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
        <?= $_POST['email']; ?>
    <? else : ?>
        <h1>Error</h1>
        <p>51561515</p>
    <?php endif; ?> -->


    <!-- 發送email -->
    <?php
    // if ($_POST['name'] == 0) {
    //     echo '<h1>error</h1>';
    //     return;

    // }
    // echo '<h1>error</h1>';
    $message = '姓名:' . $_POST['name'] . '/email:' . $_POST['email'];
    mail('xxx871022@gmail.com', '從網站發出來的', $message);
    echo $message;
    ?>
</body>

</html>