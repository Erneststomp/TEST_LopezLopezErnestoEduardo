
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

if (isset($_GET['searchTerm'])) {
    $key='k_hm34g5w4';
    $searchTerm = $_GET['searchTerm'];
    $url = "https://imdb-api.com/en/API/Search/$key/$searchTerm";
    $response = file_get_contents($url);
    $data =json_encode($response);
    echo $data;
 

}

?>
