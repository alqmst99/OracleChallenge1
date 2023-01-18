alert("Welcome to the encripter")
var btnE= document.querySelector(".btn-encr");
var btnD= document.querySelector(".btn-descr");
var objet = document.querySelector(".container-img");
var h3= document.querySelector(".text-h3");
var parr= document.querySelector(".text-p");
var txt= document.querySelector(".resultado");
var res= document.querySelector(".textoE")
function textoR(){
    var area = document.querySelector(".text-enc")

    return area.value;
}
function encriptar(){
    ocultar();
    areaT= textoR();
    txt.textContent = encriptarTxt(areaT);
    alert("The mesaje is Encript")
}
function desencriptar(){
    ocultar();
    var area = textoR();
    txt.textContent = desencriptarTxt(area);
   alert("The mesaje is Desencript")
}
function encriptarTxt(mesaje){
    var texto = mesaje;
    var textoF="";
    for (var i= 0; i < texto.length; i++){
        if (texto[i]=="a"){
            textoF = textoF + "ai";
        }
        else if (texto[i]=="e"){
            textoF = textoF + "enter";
        }
        else if (texto[i]=="i"){
            textoF = textoF + "imes";
        }
        else if (texto[i]=="o"){
            textoF = textoF + "over";
        }
        else if (texto[i]=="u"){
            textoF = textoF + "ufat";
        }
        else{
            textoF = textoF + texto[i];
        }
       
    }
    return textoF;
}
function desencriptarTxt(mesaje){
    var texto = mesaje;
    var textoF="";
    for (var i= 0; i < texto.length; i++){
        if (texto[i]=="a"){
            textoF = textoF + "a";
            i= i + 1;
        }
        else if (texto[i]=="e"){
            textoF = textoF + "e";
            i= i + 4;
        }
        else if (texto[i]=="i"){
            textoF = textoF + "i";
            i= i + 3;
        }
        else if (texto[i]=="o"){
            textoF = textoF + "o";
            i= i + 3;
        }
        else if (texto[i]=="u"){
            textoF = textoF + "u";
            i= i + 3;
        }
        else{
            textoF = textoF + texto[i];
        }
       
    }
    return textoF;
}

function ocultar(){
    objet.classList.add("ocultar");
    h3.classList.add("ocultar"),
    parr.classList.add("ocultar")
    res.classList.remove("ocultar")
}
function copy(){
    var parr= document.querySelector(".resultado").innerHTML;
    navigator.clipboard.writeText(parr);
    alert("Text Copy!")
}