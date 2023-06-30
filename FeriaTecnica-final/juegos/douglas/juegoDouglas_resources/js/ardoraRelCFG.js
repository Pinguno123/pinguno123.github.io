//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=10; scoreInc=2; scoreDec=0
var typeGame=0;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#FF8040"; colorText="#000000"; colorSele="#B0A54F";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=10; messageOk="Felicidades!"; messageTime=""; messageError="Intentalo de nuevo"; messageErrorG="Intentalo de nuevo"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#000000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="anVlZ29Eb3VnbGFz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>ATOMO</p>","<p>SOLUCION</p>","<p>MODELO ACTUAL</p>","<p>DALTON</p>","<p>TABLA PERIODICA</p>"];
var iL=["","","","",""];
var order=["","","","",""]; orderR=["","","","",""];indexR=0; indexL=0;
var cR=["","","","",""]; ansRL=["Mw==","MQ==","Mg==","MA==","NA=="];
var iR=["<div  align='center'><img alt='' src='juegoDouglas_resources/media/dalton.jpeg'></div>","<div  align='center'><img alt='' src='juegoDouglas_resources/media/solution.jpg'></div>","<div  align='center'><img alt='' src='juegoDouglas_resources/media/actual.png'></div>","<div  align='center'><img alt='' src='juegoDouglas_resources/media/atom.jpg'></div>","<div  align='center'><img alt='' src='juegoDouglas_resources/media/table.png'></div>"];
var auR=[4,2,3,1,5];
