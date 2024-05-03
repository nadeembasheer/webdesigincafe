<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $date = $_POST['date'];
    $time = $_POST['time'];
    $description = $_POST['description'];
    
    // Email details
    $to = "nadeembasheer121@gmail.com"; // Change this to your email address
    $subject = "New Reservation";
    $message = "Name: $name\nPhone: $phone\nDate: $date\nTime: $time\nDescription: $description";
    $headers = "From: nadeembasheer121@gmail.com"; // Change this to your email address
    
    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Reservation submitted successfully!";
    } else {
        echo "Failed to submit reservation. Please try again later.";
    }
} else {
    echo "Invalid request.";
}
?>
