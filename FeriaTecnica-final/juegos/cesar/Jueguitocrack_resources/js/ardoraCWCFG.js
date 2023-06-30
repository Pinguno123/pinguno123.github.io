//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Vamooooooooooooooos un crack"; messageTime=""; messageError="Ta mal, q nuv"; messageErrorG="Ta mal, q nuv"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="SnVlZ3VpdG9jcmFjaw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["","","","","","Qw==","","","","","","","",""],["","","","","","Tw==","","","","","","","",""],["","","","","","Qg==","","","Qw==","","","","",""],["","Rg==","TA==","VQ==","Tw==","Ug==","","","QQ==","","","","",""],["","","","","","RQ==","","","Ug==","","","","",""],["","","","","","","","","Qg==","","","","",""],["","","VA==","SQ==","VA==","QQ==","Tg==","SQ==","Tw==","","","","",""],["","","","","","","","","Tg==","","","","","UA=="],["","","","","Tg==","SQ==","VA==","Ug==","Tw==","Rw==","Ug==","RQ==","Tg==","Tw=="],["","","","","RQ==","","","","","","","","","VA=="],["Qg==","QQ==","Ug==","SQ==","Tw==","","","","","UA==","","","","QQ=="],["","","","","Tg==","SQ==","UQ==","VQ==","RQ==","TA==","","","","Uw=="],["","","","","","","","","","QQ==","","","","SQ=="],["","","","","","","","","","VA==","","","","Tw=="],["","","","","","","","","","QQ==","","","",""]];
var x1=[2,3,5,1,5,6,9,14,5,10];
var y1=[4,7,9,11,12,1,3,8,9,11];
var x2=[6,9,14,5,10,6,9,14,5,10];
var y2=[4,7,9,11,12,5,9,14,12,15];
var imaCW=["","","","","","","","","",""];
var audioCW=["","","","","","","","","",""];
var defCW=["Su número atómico es 8","Su número atómico es 22","Su número atómico es el 7","Su número atómico es el 56","El número atómico es 28 ","Su masa atómica es de aprox 63.55","Su masa átomica es de aprox 12","Su masa atómica aprox es de 39.098","Su masa atómica es de aprox 20.18","Su masa átomica es de aprox 107.87"];
var altCW=["","","","","","","","","",""];
var colNum=14;
var rowNum=15;
