<?php
// Content of database.php

$mysqli = new mysqli('localhost', 'projectUpdates', 'updateComplete', 'personalWebsite');

if($mysqli->connect_errno) {
	printf("Connection Failed: %s\n", $mysqli->connect_error);
	exit;
}
?>

