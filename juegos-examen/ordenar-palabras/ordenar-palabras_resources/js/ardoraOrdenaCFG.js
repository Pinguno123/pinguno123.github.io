var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=10;
var score=0; scoreMax=4; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
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
var timeOnMessage=5; messageOk="Felicidades lo lograste."; messageTime="Si eres lento, vuelve a intentarlo."; messageError="Fallaste!"; messageErrorG="Fallaste!"; messageAttempts="Ya no tienes oportunidades, vuelve a intentarlo."; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#808080"; borderTime="#800040";borderError="#800040"; borderAttempts="#800040";
var wordsGame="b3JkZW5hci1wYWxhYnJhcw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["RGFyd2luIGVzIGNvbnNpZGVyYWRvIGVsIHBhZHJlIGRlIGxhIGV2b2x1Y2nDs24u","TGEgdGVvcsOtYSBkZSBsYSBldm9sdWNpw7NuIGVzIHVuIGNvbmp1bnRvIGRlIGNvbm9jaW1pZW50b3MgeSBldmlkZW5jaWFzIGNpZW50w61maWNhcyBxdWUgZXhwbGljYW4gdW4gZmVuw7NtZW5vLg==","RWwgb3JpZ2VuIGRlIGxhcyBlc3BlY2llcyBzZSBwdWJsaWPDsyBlbiBJbmdsYXRlcnJhLg==","TGEgdGVvcsOtYSBkZSBsYSBldm9sdWNpw7NuIGFwYXJlY2UgY29tbyBjb25zZWN1ZW5jaWEgZGUgbGEgb2JzZXJ2YWNpw7NuLg==",""];imaW=["darwin.jpg","teoria.jpg","inglaterra.jpg","observacion.jpg",""];queW=["Por qué se recuerda a Darwin hoy en día?","Que es la teoría de la evolución?","Ubicación de donde se publico el libro.","Nace de un paso fundamental de la Investigación.",""];altW=["","","","",""];c=[47,108,51,70,0];
var auW=["","","","",""];
var actMaxWidth="600"; actMaxHeight="300";indexG=0;profG=0;dirMedia="ordenar-palabras_resources/media/"; textBNext="";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];alterW=[];
