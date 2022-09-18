<html>
<body>
Update contact
<br/>
<form action="update.php" method="POST">
<?php

	// set your infomation.
	$host		=	'localhost';
	$user		=	'root';
	$pass		=	'';	
	$database	=	'roscripts';
	
	
	// connect to the mysql database server.
	$connect = @mysql_connect ( $host, $user, $pass ) ;

	if ( $connect )
	{
		mysql_select_db ( $database, $connect );
        $num = $_GET['id'];
        $sql = "SELECT `ID`, `contact_name`, `contact_profession`, `contact_tel_number`, `contact_mobile_number` FROM `contact` WHERE ID=$num ";

		if ( @mysql_query ( $sql) )
		{
			$query = mysql_query ( $sql );
			$row = mysql_fetch_assoc ( $query );
			
			do {
			$name = '<input type="text" name="contact_name" value="'.$row['contact_name'].'"/>';
			$profession = '<input type="text" name="contact_profession" value="'.$row['contact_profession'].'"/>';
			$tel_number = '<input type="text" name="contact_tel_number" value="'.$row['contact_tel_number'].'"/>';
			$mobile_number = '<input type="text" name="contact_mobile_number" value="'.$row['contact_mobile_number'].'"/>';
			$contact_id = '<input type="text" hidden name="id" value="'.$_GET['id'].'"/>';
			
            echo 'Name:'. $name. '</br>';
            echo 'Profession:'. $profession. '</br>';
            echo 'Tel Number:'. $tel_number. '</br>';
            echo 'Mobile Number:'. $mobile_number. '</br>';
            echo $contact_id;


			} while ( $row = mysql_fetch_assoc ( $query ) );

		}
		else {
				die ( mysql_error() );
		}	
	        
        	
		

		
	}
	else {
		trigger_error ( mysql_error(), E_USER_ERROR );
	}

		
?>
<input type="submit" />
<input type="reset">
</form>


</body>
</html>