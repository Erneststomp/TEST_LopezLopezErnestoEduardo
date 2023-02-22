
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

if (isset($_GET['selectedMovie'])) {
    $key='k_kfy9v832';
    $selectedMovie = $_GET['selectedMovie'];
    $urldetailed = "https://imdb-api.com/en/API/Title/$key/$selectedMovie/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia,";
    $responsedetailed = file_get_contents($urldetailed);
    $datadetailed =json_encode($responsedetailed);
    echo $datadetailed;
}

?>