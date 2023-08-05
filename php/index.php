<?php
  $name = $_POST['name'];
  $surname = $_POST['surname'];
  $email = $_POST['email'];
  $date = $_POST['date'];

  $subject = "=?utf-8?B?".base64_encode("Сообщение с сайта")."?=";
  $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n"; 
  
  $success = mail("test@test.com", $subject, $date, $headers);
  echo $success;

  ?>