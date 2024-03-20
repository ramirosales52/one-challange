function encriptar() {
  document.getElementById("no_msj").style.display = "none";
  let texto_a_encriptar = document.getElementById("encriptador").value;
  
  let texto_encriptado = "";
  
  for (let i = 0; i < texto_a_encriptar.length; i++) {
    if(texto_a_encriptar[i] === "a"){
      texto_encriptado += "ai";
    }
    else if(texto_a_encriptar[i] === "e"){
      texto_encriptado += "enter";
    }
    else if(texto_a_encriptar[i] === "i"){
      texto_encriptado += "imes";
    }
    else if(texto_a_encriptar[i] === "o"){
      texto_encriptado += "ober";
    }
    else if(texto_a_encriptar[i] === "u"){
      texto_encriptado += "ufat";
    }
    else{
      texto_encriptado += texto_a_encriptar[i];
    }
    document.getElementById("texto_encriptado").value = texto_encriptado;
    document.getElementById("msj").style.display = "flex";
  }
}

function desencriptar() {
  document.getElementById("no_msj").style.display = "none";
  let texto_a_desencriptar = document.getElementById("encriptador").value;

  let texto_desencriptado = "";

  for (let i = 0; i < texto_a_desencriptar.length; i++) {
      if (texto_a_desencriptar.slice(i, i + 2) === "ai") {
          texto_desencriptado += "a";
          i++; 
      } else if (texto_a_desencriptar.slice(i, i + 5) === "enter") {
          texto_desencriptado += "e";
          i += 4; 
      } else if (texto_a_desencriptar.slice(i, i + 4) === "imes") {
          texto_desencriptado += "i";
          i += 3; 
      } else if (texto_a_desencriptar.slice(i, i + 4) === "ober") {
          texto_desencriptado += "o";
          i += 3; 
      } else if (texto_a_desencriptar.slice(i, i + 4) === "ufat") {
          texto_desencriptado += "u";
          i += 3; 
      } else {
          texto_desencriptado += texto_a_desencriptar[i];
      }
  }

  document.getElementById("texto_encriptado").value = texto_desencriptado;
  document.getElementById("msj").style.display = "flex";
}

function copiar() {
  var copia = document.getElementById("texto_encriptado").value;
  document.getElementById("encriptador").value = copia;
}


