function encriptar() {
  let texto = document.getElementById("txtTexto").value;

  if (texto == "") {
    alert("Error no ingresó ningún texto, vuelva a intentarlo...");
  } else {
    let texto_encriptado = "";
    for (let i = 0; i < texto.length; i++) {
      let caracter = texto.charAt(i);
      switch (caracter) {
        case "a":
          texto_encriptado += "ai";
          break;
        case "e":
          texto_encriptado += "enter";
          break;
        case "i":
          texto_encriptado += "imes";
          break;
        case "o":
          texto_encriptado += "ober";
          break;

        case "u":
          texto_encriptado += "ufat";
          break;

        default:
          texto_encriptado += caracter;
          break;
      }
    }
    eliminarDiv();
    crearTextArea();
    document.getElementById("txtTexto").value = "";
    document.getElementById("encriptado").value = texto_encriptado;
    console.log("El texto encriptado es: " + texto_encriptado);
  }
}
function eliminarDiv() {
  let div = document.getElementById("card_eliminar_hijos");

  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}
function crearTextArea() {
  let div = document.getElementById("card_eliminar_hijos");

  let textarea = document.createElement("textarea");
  let button = document.createElement("button");

  textarea.id = "encriptado";
  textarea.readOnly = true;
  button.id = "copiar";
  button.innerText = "Copiar";
  button.onclick = copiarTexto;
  div.appendChild(textarea);
  div.appendChild(button);
}
function copiarTexto() {
  let textarea = document.getElementById("encriptado");
  let button = document.getElementById("copiar");
  textarea.select();
  document.execCommand("copy");
  document.getSelection().removeAllRanges();
  button.innerText = "Copiado";
  button.style.backgroundColor = "#c6ffde";
  button.style.borderColor = "#0f612f";
  button.onmouseenter = function () {
    button.style.backgroundColor = "#99f7c0";
  };
  button.onmouseleave = function () {
    button.style.backgroundColor = "#c6ffde";
  };
}
function desencriptar() {
  let texto = document.getElementById("txtTexto").value;
  if (texto != "") {
    
    let txtdescifrado = "";
    txtdescifrado = texto.replaceAll("ai", "a");
    txtdescifrado = txtdescifrado.replaceAll("enter", "e");
    txtdescifrado = txtdescifrado.replaceAll("imes", "i");
    txtdescifrado = txtdescifrado.replaceAll("ober", "o");
    txtdescifrado = txtdescifrado.replaceAll("ufat", "u");

    document.getElementById("txtTexto").value = "";
    if (texto == txtdescifrado) {
      alert("El texto ya está desencriptado");
    } else {
      eliminarDiv();
      crearTextArea();
      let textarea = document.getElementById("encriptado");
      textarea.value = txtdescifrado;
    }
  } else {
    alert("Ingrese el texto a desencriptar");
  }
}
