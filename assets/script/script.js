//DOM y Variables
const inicio = document.getElementById("inicio");
const sobreMi = document.getElementById("sobreMi");
const proyectos = document.getElementById("proyectos");
const contacto = document.getElementById("contacto");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

const btnIcon = document.getElementById("icono");
const barra = document.getElementById("barra");
let i = 0;



//Local Storage Ubicación
const ubicacion = localStorage.getItem("lugar");
//Si no hay nada en el localStorage
if (!ubicacion) {
  inicio.style.display = "";
  sobreMi.style.display = "none";
  proyectos.style.display = "none";
  contacto.style.display = "none";
  localStorage.setItem("lugar", "inicio");
}
//Si hay algo dentro del localStorage
if (ubicacion) {
  if (ubicacion == "inicio") {
    sobreMi.style.display = "none";
    proyectos.style.display = "none";
    contacto.style.display = "none";
  } else if (ubicacion == "sobreMi") {
    inicio.style.display = "none";
    proyectos.style.display = "none";
    contacto.style.display = "none";
  } else if (ubicacion == "proyectos") {
    inicio.style.display = "none";
    sobreMi.style.display = "none";
    contacto.style.display = "none";
  } else {
    inicio.style.display = "none";
    sobreMi.style.display = "none";
    proyectos.style.display = "none";
  }
}

//Eventos

btn1.addEventListener("click", () => {
  localStorage.setItem("lugar", "inicio");
  inicio.style.display = "";
  sobreMi.style.display = "none";
  proyectos.style.display = "none";
  contacto.style.display = "none";
});
btn2.addEventListener("click", () => {
  localStorage.setItem("lugar", "sobreMi");
  inicio.style.display = "none";
  sobreMi.style.display = "";
  proyectos.style.display = "none";
  contacto.style.display = "none";
});
btn3.addEventListener("click", () => {
  localStorage.setItem("lugar", "proyectos");
  inicio.style.display = "none";
  sobreMi.style.display = "none";
  proyectos.style.display = "";
  contacto.style.display = "none";
});
btn4.addEventListener("click", () => {
  localStorage.setItem("lugar", "contacto");
  inicio.style.display = "none";
  sobreMi.style.display = "none";
  proyectos.style.display = "none";
  contacto.style.display = "";
});

//Evento de menú

btnIcon.addEventListener("click", () => {
  if (i == 0) {
    barra.className = "barra dos";
    btnIcon.innerHTML= `&#10006`;
    i = 1;
  } else {
    barra.classList.remove("dos");
    barra.className = "barra uno";
    btnIcon.innerHTML = `&#9776`;
    i = 0;
  }
  cerrarBarra(i);
});
window.addEventListener("resize", () => {
  if (screen.width > 750) {
    i = 0;
    barra.classList.remove("dos");
    barra.className = "barra uno";
  }
});

//Cerrar el menú cuando se de click

function cerrarBarra(estado) {
  if (estado == 1) {
    btn1.addEventListener("click", barraCerrada);
    btn2.addEventListener("click", barraCerrada);
    btn3.addEventListener("click", barraCerrada);
    btn4.addEventListener("click", barraCerrada);
  }
}
function barraCerrada(){
  barra.classList.remove("dos");
  barra.className = "barra uno";
  btnIcon.innerHTML = `&#9776`;
  i=0;
}