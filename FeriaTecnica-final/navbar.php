<?php $url_base = "http://localhost/FeriaTecnica-final/" ?>
<style>
nav {
    padding: 20px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    position: sticky;
    top: 0;
    background: white;
}
nav > h1 {
    font-weight: 200;
}
nav > .links > a {
    margin-right: 10px;
    text-decoration: none;
    color: black;
}
nav > .logo > a {
    color: black;
    text-decoration: none;
}
</style>
<nav>
    <div class="logo">
        <a href="<?php echo $url_base?>">
            <h1>Chemical Learning</h1>
        </a>
    </div>
    <div class="links">
        <a href="<?php echo $url_base?>juegos/douglas/douglasJ.php">Juego 1</a>
        <a href="<?php echo $url_base?>juegos/salvador/molec.php">Juego 2</a>
        <a href="<?php echo $url_base?>juegos/amilcar/Tperiodica.php">Juego 3</a>
        <a href="<?php echo $url_base?>juegos/anderson/andersonJ.php">Juego 4</a>
        <a href="<?php echo $url_base?>juegos/cesar/cesarJ.php">Juego 5</a>
        <a href="<?php echo $url_base?>juegos/dana/danaJ.php">Juego 6</a>
    </div>
</nav>