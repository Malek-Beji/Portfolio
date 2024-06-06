<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Informations provenant du formulaire
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Validation des données
    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo 'Veuillez remplir tous les champs.';
        exit;
    }

    // Préparation du mail
    $to = "bejimalek137@gmail.com";
    $subject = "Nouveau message de contact de $name";
    $email_content = "Nom: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Téléphone: $phone\n\n";
    $email_content .= "Message:\n$message\n";

    $headers = "From: $email";

    // Envoi du mail
    if (mail($to, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo 'Votre message a été envoyé avec succès.';
    } else {
        http_response_code(500);
        echo 'Désolé, une erreur est survenue lors de l\'envoi de votre message.';
    }
} else {
    http_response_code(403);
    echo 'Il est interdit d\'accéder directement à ce fichier.';
}
?>
