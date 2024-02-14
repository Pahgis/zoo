<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./assets/css/zoo.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
<div class="timer position-absolute top-0 start-50 text-black">Time</div>
<div class="tableauResltat position-absolute top-50 start-50">
    <div class="row">
        <div class="col-12">
            <h2>Résultat du jour : </h2>
            <div>Entretien  - </div>
            <div>Soin des animaux</div>
            <div>Achats d'animaux</div>
            <div>Clients </div>
        </div>
    </div>
</div>
    <div class="buttonMenu position-absolute top-0 end-0">
        <button class="btn btn-primary">Menu</button>
    </div>


    <div id="menuTest" class=" row draggable menuTest">
        <div class="row">
            <div class="col-10 ">
                    <div class="animaux">
                        <div class="lapin">
                            <img src="/assets/animal_img/lapin.png" alt="" style="height: 30px;" class="draggable">
                        </div>
                    </div>
                    <div class="employer"></div>
                    <div class="revenu"></div>
            </div>
            <div class="col-2 bgTransparent">
                <button class="buttonAnimal btn"></button>
                <button class="buttonEmployer btn"></button>
                <button class="buttonData btn"></button>
            </div>
        </div>
    </div>




    <div class="module " id="module">
        <div class="row" style="height: 100%;">
            <div class="col-6">
                <img class="encloszone1" src="./assets/bg/hautgauche.png">
                <img class="encloszone3" src="./assets/bg/basgauche.png">
            </div>
            <div class="col-6">
                <img class="encloszone2" src="./assets/bg/hautdroite.png">
                <img class="encloszone4" src="./assets/bg/basdroite.png">
            </div>
        </div>

    </div>
    </div>
  


<script src="./assets/js/jourTIme.js"></script>
    <script src="./assets/js/menu.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js"></script>
    <script src="./assets/js/drag.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>

</html>