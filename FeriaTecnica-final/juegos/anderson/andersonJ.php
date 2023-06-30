<!DOCTYPE html>
<!--Created by Ardora - www.webardora.net-->
<!--ArdoraSopa-->
<!--bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
para otros usos contacte con el autor-->
<html lang="es">
<head><meta charset="utf-8" /><title>Sopa de letras</title>
<link type="text/css" href="andersonJ_resources/css/ardoraSopa.css" rel="stylesheet" />
<script language="javascript" type="text/javascript" src="andersonJ_resources/js/jquery.js"></script>
<script language="javascript" type="text/javascript" src="andersonJ_resources/js/jquery-ui.min.js"></script>
<script language="javascript" type="text/javascript" src="andersonJ_resources/js/jquery.ui.touch-punch.min.js"></script>
<script language="javascript" type="text/javascript" src="andersonJ_resources/js/ardoraSopaCFG.js"></script>
<script language="javascript" type="text/javascript" src="andersonJ_resources/js/ardoraScorm.js"></script>
<script language="javascript" type="text/javascript" src="andersonJ_resources/js/ardoraSopa.js"></script>
<script language="javascript" type="text/javascript" src="andersonJ_resources/js/ardoraTab.js"></script>
</head>
<body onLoad="loadPage()" onbeforeunload="unloadPage()" onUnload="unloadPage()">
<div id="ardoraMain">
<audio id="audioFelicitacion">
<source src="andersonJ_resources/media/medieval-fanfare-6826.mp3" type="audio/mp3">
</audio>
<audio id="audioTempo">
<source src="andersonJ_resources/media/wah-wah-sad-trombone-6347.mp3" type="audio/mp3">
</audio>
<div id="ardoraEnu"><SPAN style="font-size:20px;color:#000000">Sopa de letras sobre elementos de la tabla periódica</SPAN><br><SPAN style="font-size:12px;color:#000000"><i>Encuentra todas las palabras antes de que el tiempo termine</i></SPAN></div>
  <div id="ardoraAct">
<canvas id="ardoraActBoard" width="990px" height="600px"></canvas>
<canvas id="ardoraActSel" width="990px" height="600px"></canvas>
<svg id="s_pointer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="558px" height="350px">
<line id="vertical" x1="0" y1="0" x2="0" y2="350" style="stroke:rgb(255,0,0);stroke-width:1" />
<line id="horizontal" x1="0" y1="0" x2="558" y2="0" style="stroke:rgb(255,0,0);stroke-width:1" />
<circle id="c_point" cx="0" cy="0" r="5"style="opacity:0.1;stroke:rgb(255,0,0);stroke-width:2"/></svg>
<canvas id="ardoraActCanvas" width="2px" height="2px"></canvas>
  </div>
<div id="ardoraTab">
  <canvas id="ardoraTabCanvas" width="70" height="88"></canvas>
</div></div>
<div id="ardoraAlumSCORM"><p></p></div>
<div id="ardoraAutor"><p>Anderson David Games Montes</p></div>
<?php include("../../navbar.php") ?>
</body></html>
