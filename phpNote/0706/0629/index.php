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

    // 開啟錯誤訊息 點MAMP資料夾-CONF-8.0.1-開啟php.ini-找到display-error改on-重啟server

    //     $cars = array('apple', 'bababa', 'grape');
    // //    print_r($cars); 可以用來找陣列內中的項目是甚麼
    //     for ($i = 0; $i < 3; $i++) {
    //         echo $cars[$i];
    //     }

    //多重數組1

    // $client = array(
    // array('name'=>'Peter', 'phone'=>'09123456', 'address'=>'台北市'),
    // array('name'=>'Mary', 'phone'=>'09123456', 'address'=>'台北市'),
    // );
    // echo $client[0]['name'];

    //多重數組2

    // $client = array(
    //     'client1'=> array('name'=>'Peter', 'phone'=>'09123456', 'address'=>'台北市'),
    //     'client2'=>array('name'=>'Mary', 'phone'=>'09123456', 'address'=>'台北市'),
    //     );
    //     echo $client['client1']['name'];

    //多重數組3

    // $client = array(
    //     'client1'=> array('name'=>'Peter', 'phone'=>'09123456', 'address'=>'台北市'),
    //     'client2'=>array('name'=>'Mary', 'phone'=>'', 'address'=>'台北市'),
    //     );

    //     $client['client2']['name']='123456'; 
    //     echo $client['client1']['name'];
    // //若要字串+變數要這樣搞
    //     echo'姓名:'. $client['client1']['name'].'電話:'. $client['client1']['phone'];

    // foreach

    // $cars = array (
    //     array('name'=>'Volvo','money'=>'100'),
    //     array('name'=>'BMW','money'=>'120'),
    //     array('name'=>'Toyota','money'=>'50')
    //   );

    //   foreach ($cars as $value) {
    //     echo "$value[name]<br>";
    //   }

    //do wile

    // do {
    //     echo "The number is: $x <br>";
    //     $x++;
    // } while ($x <= 5);


    //for
    // for ($i = 0; $x <= 100; $x += 10) {
    //     echo "nunmer is $x<br>";
    // }

    ?>

<!-- 下拉式選單 -->

    <!-- <select name="number" id="number">
        <?php

        for ($i = 1; $i < 11; $i++) {
            echo "<option value='$i'>$i</option>";
        }

        ?>
    </select> -->

    <form action="./form.php" method="post">
        <!-- post不會顯示 -->
        <!-- <form action="./form.php" method="get"> -->
        <!-- get會顯示 -->
        <!-- action輸入php位置 -->

        <label for="name">姓名</label>
        <input type="text" name="name" id="name" required><!-- required必填的意思-->
        <br>
        <br>
        <label for="email">Email</label>
        <input type="email" name="email" id="email">
        <P>性別:

            <input type="radio" name="sex" id="male" value="male">
            <label for="male">男生</label>
            <input type="radio" name="sex" id="female" value="female">
            <label for="female">女生</label>

        <p><input type="submit" value="送出"></p>

        </P>
        <!-- name跟id一定要有 -->


    </form>



</body>

</html>