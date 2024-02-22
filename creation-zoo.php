<?php

require './config/autoloader.php';
if (!empty($_GET["id"])) {
    require_once './config/connexion.php';
    $preparedRequest = $connexion->prepare('SELECT * FROM zoo WHERE id_users = ?');
    $preparedRequest->execute([
        $_GET["id"]
    ]);
    $zoos = $preparedRequest->fetchAll(PDO::FETCH_ASSOC);
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-4">
                        <h2>Création Zoo</h2>
                        <form action="./process/BDD/create_zoo.php" method="post">
                            <input type="text" name="zoo" id="" class="form-control">
                            <input type="hidden" name="id" value="<?= $_GET["id"] ?>">
                            <button type="submit">Créer !</button>
                        </form>
                    </div>
                </div>
                <div>
                    <h2>Zoo en cours : </h2>
                    <div class="d-flex flex-row">
                        <?php
                        foreach ($zoos as $zoo) { ?>
                            <a href="./zoo.php?id=<?= $_GET["id"] ?>&zoo=<?=$zoo["name"]?>&idzoo=<?=$zoo["id"] ?>" >
                                <div class="card btn">
                                    <div>Zoo <?= $zoo["name"] ?></div>
                                </div>
                            <?php  }
                            ?>
                            </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>