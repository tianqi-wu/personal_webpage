<?php
header("Content-Type: application/json"); // Since we are sending a JSON response here (not an HTML document), set the MIME Type to application/json

//Because you are posting the data via fetch(), php has to retrieve it elsewhere.
$json_str = file_get_contents('php://input');
//This will store the data into an associative array
$json_obj = json_decode($json_str, true);

//Variables can be accessed as such:
$date = (string) trim($json_obj['result']);




    require 'database.php';
                    
	$stmt1 = $mysqli->prepare("select * from experience");
	if(!$stmt1){
		echo json_encode(array(
			"success" => false,
			"value" => "You are not logged in!"
		));
		exit;
	}
	//id, name, picture, description_1, description_2, date
	
	$stmt1->execute();



	$stmt1->bind_result($id, $name, $picture, $description_1, $description_2, $date,$project_type,$details);
	

 $value = "";
	
	//Not sure whether this would be OK
	while($stmt1->fetch()){
        $value .= "\n".$id."\t".$name."\t".$picture."\t".$description_1."\t".$description_2."\t".$date."\t".$project_type."\t".$details;
		
	}

    $stmt1->close();



	echo json_encode(array(
		"success" => true,
		"value" =>  $value
	));
	exit;

    

?>