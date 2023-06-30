//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=7; attempts=0; attemptsMax=3;
var score=0; scoreMax=7; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#ECFDEC"; colorButton="#626262"; colorText="#000000"; colorSele="#FED801";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=1; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Gill Sans / Gill Sans MT, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="'Lucida Sans Unicode', 'Lucida Grande', sans-serif";
var timeOnMessage=5; messageOk="Bien hecho!!"; messageTime=""; messageError="Mal ahi papu"; messageErrorG="Mal ahi papu"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="bW9sZWM="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>H2</p>","<p>CO2</p>","<p>CH4</p>","<p>HCI</p>","<p>NaCl</p>","<p>O2</p>","<p>H2O</p>"];
var iL=["","","","","","",""];
var order=["","","","","","",""]; orderR=["","","","","","",""];indexR=0; indexL=0;
var cR=["","","","","","",""]; ansRL=["Mw==","MQ==","Mg==","NA==","NQ==","MA==","Ng=="];
var iR=["<div  align='center'><img alt='' src='molec_resources/media/Dioxygen-montage.png'></div>","<div  align='center'><img alt='' src='molec_resources/media/co2-3-e1560570641602.jpg'></div>","<div  align='center'><img alt='' src='molec_resources/media/ch4-lewis-structure-molecular-geometry-min-1.png'></div>","<div  align='center'><img alt='' src='molec_resources/media/istockphoto-1253997308-170667a.jpg'></div>","<div  align='center'><img alt='' src='molec_resources/media/Hydrogen-chloride-3D-vdW-labelled.png'></div>","<div  align='center'><img alt='' src='molec_resources/media/FG02_09.jpg'></div>","<div  align='center'><img alt='' src='molec_resources/media/6715192.png'></div>"];
var auR=[6,2,3,1,4,5,7];
