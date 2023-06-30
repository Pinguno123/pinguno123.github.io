//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=7; attempts=0; attemptsMax=5;
var score=0; scoreMax=14; scoreInc=2; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=6; messageOk="Lo has logrado"; messageTime=""; messageError="Vuelve a intentarlo"; messageErrorG="Vuelve a intentarlo"; messageAttempts="Lo siento, vuelve a intentarlo"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="ZG91Z2xhc0o="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Modelo Actual</p>","<p>Atomo</p>","<p>John Dalton Greenup</p>","<p>Una Solución</p>","<p>Tabla periodica</p>","<p>Mezcla heterogénea</p>","<p>Hierro</p>"];
var iL=["","","","","","",""];
var order=["","","","","","",""]; orderR=["","","","","","",""];indexR=0; indexL=0;
var cR=["","","","","","",""]; ansRL=["NQ==","Ng==","Mw==","MQ==","MA==","Mg==","NA=="];
var iR=["<div  align='center'><img alt='' src='douglasJ_resources/media/table.png'></div>","<div  align='center'><img alt='' src='douglasJ_resources/media/solution.jpg'></div>","<div  align='center'><img alt='' src='douglasJ_resources/media/horchata.jpg'></div>","<div  align='center'><img alt='' src='douglasJ_resources/media/dalton.jpeg'></div>","<div  align='center'><img alt='' src='douglasJ_resources/media/iron.jpg'></div>","<div  align='center'><img alt='' src='douglasJ_resources/media/actual.png'></div>","<div  align='center'><img alt='' src='douglasJ_resources/media/atom.jpg'></div>"];
var auR=[5,4,6,3,7,1,2];
