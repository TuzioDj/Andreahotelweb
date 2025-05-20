<?php

define('BASE_URL', '//' . $_SERVER['SERVER_NAME'] . ':' . $_SERVER['SERVER_PORT'] . dirname($_SERVER['PHP_SELF']) . '/');

$action = 'inicio'; // acción por defecto
if (!empty($_GET['action'])) {
    $action = $_GET['action'];
}

// parsea la accion Ej: dev/juan --> ['dev', juan]
$params = explode('/', $action);

// MUESTRO LA BARRA DE NAVEGACION POR DEFECTO
include 'templates/header.php';



// TABLA DE RUTEO
switch ($params[0]) {
    // MUESTREO DE PRODUCTOS
    case 'inicio':
        include 'templates/footer.php';
        break;
    default:
        echo ('404 Page not found');
        break;
}
