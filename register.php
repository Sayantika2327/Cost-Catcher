<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cost_catcher";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $raw_password = $_POST['password'];

    if (empty($username) || empty($email) || empty($raw_password)) {
        echo "Please fill all fields.";
        exit();
    }

    // Check if email already exists
    $check = $conn->prepare("SELECT id FROM users WHERE email = ?");
    $check->bind_param("s", $email);
    $check->execute();
    $check->store_result();

    if ($check->num_rows > 0) {
        echo "Email already registered. Try logging in.";
        $check->close();
        $conn->close();
        exit();
    }
    $check->close();

    $password = password_hash($raw_password, PASSWORD_DEFAULT);

    $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $username, $email, $password);

    if ($stmt->execute()) {
        // Redirect to login page after successful registration
        header("Location: login.html?registered=1");
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
