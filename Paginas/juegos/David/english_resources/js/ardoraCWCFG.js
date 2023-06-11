//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=220; timeIni=220; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=2;
var score=0; scoreMax=24; scoreInc=24; scoreDec=0;
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=true;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#24ECF7"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Very good"; messageTime="Sorry for you :c"; messageError="This is a error :c"; messageErrorG="This is a error :c"; messageAttempts="I'm sorry for you :c"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#036DAD";borderError="#FF0000"; borderAttempts="#F5EB16";
var wordsGame="ZW5nbGlzaA=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["QQ==","Ug==","SQ==","Uw==","RQ==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og=="],["Ug==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Qg==","VQ==","WQ==","Og==","Og==","Og=="],["Tw==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Tw==","Og==","Qw==","VQ==","VA==","Og=="],["Uw==","Og==","Og==","Og==","Og==","Qg==","Og==","Og==","Og==","VQ==","Og==","Og==","Og==","Og==","Og=="],["RQ==","Og==","RA==","Og==","Og==","TA==","Og==","Og==","Og==","Rw==","Og==","RA==","SQ==","RA==","Og=="],["Og==","Og==","Tw==","Og==","Qg==","Tw==","Ug==","RQ==","Og==","SA==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Tg==","Og==","RQ==","Vw==","Og==","Og==","Og==","VA==","Og==","Og==","SA==","Og==","Og=="],["Og==","Og==","RQ==","Og==","QQ==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","SQ==","Og==","Og=="],["Og==","Og==","Og==","Og==","Ug==","Og==","Og==","Og==","Og==","Rg==","RQ==","TA==","VA==","Og==","Og=="],["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","RQ==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Rw==","Tw==","Tg==","RQ==","Og==","Og==","Og==","RQ==","Qw==","Og==","Og==","Og==","Og=="],["Og==","Og==","Tw==","Og==","Vw==","RQ==","Tg==","VA==","Og==","TA==","QQ==","WQ==","Og==","Og==","Og=="],["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","TQ==","Og==","Og==","Og==","Og=="],["Og==","Og==","Rw==","Ug==","Tw==","Vw==","Og==","Og==","Og==","Og==","RQ==","Og==","QQ==","VA==","RQ=="],["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og=="]];
var x1=[1,10,12,12,5,5,10,3,10,5,10,3,13,1,10,12,6,3,5,13,10,3,5,6,11];
var y1=[1,2,3,5,6,7,9,11,11,12,12,14,14,1,2,2,4,5,6,7,9,11,11,11,11];
var x2=[5,12,14,14,8,6,13,6,11,8,12,6,15,1,10,12,6,3,5,13,10,3,5,6,11];
var y2=[1,2,3,5,6,7,9,11,11,12,12,14,14,5,7,3,7,8,9,9,12,12,12,12,14];
var imaCW=["","","","","","","","","","","","","","","","","","","","","","","","",""];
var audioCW=["","","","","","","","","","","","","","","","","","","","","","","","",""];
var defCW=["Base form of Arose","You bought a something..","To penatrate with or as if with a sharp-edged instrument or object","Yo complete a something (Simple past of do)","To hold up (Simple past of bear)","EW is the word","You feel a something (In past)","The past participle of go","EC is the word","Is the past of go","To put or place in a horizontal position or position of rest; set down:","Is the base form of grew","Simple past of eat","A simple past of arise","A simple past of buy","YC is the word","A base form of blew","Past participle of do","Base form of bore","A character of DBZ","You ---- a texture","You -- to the beach","NW is the word","EE is the word","Simple past of come"];
var altCW=["","","","","","","","","","","","","","","","","","","","","","","","",""];
var colNum=15;
var rowNum=15;
