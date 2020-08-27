<?php
header("Content-type:text/html;charset=utf-8");
$id = $_GET["id"];
$pwd = $_GET["pwd"];
$conn = mysql_connect("localhost","root","root");
mysql_select_db("save");
$result = mysql_query("select* from number where stuId = '$id'",$conn);
$home = mysql_query("select* from number where stuId = '$id' and stuPwd = '$pwd'",$conn);

$row = mysql_num_rows($result);
if($row <1){
	echo "0";
}else{
	echo "1";
}

$rom = mysql_num_rows($home);
if($rom > 0){
	echo "2";
}else {
	echo "3";
}

?>