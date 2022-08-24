<?php 

    use PHPMailer/PHPMailer\PHPMailer;
    use PHPMailer/PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage ('ukr', 'phpmailer/language/')
    $mail->IsHtml(true);

    $mail->setForm('taras.malchenko@gmail.com' , "TARAS");
    $mail->addAddress('taras.malchenko@gmail.com');
    $mail->Subject = 'Hi, Taras';

    $body = '<h1>Зустрічайте перше повідомлення</h1>';
    
    if(trim(!empty($_POST['user__name']))){
        $body.='<p><strong>Імя</strong>' .$_POST['user__name'].'</p>';
    }
    if(trim(!empty($_POST['user__email']))){
        $body.='<p><strong>E-mail</strong>' .$_POST['user__email'].'</p>';
    }
    if(trim(!empty($_POST['user__tel']))){
        $body.='<p><strong>Телефон</strong>' .$_POST['user__tel'].'</p>';
    }
    if(trim(!empty($_POST['problem']))){
        $body.='<p><strong>Ваша проблема</strong>' .$_POST['problem'].'</p>';
    }


    if(!$mail->send()){
        $message = 'Error';
    }else{
        $message = 'OK';
    }

    $response = ['message'=>$message];

    header('Content-type: application/json');
    echo json_encode($response);
?>