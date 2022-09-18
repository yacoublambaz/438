<html>
<body>
Display all contacts:
<a href="/lab2/formInsert.html">Add Contact</a>
<br/>
<table>
	<tr>
		<th>Name </th>
		<th>Profession </th>
		<th>Telephone </th>
		<th>Mobile </th>
		<th>Update </th>
		<th>Delete </th>
</tr>

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
		$sql = "SELECT `ID`, `contact_name`, `contact_profession`, `contact_tel_number`, `contact_mobile_number` FROM `contact`";
		
		if ( @mysql_query ( $sql) )
		{
			$query = mysql_query ( $sql );
			$row = mysql_fetch_assoc ( $query );
			$opentr = '<tr>';
			$closetr = '</tr>';
			$opentd = '<td>';
			$closetd = '</td>';
			
			do {
				$ahref = "<a href='/lab2/readone.php?id=" . $row['ID']. "'> Edit </a>";
				$ahrefdel = "<a href='/lab2/delete.php?id=" . $row['ID']. "'> Delete </a>";
				$res = $opentr . $opentd . $row['contact_name'] . $closetd . $opentd . $row['contact_profession'] . $closetd . $opentd . $row['contact_tel_number'] . $closetd . $opentd . $row['contact_mobile_number'] . $closetd . $opentd . $ahref . $closetd . $opentd . $ahrefdel . $closetd .  $closetr;
				echo $res;
				// echo '<tr> <td>'. $row['contact_name']. '</td> <td>'. $row['contact_profession']. '</td>' 
				// echo '<tr>'. $row['contact_name']. '</tr>';
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
</table>

</body>
</html>