<html>
<body>

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

		$query="UPDATE contact 
        SET contact_name = '$_POST[contact_name]',
        contact_profession = '$_POST[contact_profession]',
        contact_tel_number = '$_POST[contact_tel_number]',
        contact_mobile_number = '$_POST[contact_mobile_number]'
        WHERE ID = '$_POST[id]'
			";
		
		if ( @mysql_query ( $query ) )
			{
				echo 'Contact Updated Successfuly';
				echo $query;
			}
			else {
				die ( mysql_error() );
			}	
	        
	}
	else {
		trigger_error ( mysql_error(), E_USER_ERROR );
	}
	
?>


</body>
</html>