<?php
header("Content-type:text/html;charset=utf-8");
$id = $_GET["id"];
$pwd= $_GET["pwd"];
$conn = mysql_connect("localhost","root","root");
if($conn){
	mysql_select_db("save");
} 
  mysql_query("insert into number values('$id' ,'$pwd') ",$conn);
  $result = mysql_query("select* from number where stuId = '$id'",$conn);
  $row = mysql_num_rows($result);
   if($row >0 && $row<2){
	   echo "0";
   } else if($row>1){
	   echo "1";
   }
  
 mysql_close($conn);
?>