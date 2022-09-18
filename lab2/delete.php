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

		$query="DELETE FROM `contact`
        WHERE ID = '$_GET[id]'
			";
		
		if ( @mysql_query ( $query ) )
			{
				echo 'Contact Deleted Successfuly';
				echo '<a href="/lab2/display.php"> Go back </a>';
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