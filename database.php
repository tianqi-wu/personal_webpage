<?php
// Content of database.php
// Some minor tweaks to avoid attacks.  and to do some minor project Updates
$mysqli = new mysqli('localhost', 'projectUranus', 'updateComplete', 'personalWebsite');

if($mysqli->connect_errno) {
	printf("Connection Failed: %s\n", $mysqli->connect_error);
	exit;
}
?>

