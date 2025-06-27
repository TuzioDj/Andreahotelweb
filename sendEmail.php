<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'mailer/PHPMailer.php';
require 'mailer/SMTP.php';
require 'mailer/Exception.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $firstname = htmlspecialchars(trim($_POST['firstname'] ?? ''));
    $lastname = htmlspecialchars(trim($_POST['lastname'] ?? ''));
    $email = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message'] ?? ''));
    $bot = $_POST['website'];

    if (!empty($bot)) {
        // Es probable que sea un bot
        http_response_code(400);
        echo "Solicitud inválida.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Email inválido.";
        exit;
    }
    if (empty($firstname) || empty($lastname) || empty($message)) {
        http_response_code(400);
        echo "Todos los campos son obligatorios.";
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // Configuración SMTP
        $mail->SMTPDebug = 0;
        $mail->isSMTP();
        $mail->Host = 'mail.andreahotel.com.ar';
        $mail->SMTPAuth = true;
        $mail->Username = 'info@andreahotel.com.ar';
        $mail->Password = 'AH7500tresa!';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        // Remitente y destinatario
        $mail->setFrom('info@andreahotel.com.ar', 'Andrea Hotel');
        $mail->addAddress('andreahotel@gmail.com'); // Quiero que le llegue a la dueña

        // Contenido del correo
        $mail->isHTML(true);
        $mail->Subject = 'Nueva consulta desde la web';
        $mail->Body = "
        <h3>Nuevo mensaje de la pagina web</h3>
        <p><strong>Nombre:</strong> {$firstname} {$lastname}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Mensaje:</strong> {$message}</p>
    ";

        $mail->send();
        echo "Mensaje enviado correctamente";
    } catch (Exception $e) {
        http_response_code(500);
        echo "Hubo un error al enviar el mensaje: {$mail->ErrorInfo}";
    }
}
