<?php
echo "Current directory: " . __DIR__;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        
        $to = "tobilawal2019@gmail.com";
        $subject = "New Newsletter Subscription";
        $message = "A new user subscribed to the newsletter.\nEmail: $email";

        mail($to, $subject, $message);
        
        header("Location: thank-you.html");
        exit();
    } else {
        echo "Invalid email address";
    }
}
?>
