<?php
include('../bootstrap.php');

header('Content-Type: application/json');


$query = $_GET['query'] ?? '';
try {
    if ($query) {
        $stmt = $pdo->prepare("SELECT * FROM your_table WHERE your_column LIKE ?");
        $stmt->execute(["%$query%"]);
        $results = $stmt->fetchAll();
        echo json_encode($results);
    } else {
        echo json_encode(['error' => 'No query parameter provided.']);
    }
} catch (Exception $e) {
    echo json_encode(['error' => 'No query parameter provided.']);
}
