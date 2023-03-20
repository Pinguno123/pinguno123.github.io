//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=15;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#008080"; colorText="#000000"; colorSele="#800080";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Lo lograste!"; messageTime=""; messageError="Fallaste!"; messageErrorG="Fallaste!"; messageAttempts="Se acabo tu tiempo!"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#808080"; borderTime="#FF0000";borderError="#800040"; borderAttempts="#800040";
var wordsGame="b3JkZW5hci1wYXJyYWZvcw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actMaxWidth="600"; actMaxHeight="400";profG=0;dirMedia="ordenar-parrafos_resources/media/";
var indexG=0;
var words1G=["T2JzZXJ2YWNpw7NuIHkgZ2VuZXJhY2nDs24gZGUgcHJlZ3VudGFz","SW52ZXN0aWdhY2nDs24=","Rm9ybXVsYWNpw7NuIGRlIGhpcMOzdGVzaXM=","RXhwZXJpbWVudGFjacOzbg==","QW7DoWxpc2lzIGRlIGRhdG9z","Q29uY2x1c2lvbmVz"];
var words2G=["UHJpbWVyYSBCYXRhbGxhIGRlbCBNYXJuZQ==","QmF0YWxsYSBkZSBsb3MgRGFyZGFuZWxvcyBvIGRlIEdhbMOtcG9saQ==","QmF0YWxsYSBkZSBWZXJkw7puOiBMYSBiYXRhbGxhIG3DoXMgbGFyZ2EgZGUgdG9kYSBsYSBndWVycmE=","QmF0YWxsYSBkZWwgU29tbWU=","QmF0YWxsYSBkZSBDYW1icmFp","S2Fpc2Vyc2NobGFjaHQ=","TGEgc2VndW5kYSBiYXRhbGxhIGRlbCBNYXJuZQ=="];
var words3G=["wr9RdcOpIGVzIGVsIE3DqXRvZG8gQ2llbnTDrWZpY28/","RWwgbcOpdG9kbyBjaWVudMOtZmljbyBlcyB1biBwcm9jZXNv","cXVlIHRpZW5lIGNvbW8gZmluYWxpZGFkIGVzdGFibGVjZXIgcmVsYWNpb25lcw==","ZW50cmUgaGVjaG9zIHBhcmEgZW51bmNpYXIgbGV5ZXMgeSB0ZW9yw61hcw==","cXVlIGV4cGxpcXVlbiB5IGZ1bmRhbWVudGVuIGVsIGZ1bmNpb25hbWllbnRvIGRlbCBtdW5kby4="];
var c1=[37,13,24,15,17,12];
var c2=[25,39,57,17,18,14,28];
var c3=[29,34,46,42,56];
