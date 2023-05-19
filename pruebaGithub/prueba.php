<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style.css" rel="stylesheet" type="text/css">
    <title>Prueba de PHP</title>
</head>
<body>

<h1>Ingrese el nombre de su hijo : </h1>
<form method="post">
  <label for="nombre">Nombre:</label>
  <input style="width: 350px;" placeholder="Primer y segundo apellido con inicial Mayúscula" type="text" id="nombre" name="nombre" required>
  <button type="submit">Enviar</button>
</form>
<br>
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $nombre = $_POST['nombre'];
  switch ($nombre){
    case "Douglas Sánchez": echo "Hola";break;
    case "Shelsea Serrano": echo "Te amo mucho mami linda gracias por todo tu apoyo y cariño";break;
    default: echo "No se encontro el nombre";
  }
}
?>

<script>
  if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
  }
</script>


</body>
</html>