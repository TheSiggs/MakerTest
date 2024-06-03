<?php
include('../../../bootstrap.php');
header('Access-Control-Allow-Origin: ' . $config['origin_url']);
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');

try {
    $stmt = $db->query("SELECT * FROM price_rules");
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($results);
} catch (Exception $e) {
    echo json_encode(['error' => 'No query parameter provided.']);
}
