<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="recursos/css/main.css">
    <title>Feria tecnica</title>
</head>
<body>
    <header>
        <?php include("navbar.php"); ?>
        <div class="cabecera">
            <h1 class="titulo">
                Chemical Learning
            </h1>
            <p class="descripcion">¡Bienvenido al laboratorio virtual de diversión química! Prepara tu fórmula ganadora y sumérgete en una experiencia llena de desafíos científicos, donde los juegos te llevarán a descubrir la magia de los elementos y las reacciones químicas. ¿Estás listo para experimentar la emoción de jugar con la ciencia? ¡Únete a nosotros y desata tu lado químico en este fascinante mundo de juegos!</p>
        </div>
    </header>
    <main class="contenedor">
        <section class="primerafila">
            <div class="texto">
                <h3>Juegos de Química</h3>
            </div>
            <div class="imagenes1f">
                <a href="juegos/douglas/douglasJ.php"><img src="recursos/img/1.png" alt="Juego 1" class="imagenes"></a>
                <a href="juegos/salvador/molec.php"><img src="recursos/img/2.png" alt="Juego 2" class="imagenes"></a>
                <a href="juegos/amilcar/Tperiodica.php"><img src="recursos/img/3.png" alt="Juego 3" class="imagenes"></a>
            </div>
        </section>        
        <section class="segundafila">
            <div class="imagenes1f">
                <a href="juegos/anderson/juegoAnderson.php"><img src="recursos/img/4.png" alt="Juego 4" class="imagenes"></a>
                <a href=""><img src="recursos/img/5.png" alt="Juego 5" class="imagenes"></a>
                <a href="juegos/dana/danaJ.php"><img src="recursos/img/6.png" alt="Juego 6" class="imagenes"></a>
            </div>
        </section>
    </main>
    <!-- <?php include("footer.php") ?> -->
</body>
</html>