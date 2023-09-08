//Principales
const body = document.getElementById("contenBody");
const header = document.querySelector("header");
//Globales
const headerTagA = header.getElementsByTagName("a");
//header
const aHDLogo = headerTagA[0];
const aHDTienda = headerTagA[1];
const aHDSuscripcion = headerTagA[2];
const aHDEmpresas = headerTagA[3];
const aHDNosotros = headerTagA[4];
const aHDContacto = headerTagA[5];
const aHDTlf = headerTagA[6];
const aHDInicio = headerTagA[7];
const aHDCarro = headerTagA[10];
let imgCar = aHDCarro.children[0];

const cantItems = document.querySelector('#cantItems')

let compraLS = JSON.parse(localStorage.getItem('cafe'))
console.log(compraLS);
//main - section - div contentProducts
const secDivProducts = document.getElementById("content1DivProd");
const divProducts = document.getElementById("content2Products");


//Verificar LS -> user
if (localStorage.getItem("user")) {
  //valueOf('invitado')
  headerTagA[7].textContent = `Bienvenido`;
} else {
  headerTagA[7].textContent = `Iniciar sesion`;
}

//Funcion asignar atributos
function setAttributes(elemento, atrib) {
  for (const key in atrib) {
    elemento.setAttribute(key, atrib[key]);
  }
}

//Head
setAttributes(aHDLogo, { href: "../../index.html" });
setAttributes(aHDTienda, { href: "../../pages/tienda/testTienda.html" });
setAttributes(aHDSuscripcion, {
  href: "../../pages/suscripcion/testSuscripcion.html",
});
setAttributes(aHDEmpresas, { href: "../../pages/empresas/testEmpresas.html" });
setAttributes(aHDNosotros, { href: "../../pages/nosotros/testNosotros.html" });
setAttributes(aHDContacto, { href: "../../pages/contacto/testContacto.html" });
setAttributes(aHDTlf, { href: "tel:+34 919 49 05 18" });
setAttributes(aHDInicio, {
  href: "../../pages/login/login.html",
  target: "_blank",
});
