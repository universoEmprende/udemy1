<?php
function conectarDB() {
    $db = mysqli_connect("localhost","root","universoemprendebuda2025","mydb");

    if (!$db) {
        return false;
    }
    return $db;
}