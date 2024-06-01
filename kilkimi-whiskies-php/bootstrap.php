<?php
if (file_exists(__DIR__ . '/config.inc.php')) {
    include(__DIR__ . '/config.inc.php');
} else {
    throw new RuntimeException('Missing config.inc.php. Rename the config.inc.php.example');
}

$db = new \PDO(
    'mysql:host=' . $config['host'] . ';dbname=' . $config['database'],
    $config['username'],
    $config['password']
);