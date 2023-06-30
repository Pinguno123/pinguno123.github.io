<!DOCTYPE html>
<!--Created by Ardora - www.webardora.net-->
<!--ArdoraRel-->
<!--bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
para otros usos contacte con el autor-->
<html lang="es">
<head><meta charset="utf-8" /><title></title>
<link type="text/css" href="juegoDouglas_resources/css/ardoraRel.css" rel="stylesheet" />
<script language="javascript" type="text/javascript" src="juegoDouglas_resources/js/jquery.js"></script>
<script language="javascript" type="text/javascript" src="juegoDouglas_resources/js/jquery-ui.min.js"></script>
<script language="javascript" type="text/javascript" src="juegoDouglas_resources/js/jquery.ui.touch-punch.min.js"></script>
<script language="javascript" type="text/javascript" src="juegoDouglas_resources/js/ardoraRelCFG.js"></script>
<script language="javascript" type="text/javascript" src="juegoDouglas_resources/js/ardoraScorm.js"></script>
<script language="javascript" type="text/javascript" src="juegoDouglas_resources/js/ardoraRel.js"></script>
<script language="javascript" type="text/javascript" src="juegoDouglas_resources/js/ardoraTab.js"></script>
</head>
<body onLoad="loadPage()" onbeforeunload="unloadPage()" onUnload="unloadPage()">
<?php include("../../navbar.php") ?>
<div id="ardoraMain">
<audio id="audioEnu">
<source src="juegoDouglas_resources/media/risk-136788.mp3" type="audio/mp3">
</audio>
<audio id="audioFelicitacion">
<source src="juegoDouglas_resources/media/medieval-fanfare-6826.mp3" type="audio/mp3">
</audio>
<audio id="audioErro">
<source src="juegoDouglas_resources/media/wah-wah-sad-trombone-6347.mp3" type="audio/mp3">
</audio>
<div id="ardoraEnu"><SPAN style="font-size:40px;color:#000000">JUEGO DE CONOCIMIENTO GENERAL QUIMICO</SPAN></div>
  <div id="ardoraAct">
<div id="tableL"><div class="cell"><div id="buttonUpLeft" class="butt"><canvas id="bUpLCanvas" width="460px" height="40px"></canvas></div>
<div id="contenL"></div><div id="buttonDownLeft" class="butt"><canvas id="bDownLCanvas" width="460px" height="40px"></canvas></div></div></div>
<div id="tableR"><div class="cell"><div id="buttonUpRight" class="butt"><canvas id="bUpRCanvas" width="460px" height="40px"></canvas></div>
<div id="contenR"></div><div id="buttonDownRight" class="butt"><canvas id="bDownRCanvas" width="460px" height="40px"></canvas></div></div></div>
<canvas id="ardoraActCanvas" width="2px" height="2px"></canvas>
  </div>
<div id="ardoraTab">
  <canvas id="ardoraTabCanvas" width="70" height="98"></canvas>
  <div id="buttonOk"><canvas id="buttonOkCanvas" width="70" height="70"></canvas></div>
</div></div>
<div id="ardoraAlumSCORM"><p></p></div>
</body></html>
