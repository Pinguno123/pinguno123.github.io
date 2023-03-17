//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=3;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#F7FBFD"; colorButton="#DC30A8"; colorText="#000000"; colorSele="#2680D9";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Great job"; messageTime="More fast the next time"; messageError="Your have a mistake"; messageErrorG="Your have a mistake"; messageAttempts="You tried"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="RW5nbGlzaDE="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Regular verbs</p>","<p>Present participle</p>","<p>Past participle</p>"];
var iL=["<div  align='center'><img alt='' src='English1_resources/media/bloque.jpg'></div>","<div  align='center'><img alt='' src='English1_resources/media/bloque.jpg'></div>","<div  align='center'><img alt='' src='English1_resources/media/bloque.jpg'></div>"];
var order=["","",""]; orderR=["","",""];indexR=0; indexL=0;
var cR=["<p>use with have, has or had Example: I had a books</p>","<p>Finish in -ED or -D Example: Played</p>","<p>use whit am, is, are, was, were. Example: I am a doctor</p>"]; ansRL=["MQ==","Mg==","MA=="];
var iR=["<div  align='center'><img alt='' src='English1_resources/media/libros.jpg'></div>","<div  align='center'><img alt='' src='English1_resources/media/played.jpg'></div>","<div  align='center'><img alt='' src='English1_resources/media/doctor.jpg'></div>"];
var auR=[3,1,2];
