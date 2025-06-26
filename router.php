<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

define('BASE_URL', '//' . $_SERVER['SERVER_NAME'] . ':' . $_SERVER['SERVER_PORT'] . dirname($_SERVER['PHP_SELF']) . '/');

$action = 'inicio'; // acción por defecto
if (!empty($_GET['action'])) {
    $action = $_GET['action'];
}

// parsea la accion Ej: dev/juan --> ['dev', juan]
$params = explode('/', $action);

// MUESTRO LA BARRA DE NAVEGACION POR DEFECTO
include 'docs/header.php';



// TABLA DE RUTEO
switch ($params[0]) {
    // MUESTREO DE PRODUCTOS
    case 'inicio':
        include 'docs/inicio.php';
        include 'docs/footer.php';
        break;
    case 'habitaciones':
        include 'docs/habitaciones.php';
        include 'docs/footer.php';
        break;
    case 'ubicacion':
        include 'docs/ubicacion.php';
        include 'docs/footer.php';
        break;
    case 'contacto':
        include 'docs/contacto.php';
        include 'docs/footer.php';
        break;
    default:
        include 'docs/inicio.php';
        include 'docs/footer.php';
        break;
}
