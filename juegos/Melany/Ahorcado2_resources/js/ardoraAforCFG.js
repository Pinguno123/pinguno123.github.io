//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=50; timeIni=50; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=3;
var score=0; scoreMax=10; scoreInc=1; scoreDec=0;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#9D9DFF"; colorButton="#AA00AA"; colorText="#FFFFFF"; colorSele="#FF80FF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="A winner is a dreamer who never gives up."; messageTime=""; messageError="If you can dream it, you can do it."; messageErrorG="If you can dream it, you can do it."; messageAttempts="Always do what you are afraid to do."; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#BC2C36"; borderTime="#004080";borderError="#004080"; borderAttempts="#004080";
var wordsGame="QWhvcmNhZG8y"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["UExBWQ==","UFVMTA==","QlVZ","TUFLRQ==","TE9TRQ==","U0FZ","QUNDRVBU","Q09PSw==","RFJZ","SlVNUA=="];imaW=["0_play_verb_.jpg","0_pull.jpg","0_59eb98027c983d3fa65857d066230c71--irregular-verbs.jpg","0_descarga.png","0_desktop_dddb1afd-8d4f-4118-a6e5-05e1aa1e23fe.jpg","0_descarga__1_.png","0_desktop_b7dd0d32-eb04-429b-9402-f395e642c94e.png","0_descarga__9_.jpg","0_17_17916_1e5485b2-9f3f-45c7-b3b7-b36298adee63.png","0_ee3ea898-ab72-4c01-ae2f-303594a39c3d_900_900.jpg"];queW=["","","","","","","","","",""];var wordsL=[4,4,3,4,4,3,6,4,3,4];var altW=["","","","","","","","","",""];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ "; wordsG=[];var wordsGL=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var alterW=[];var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="Ahorcado2_resources/media/"; textBNext="";
