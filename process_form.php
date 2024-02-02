if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = $_POST["fullName"];
    $email = $_POST["email"];
    $telephone = $_POST["telephone"];
    $message = $_POST["message"];

    // Set your email address where you want to receive messages
    $to = "theodorosp96@gmail.com";
    $subject = "Message From Form Submission";
    $headers = "From: $fullName ($email)";

    // Compose the email message
    $emailMessage = "Name: $fullName\n";
    $emailMessage .= "Email: $email\n";
    $emailMessage .= "Telephone: $telephone\n\n";
    $emailMessage .= "Message:\n$message";

    // Send the email
    mail($to, $subject, $emailMessage, $headers);

    // Respond with a success message (this will be handled by the JavaScript)
    echo "success";
}
?>