<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

<?php

    
    ?>
    <form action="./form.php" method="POST">
        <!-- post不會顯示 -->
        <!-- <form action="./form.php" method="get"> -->
        <!-- get會顯示 -->
        <!-- action輸入php位置 -->

        <label for="name">姓名</label>
        <input type="text" name="name" id="name" required><!-- required必填的意思-->
        <br>
        
        <p><input type="submit" value="送出"></p>

        </P>
        <!-- name跟id一定要有 -->


    </form>



</body>

</html>