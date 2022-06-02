import "diseases.js";
//User Response
var clienteResp = [0.6, 0, 0.2, 0.4, 0, 0, 0, 0, 0, 0.8, 0, 0, 0, 0, 0, 0, 0, 0, 0.6, 0, 0.8, 0.6];

//ASMA
window.getResult_Asma = window.Validar_Asma = function(clienteResp, asma) {
    var i = clienteResp.length;
    if (i != asma.length) return false;

    //LAS VALIDACIONES QUE YA TENIAMOS
    if (clienteResp.length  == 0){
        console.log("Tienes que ingresar algun sintoma!") //if the user dont have any symton
        exit(); //NO SE SI ESTO ES LO MEJOR PARA TERMINAR AHI EL PROCESO
    }
    if (clienteResp.length < 3){
        console.log("No tienes suficientes sintomas para poder hacer un diagnostico") //if the user have few symtons
        exit();
    }
    if (clienteResp.length > 15){
        console.log("Tienes demasiados sintomas, no podermos darte un diagnostico preciso") //if the user have a lot of symtoms
        exit();
    }
    
    while (i--) {
      if (clienteResp[i] !== asma[i]) return false;
    }
    return true;
  };

 //RETURNS RESULT 
 if(getResult_Asma(clienteResp, asma) == true){
     console.log("Tienes asma"); 
 }else{
     console.log("No tienes asma");
     Validar_Amagdilitis(); //Aqui es donde marca que no esta definida
 }

//AMAGDILITIS
window.getResult_Amagdilitis = window.Validar_Amagdilitis = function(clienteResp, amagdilitis) {
    var i = clienteResp.length;
    if (i != amagdilitis.length) return false;
 
    while (i--) {
      if (clienteResp[i] !== amagdilitis[i]) return false;
    }
    return true;
  };
 
if(getResult_Amagdilitis(clienteResp, amagdilitis) == true){
     console.log("Tienes amagdilitis"); 
 }else{
     console.log("No tienes amagdilitis");
     
 }


 //BRONQUITIS
 window.getResult_Bronquitis = window.Validar_Bronquitis = function(clienteResp, bronquitis) {
    var i = clienteResp.length;
    if (i != bronquitis.length) return false;
 
    while (i--) {
      if (clienteResp[i] !== bronquitis[i]) return false;
    }
    return true;
  };
 
if(getResult_Bronquitis(clienteResp, bronquitis) == true){
     console.log("Tienes bronquitis"); 
 }else{
     console.log("No tienes bronquitis");
     
 }


//CANCER DE PULMON
window.getResult_Cancer_Pulmon = window.Validar_Cancer_Pulmon = function(clienteResp, cancer_Pulmon) {
    var i = clienteResp.length;
    if (i != cancer_Pulmon.length) return false;
 
    while (i--) {
      if (clienteResp[i] !== cancer_Pulmon[i]) return false;
    }
    return true;
  };
 
if(getResult_Cancer_Pulmon(clienteResp, cancer_Pulmon) == true){
     console.log("Tienes cancer de pulmon"); 
 }else{
     console.log("No tienes cancer de pulmon");
     
 }

 //COVID 19
 window.getResult_Covid_19 = window.Validar_Covid_19 = function(clienteResp, covid_19) {
    var i = clienteResp.length;
    if (i != covid_19.length) return false;
 
    while (i--) {
      if (clienteResp[i] !== covid_19[i]) return false;
    }
    return true;
  };
 
if(getResult_Covid_19(clienteResp, covid_19) == true){
     console.log("Tienes COVID-19"); 
 }else{
     console.log("No tienes COVID-19");
     
 }


 //ENFISEMA 
 window.getResult_Enfisema = window.Validar_Enfisema = function(clienteResp, enfisema) {
    var i = clienteResp.length;
    if (i != enfisema.length) return false;
 
    while (i--) {
      if (clienteResp[i] !== enfisema[i]) return false;
    }
    return true;
  };
 
if(getResult_Enfisema(clienteResp, enfisema) == true){
     console.log("Tienes enfisema"); 
 }else{
     console.log("No tienes enfisema");
     
 }


 //GRIPE
 window.getResult_Gripe = window.Validar_Gripe = function(clienteResp, gripe) {
    var i = clienteResp.length;
    if (i != gripe.length) return false;
 
    while (i--) {
      if (clienteResp[i] !== gripe[i]) return false;
    }
    return true;
  };
 
if(getResult_Gripe(clienteResp, gripe) == true){
     console.log("Tienes gripe"); 
 }else{
     console.log("No tienes gripe");
     
 }


 //INFLUENZA
 window.getResult_Influenza = window.Validar_Influenza = function(clienteResp, influenza) {
    var i = clienteResp.length;
    if (i != influenza.length) return false;
 
    while (i--) {
      if (clienteResp[i] !== influenza[i]) return false;
    }
    return true;
  };
 
if(getResult_Influenza(clienteResp, influenza) == true){
     console.log("Tienes influenza"); 
 }else{
     console.log("No tienes influenza");
     
 }

 //NEUMONIA
 window.getResult_Neumonia = window.Validar_Neumonia = function(clienteResp, neumonia) {
    var i = clienteResp.length;
    if (i != neumonia.length) return false;
 
    while (i--) {
      if (clienteResp[i] !== neumonia[i]) return false;
    }
    return true;
  };
 
if(getResult_Neumonia(clienteResp, neumonia) == true){
     console.log("Tienes neumonia"); 
 }else{
     console.log("No tienes neumonia");
     
 }

 //RINITIS
 window.getResult_Rinitis = window.Validar_Rinitis = function(clienteResp, rinitis) {
    var i = clienteResp.length;
    if (i != rinitis.length) return false;
 
    while (i--) {
      if (clienteResp[i] !== rinitis[i]) return false;
    }
    return true;
  };
 
if(getResult_Rinitis(clienteResp, rinitis) == true){
     console.log("Tienes rinitis"); 
 }else{
     console.log("No tienes rinitis");
     
 }