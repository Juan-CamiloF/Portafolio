//DOM
const cssColores = document.querySelectorAll(".cssColor");
const totalColores = cssColores.length;
const btnColor = document.getElementById("btnColor");
const divColor = document.querySelectorAll(".color");
const span = document.querySelectorAll(".xColor");

//Declaracion de variables
let engranaje = 0;

//Menu de colores
btnColor.addEventListener("click", () => {
  if (engranaje == 0) {
    espacioColores.className = "espacioColores visible";
    btnColor.className = "fas fa-times";
    engranaje = 1;
  } else {
    espacioColores.className = "espacioColores invisible";
    btnColor.className = "fas fa-cog fa-spin";
    engranaje = 0;
  }
});

//Cambio de color y guardarlo
async function color(color) {
  for (let i = 0; i < totalColores; i++) {
    if (color == cssColores[i].getAttribute("title")) {
      localStorage.setItem("color",color);
      await cssColores[i].removeAttribute("disabled");
      console.log('simon')
      span[i].innerHTML = "&#10006";
    } else {
      await cssColores[i].setAttribute("disabled", true);
      console.log('simon')
      span[i].innerHTML = "";
    }
  }
}

//Capturar color guardado y usarlo
if(localStorage.getItem("color")){
    color(localStorage.getItem("color")); 
}