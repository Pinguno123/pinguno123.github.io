//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=100; timeIni=100; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=3;
var score=0; scoreMax=3; scoreInc=3; scoreDec=3
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Iniciar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#E36265"; colorButton="#8E3779"; colorText="#000000"; colorSele="#B04F62";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="'Arial Black', Gadget, sans-serif";
var timeOnMessage=6; messageOk="Yeiii, felicidades, lo lograste :D"; messageTime="Se está agotando el tiempooooo :O"; messageError="Ni modo, inténtalo de nuevo :'("; messageErrorG="Ni modo, inténtalo de nuevo :'("; messageAttempts="Lo lamento, llegaste al límite de intentos :/"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_self"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#D96F3C";borderError="#298AEB"; borderAttempts="#5BB96B";
var wordsGame="anVlZ29fZmVyaWE="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["wr9RdcOpIGVzIHNvbHV0bz8=", "U3VzdGFuY2lhIHF1ZSBzZSBlbmN1ZW50cmEgZGlzcGVyc2EgZW4gbGEgc29sdWNpw7NuLiBVc3VhbG1lbnRlIHNvbiBsb3MgcXVlIHNlIGVuY3VlbnRyYW4gZW4gbWVub3IgcHJvcG9yY2nDs24="],["wr9RdcOpIGVzIHNvbHZlbnRlPw==", "VXN1YWxtZW50ZSBzZSBlbmN1ZW50cmEgZW4gbWF5b3IgcHJvcG9yY2nDs24geSBoYWNlIHBvc2libGUgcXVlIHNlIGRpc3VlbHZhIGVsIHNvbHV0bw=="],["wr9RdcOpIGVzIHVuYSBzdXNwZW5zacOzbj8=", "TWV6Y2xhIGhldGVyb2fDqW5lYSBjdXlhcyBwYXJ0w61jdWxhcyBzdWVsZW4gYXNlZGltZW50YXIgeSBwb3IgZXNvIHN1ZWxlbiBzZXIgZmlsdHJhZGFzIGNvbiBmYWNpbGlkYWQ="],["RGVmaW5pY2nDs24gZGUgY29sb2lkZQ==", "TWV6Y2xhIGhldGVyb2fDqW5lYSBmb3JtYWRhIHBvciBwYXJ0w61jdWxhcyBtaWNyb3Njw7NwaWNhcyBsbGFtYWRhcyBtaWNlbGFz"],["wr9RdcOpIGVzIHNvbHViaWxpZGFkPw==", "Q2FwYWNpZGFkIGRlbCBzb2x2ZW50ZSBwYXJhIGRpc29sdmVyIGEgb3RyYSBkZSBtZW5vciBwcm9wb3JjacOzbiBsbGFtYWRhIHNvbHV0bw=="],["U29sdWNpw7NuIHNhdHVyYWRh", "Y3VhbmRvIHVuIHNvbHZlbnRlIGxsZWdhIGEgc3UgcHVudG8gZGUgc2F0dXJhY2nDs24geSB5YSBubyBwdWVkZSBkaXNvbHZlciBtw6FzIHNvbHV0bw=="],["U29sdWNpw7NuIGluc2F0dXJhZGE=", "Q3VhbmRvIGxhIGNhbnRpZGFkIGRlIHNvbHV0byBxdWUgc2UgZGlzdWVsdmUgZXMgbWVub3IgYWwgbmVjZXNhcmlvIHBhcmEgbGxlZ2FyIGEgc2F0dXJhcnNl"],["wr9Qb3IgcXXDqSBlc3TDoW4gZm9ybWFkYXMgbGFzIHNvbHVjaW9uZXM/", "VW4gc29sdXRvIHkgdW4gc29sdmVudGU="],["RWplbXBsbyBkZSBjb2xvaWRlcw==", "TmllYmxhIHkgZ2VsYXRpbmE="],["wr9RdcOpIGVzIG1vbGFyaWRhZD8=", "TsO6bWVybyBkZSBtb2xlcyBkZSBzb2x1dG8gZGlzdWVsdG9zIGVuIHVuIGxpdHJvIGRlIHNvbHVjacOzbg=="]];
var c=[[15,108],[17,84],[23,99],[21,72],[20,78],[17,83],[19,90],[39,23],[19,17],[18,59]];
var con1=["¿Qué es soluto?","¿Qué es solvente?","¿Qué es una suspensión?","Definición de coloide","¿Qué es solubilidad?","Solución saturada","Solución insaturada","¿Por qué están formadas las soluciones?","Ejemplo de coloides","¿Qué es molaridad?"];
var con2=["Sustancia que se encuentra dispersa en la solución. Usualmente son los que se encuentran en menor proporción","Usualmente se encuentra en mayor proporción y hace posible que se disuelva el soluto","Mezcla heterogénea cuyas partículas suelen asedimentar y por eso suelen ser filtradas con facilidad","Mezcla heterogénea formada por partículas microscópicas llamadas micelas","Capacidad del solvente para disolver a otra de menor proporción llamada soluto","cuando un solvente llega a su punto de saturación y ya no puede disolver más soluto","Cuando la cantidad de soluto que se disuelve es menor al necesario para llegar a saturarse","Un soluto y un solvente","Niebla y gelatina","Número de moles de soluto disueltos en un litro de solución"];
var sel1=""; join1=[]; join2=[];
