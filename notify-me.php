<?php
error_reporting(0);
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $entityBody = file_get_contents('php://input');
    $data = json_decode($entityBody);
    try {
        if (isset($data->admin_email) && isset($data->visitor_email)) {
            $adminEmail = $data->admin_email;
            $visitorEmail = $data->visitor_email;
            if (sendMail($adminEmail, $visitorEmail)) {
                $response = ['status' => true, 'message' => 'Your mail has been sent successfully.'];
            } else {
                throw new Exception("Unable to send email. Please try again.");
            }
        } else {
            throw new Exception("Invalid Data sent.");
        }
    } catch (Exception $e) {
        $result = ['status' => false, 'message' => $e->getMessage(), 'error' => ['line' => $e->getLine(), 'file' => $e->getFile()]];
    }
    echo json_encode($result);
    exit();
} else {
    header("Location: ./");
    exit();
}

function sendMail($adminEmail, $visitorEmail)
{
    $to = $adminEmail;
    $subject = 'Waiting List For Your Website';
    $from = 'hello@desdistrict.com';

    // To send HTML mail, the Content-type header must be set
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    // Create email headers
    $headers .= 'From: ' . $from . "\r\n" .
        'Reply-To: ' . $from . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    // Compose a simple HTML email message
    $message = '<html><body>';
    $message .= '<h1 style="color:#f40;">Hola Admin!</h1>';
    $message .= '<p style="color:#080;font-size:18px;">Your website is currently under development and a couple of amazing humans would love to be a part of what you are doing?</p>';
    $message .= '<p style="color:#080;font-size:18px;">Some of them indicated interest by dropping their email on your website, do get in touch with them.</p>';
    $message .= '<p style="color:#080;font-size:18px;">One of them is - ' . $visitorEmail . '. We trust that you will give them a full of all you and your organization represents.</p>';
    $message .= '</body></html>';

    // Sending email
    if (mail($to, $subject, $message, $headers)) {
        return true;
    } else {
        return false;
    }
}
