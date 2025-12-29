<?php
require ("cone.php") ;
if (isset($_POST["marque"]) && isset($_POST["modele"]) && isset($_POST["couleur"]) && isset($_POST["kilometrage"])) {
    $marque = $_POST["marque"] ;
    $modele = $_POST["modele"] ;
    $couleur = $_POST["couleur"] ;
    $kilometrage = $_POST["kilometrage"] ;

    try{
        $stm = $con->prepare("insert into users(marque , modele , couleur , kilometrage) values (:marque , :modele , :couleur , :kilometrage)") ;
        if ($stm->execute([":marque" => $marque , ":modele" => $modele , ":couleur" => $couleur , ":kilometrage" => $kilometrage ]))
            echo "insertion Réussie !" ;
    }catch (PDOException $A) {
        die("Erreur 404" . $A->getmessage()) ;
    }
}

?>