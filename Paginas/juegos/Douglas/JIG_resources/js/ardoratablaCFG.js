//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=10;
var score=0; scoreMax=1; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFFFF"; colorButton="#808080"; colorText="#000000"; colorSele="#008080";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=3; messageOk="Congratulations you made it"; messageTime="You ran out of time try again"; messageError="Wrong try again"; messageErrorG="Wrong try again"; messageAttempts="Surely you know the answer?, try again"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008080"; borderTime="#800080";borderError="#800080"; borderAttempts="#800080";
var d=[[0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,1,1,1]];
var vCell=[["0","0","0","0","0","0","0","0","0","0","0"],["0","1","1","1","1","1","1","1","1","1","1"],["0","1","1","1","1","1","1","1","1","1","1"],["0","1","1","1","1","1","1","1","1","1","1"]];
var a0Cell=[["VkVSQlM=","QWRk","QWdyZWU=","QmU=","QmVjb21l","QW5zd2Vy","QXJyaXZl","QmVnaW4=","Qml0ZQ==","Qmxvdw==","QnJlYWs="],["SU5GSU5JVElWRQ==","QWRk","QWdyZWU=","QmU=","QmVjb21l","QW5zd2Vy","QXJyaXZl","QmVnaW4=","Qml0ZQ==","Qmxvdw==","QnJlYWs="],["UEFTVCBTSU1QTEU=","QWRkZWQ=","QWdyZWVk","d2FzL3dlcmU=","QmVjYW1l","QW5zd2VyZWQ=","QXJyaXZlZA==","QmVnYW4=","Qml0","Qmxldw==","QnJva2U="],["UEFTVCBQQVJUSUNJUExF","QWRkZWQ=","QWdyZWVk","QmVlbg==","QmVjb21l","QW5zd2VyZWQ=","QXJyaXZlZA==","QmVndW4=","Qml0dGVu","Qmxvd24=","QnJva2Vu"]];
var c=[[5,3,5,2,6,6,6,5,4,4,5],[10,3,5,2,6,6,6,5,4,4,5],[11,5,6,8,6,8,7,5,3,4,5],[15,5,6,4,6,8,7,5,6,5,6]];
var c1=[[0,0,0,0,0,0,0,0,0,0,5],[0,3,0,0,6,0,6,5,4,4,5],[0,5,6,0,6,0,7,5,3,4,5],[0,5,0,0,0,8,7,5,6,5,6]];
var c2=[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0]];
var c3=[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0]];
var a1Cell=[["VkVSQlM=","QWRk","QWdyZWU=","QmU=","QmVjb21l","QW5zd2Vy","QXJyaXZl","QmVnaW4=","Qml0ZQ==","Qmxvdw==","QnJlYWs="],["SU5GSU5JVElWRQ==","QWRk","QWdyZWU=","QmU=","QmVjb21l","QW5zd2Vy","QXJyaXZl","QmVnaW4=","Qml0ZQ==","Qmxvdw==","QnJlYWs="],["UEFTVCBTSU1QTEU=","QWRkZWQ=","QWdyZWVk","d2FzL3dlcmU=","QmVjYW1l","QW5zd2VyZWQ=","QXJyaXZlZA==","QmVnYW4=","Qml0","Qmxldw==","QnJva2U="],["UEFTVCBQQVJUSUNJUExF","QWRkZWQ=","QWdyZWVk","QmVlbg==","QmVjb21l","QW5zd2VyZWQ=","QXJyaXZlZA==","QmVndW4=","Qml0dGVu","Qmxvd24=","QnJva2Vu"]];
var a2Cell=[["VkVSQlM=","QWRk","QWdyZWU=","QmU=","QmVjb21l","QW5zd2Vy","QXJyaXZl","QmVnaW4=","Qml0ZQ==","Qmxvdw==","QnJlYWs="],["SU5GSU5JVElWRQ==","QWRk","QWdyZWU=","QmU=","QmVjb21l","QW5zd2Vy","QXJyaXZl","QmVnaW4=","Qml0ZQ==","Qmxvdw==","QnJlYWs="],["UEFTVCBTSU1QTEU=","QWRkZWQ=","QWdyZWVk","d2FzL3dlcmU=","QmVjYW1l","QW5zd2VyZWQ=","QXJyaXZlZA==","QmVnYW4=","Qml0","Qmxldw==","QnJva2U="],["UEFTVCBQQVJUSUNJUExF","QWRkZWQ=","QWdyZWVk","QmVlbg==","QmVjb21l","QW5zd2VyZWQ=","QXJyaXZlZA==","QmVndW4=","Qml0dGVu","Qmxvd24=","QnJva2Vu"]];
var a3Cell=[["VkVSQlM=","QWRk","QWdyZWU=","QmU=","QmVjb21l","QW5zd2Vy","QXJyaXZl","QmVnaW4=","Qml0ZQ==","Qmxvdw==","QnJlYWs="],["SU5GSU5JVElWRQ==","QWRk","QWdyZWU=","QmU=","QmVjb21l","QW5zd2Vy","QXJyaXZl","QmVnaW4=","Qml0ZQ==","Qmxvdw==","QnJlYWs="],["UEFTVCBTSU1QTEU=","QWRkZWQ=","QWdyZWVk","d2FzL3dlcmU=","QmVjYW1l","QW5zd2VyZWQ=","QXJyaXZlZA==","QmVnYW4=","Qml0","Qmxldw==","QnJva2U="],["UEFTVCBQQVJUSUNJUExF","QWRkZWQ=","QWdyZWVk","QmVlbg==","QmVjb21l","QW5zd2VyZWQ=","QXJyaXZlZA==","QmVndW4=","Qml0dGVu","Qmxvd24=","QnJva2Vu"]];
var wordsGame="SklH"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cols=4; var rows=11;var showC=true;
