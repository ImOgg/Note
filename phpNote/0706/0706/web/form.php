<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>


    <table border="1">
        <?php

        //連接資料庫
        include('../sql.php'); //找上一層
        try {
            $data = new PDO('mysql:host=localhost;dbname=web', $username, $password);
        } catch (PDOException $e) {
            echo "Connection failed.";
            exit;
        }

        //關閉連線
        //相對安全的方法 老師說這個就已經很厲害了 沒有辦法處理像是程式碼的字串

        // $sql = 'INSERT INTO `client`(`name`) VALUES ("' . $_POST['name'] . '")';
        // $run = $data->prepare($sql);
        // $run->execute();

        //最安全的方法
        //aa是虛擬值 可以任何名字都可以

        // $sql = 'INSERT INTO `client`(`name`) VALUES (":aa")';
        // $run = $data->prepare($sql);
        // // $run->bindValue('aa', $_POST['name']);
        // $run->bindParam('aa', $_POST['name']);
        // $_POST['name']="12345";
        // $run->execute();

        // $sql = 'INSERT INTO `client` (`name`) VALUES (:content)';
        // $statement = $data->prepare($sql);
        // $statement->bindValue(':content', $_POST['name']);
        // $_POST['name']="12345";
        // $result = $statement->execute();

        // echo "姓名:" . $_POST['name'] . "<br>";

        //這邊有點小bug
        // $sql = 'SELECT `name` FROM `client`';
        // $statement = $data->prepare($sql);
        // $statement->execute();
        // $rows = $statement->fetchAll(PDO::FETCH_ASSOC);
        // foreach ($rows as $name) {
        //     foreach ($client as $keys => $name) {
        //         echo $key . ':' . $name . '<br>';
        //     }
        // }


        // print_r($rows);
//刪資料 先做判斷再做這個

if(isset($_POST['id'])){
    $del = 'DELETE`name`FROM `client` WHERE id=id';
    $del_statement = $data->prepare($del);
    $del_statement->bindValue('id', $_POST['id'], PDO::PARAM_INT);
    $result = $del_statement->execute();
};




//取資料
        //講義的 key是欄位的名字
        $sql = $data->query('SELECT `name` FROM `client`');
        $rows = $sql->fetchAll(PDO::FETCH_ASSOC);

        foreach ($rows as $row) {
            echo "<tr>\n";
            foreach ($row as $key => $result) {
                echo "<td>\n" . ":" . $result . "</td\n>";
            }
            echo "</tr>\n";
        }

        $data = null;
        ?>
    </table>

    <form action="./form.php">
        <P>要移除的ID</P>
        <input type="text" name="name" id="id">
        <input type="submit" name="submit" id="submit">
    </form>

</body>

</html>