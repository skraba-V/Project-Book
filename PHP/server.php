<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = $_POST['title'];
    $author = $_POST['author'];

    try {
        $url = "https://openlibrary.org/search.json";

        if (!empty($title)) {
            $url .= "?title=" . urlencode($title);
        }

        if (!empty($author)) {
            $url .= !empty($title) ? "&" : "?";
            $url .= "author=" . urlencode($author);
        }

        $response = file_get_contents($url);

        if ($response === false) {
            throw new Exception("Failed to fetch data from API");
        }

        $decodedResponse = json_decode($response);

        header('Content-Type: application/json');
        echo json_encode($decodedResponse);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["error" => $e->getMessage()]);
    }
}