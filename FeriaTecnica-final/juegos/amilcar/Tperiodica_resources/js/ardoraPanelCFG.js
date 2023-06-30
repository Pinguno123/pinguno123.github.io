//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=10;
var successes=0; successesMax=10; attempts=0; attemptsMax=4;
var score=0; scoreMax=10; scoreInc=1; scoreDec=1
var typeGame=2;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicitaciones"; messageTime=""; messageError="Que mal"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#000000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var texSel=0; var doneA=["0","0","0","0","0","0","0","0","0","0"];
var doneB=["-1","-1","-1","-1","-1","-1","-1","-1","-1","-1"];
var posX=[489,192,175,226,19,53,425,451,567,538]; var posY=[81,333,377,210,126,172,191,130,242,167];
var coorx=["NDg0", "MTg3", "MTcw", "MjIx", "MTQ=", "NDg=", "NDIw", "NDQ2", "NTYy", "NTMz"]; var coory=["ODE=", "MzMz", "Mzc3", "MjEw", "MTI2", "MTcy", "MTkx", "MTMw", "MjQy", "MTY3"]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var al1=["", "", "", "", "", "", "", "", "", ""]; var al2=["", "", "", "", "", "", "", "", "", ""]; var al3=["", "", "", "", "", "", "", "", "", ""]; var al4=["", "", "", "", "", "", "", "", "", ""]; answers=["No metales", "Lantanidos", "Actinidos", "Metales de transicion", "Metales alcalinos", "Metales alcalinoterreos", "Otros metales", "Metaloides", "Gases nobles", "Halogenos"];indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="VHBlcmlvZGljYQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=true;
