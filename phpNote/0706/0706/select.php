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

    include('../sql.php'); //找上一層
    try {
        $data = new PDO('mysql:host=localhost;dbname=web', $username, $password);
    } catch (PDOException $e) {
        echo "Connection failed.";
        exit;
    }

    
    $sql = 'SELECT * FROM `client`';
    $statement = $data->prepare($sql);
    $statement->execute();
    $rows = $statement->fetchAll(PDO::FETCH_ASSOC);

    echo $rows;

    $data = null;
    ?>
</body>

</html>