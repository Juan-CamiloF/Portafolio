
//Secciones
const secciones = document.querySelectorAll(".seccion");
//Funcion de Secciones
function funcionSecciones(e) {
  for (let i = 0; i < secciones.length; i++) {
    if (e == secciones[i].id) {
      secciones[i].className = `${e}`;
      localStorage.setItem('ubicacion',e);
    } else {
      secciones[i].className = `invisible`;
    }
  }
}
//Traer del localStorage la ultima ubicacion
function funcionLocalStorage(){
  if(localStorage.getItem('ubicacion')){
    funcionSecciones(localStorage.getItem('ubicacion'))
  }
}
//Variables para la barra de menu
const btnIcon = document.getElementById("icono");
const barra = document.getElementById("barra");
let i = 0;
//Evento de menú
btnIcon.addEventListener("click", () => {
  if (i == 0) {
    barra.className = "barra dos";
    btnIcon.innerHTML = `&#10006`;
    i = 1;
  } else {
    barra.classList.remove("dos");
    barra.className = "barra uno";
    btnIcon.innerHTML = `&#9776`;
    i = 0;
  }
  cerrarBarra(i);
});
//Cerrar el menu si esta abierto y el tamaño aumenta
window.addEventListener("resize", () => {
  if (screen.width > 750) {
    i = 0;
    barra.classList.remove("dos");
    barra.className = "barra uno";
  }
});

//Cerrar el menú cuando se de click a un btn
const btn = document.querySelectorAll('.btn');
function cerrarBarra(estado) {
  if (estado == 1) {
    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener('click',barraCerrada)
    }
  }
}
//Funcion para quitar el menu
function barraCerrada() {
  barra.classList.remove("dos");
  barra.className = "barra uno";
  btnIcon.innerHTML = `&#9776`;
  i = 0;
}
//Llamar la funcion del localStorageS
funcionLocalStorage()