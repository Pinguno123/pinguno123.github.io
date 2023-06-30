<!DOCTYPE html>
<!--Created by Ardora - www.webardora.net-->
<!--ArdoraPanel-->
<!--bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
para otros usos contacte con el autor-->
<html lang="es">
<head><meta charset="utf-8" /><title>Tabla periodica nomb</title>
<link type="text/css" href="Tperiodica_resources/css/ardoraPanel.css" rel="stylesheet" />
<script language="javascript" type="text/javascript" src="Tperiodica_resources/js/jquery.js"></script>
<script language="javascript" type="text/javascript" src="Tperiodica_resources/js/jquery-ui.min.js"></script>
<script language="javascript" type="text/javascript" src="Tperiodica_resources/js/jquery.ui.touch-punch.min.js"></script>
<script language="javascript" type="text/javascript" src="Tperiodica_resources/js/ardoraPanelCFG.js"></script>
<script language="javascript" type="text/javascript" src="Tperiodica_resources/js/ardoraScorm.js"></script>
<script language="javascript" type="text/javascript" src="Tperiodica_resources/js/ardoraPanel.js"></script>
<script language="javascript" type="text/javascript" src="Tperiodica_resources/js/ardoraTab.js"></script>
</head>
<body onLoad="loadPage()" onbeforeunload="unloadPage()" onUnload="unloadPage()">
<?php include("../../navbar.php") ?>
<div id="ardoraMain">
<audio id="audioEnu">
<source src="Tperiodica_resources/media/y2mate.com_-_BanjoKazooie_Music_Gobis_Valley.mp3" type="audio/mp3">
</audio>
<div id="ardoraEnu"><SPAN style="font-size:12px;color:#000000"><b>Ponga los </b></SPAN><SPAN style="font-size:12px;color:#FF2C20"><b>nombres</b></SPAN><SPAN style="font-size:12px;color:#000000"><b> de las divisiones de la tabla periodica</b></SPAN><br><SPAN style="font-size:12px;color:#000000"><b>(dele click aqui para musica de fondo)</b></SPAN></div>
  <div id="ardoraAct">
<div id="txt1" class="txtCell"><input type="text" aria-label="Item 1" name="inputTxt1" id="inputTxt1" class="txtCell_input"/></div>
<div id="txt2" class="txtCell"><input type="text" aria-label="Item 2" name="inputTxt2" id="inputTxt2" class="txtCell_input"/></div>
<div id="txt3" class="txtCell"><input type="text" aria-label="Item 3" name="inputTxt3" id="inputTxt3" class="txtCell_input"/></div>
<div id="txt4" class="txtCell"><input type="text" aria-label="Item 4" name="inputTxt4" id="inputTxt4" class="txtCell_input"/></div>
<div id="txt5" class="txtCell"><input type="text" aria-label="Item 5" name="inputTxt5" id="inputTxt5" class="txtCell_input"/></div>
<div id="txt6" class="txtCell"><input type="text" aria-label="Item 6" name="inputTxt6" id="inputTxt6" class="txtCell_input"/></div>
<div id="txt7" class="txtCell"><input type="text" aria-label="Item 7" name="inputTxt7" id="inputTxt7" class="txtCell_input"/></div>
<div id="txt8" class="txtCell"><input type="text" aria-label="Item 8" name="inputTxt8" id="inputTxt8" class="txtCell_input"/></div>
<div id="txt9" class="txtCell"><input type="text" aria-label="Item 9" name="inputTxt9" id="inputTxt9" class="txtCell_input"/></div>
<div id="txt10" class="txtCell"><input type="text" aria-label="Item 10" name="inputTxt10" id="inputTxt10" class="txtCell_input"/></div>
<canvas id="ardoraActCanvas" width="2px" height="2px"></canvas>
<canvas id="ardoraActCanvasAnim" aria-label="" width="2px" height="2px"></canvas>
  </div>
<div id="ardoraTab">
  <canvas id="ardoraTabCanvas" width="70" height="98"></canvas>
  <div id="buttonOk" tabindex="0"><canvas id="buttonOkCanvas" width="70" height="70"></canvas></div>
</div></div>
<div id="ardoraAlumSCORM"><p></p></div>
<div id="ardoraAutor"><p>Anderson Amilcar Escobar Reyes</p></div>
</body></html>
