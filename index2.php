<?php
$nombre = $_REQUEST['nombre'];
$apellido = $_REQUEST['apellido'];
$dni = $_REQUEST['dni'];
$email = $_REQUEST['email'];

$primera_linea = "$nombre $apellido con DNI $dni y correo electrónico $email";
$fecha = date("d/m/Y");
?>
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- estilo -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous">
        <!-- /estilo -->
    </head>

    <body>
        <div class=" card m-3">

            <h1 class="d-flex justify-content-center pt-2">Instancia</h1>
            <p class="d-flex justify-content-end me-3">Fecha: <?= $fecha ?></p>
            <p class="ms-3"><?= $primera_linea ?></p>
            <p class="ms-3">Expone:</p>
            <p class="ms-3">Solicita:</p>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q"
        crossorigin="anonymous"></script>
    </body>
</html>
