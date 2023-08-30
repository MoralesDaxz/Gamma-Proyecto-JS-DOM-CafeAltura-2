//Principales
let body = document.getElementById("contenBody");
let header = document.querySelector("header");
//Globales
let headerTagA = header.getElementsByTagName("a");
//header
let aHDLogo = headerTagA[0];
let aHDTienda = headerTagA[1];
let aHDSuscripcion = headerTagA[2];
let aHDEmpresas = headerTagA[3];
let aHDNosotros = headerTagA[4];
let aHDContacto = headerTagA[5];
let aHDTlf = headerTagA[6];
let aHDInicio = headerTagA[7];
let aHDCarro = headerTagA[10];
//main - section - div contentProducts
let secDivProducts = document.getElementById("content1DivProd");
let divProducts = document.getElementById("content2Products");
//footer
let footer = document.querySelector("footer");
let tagAfooter = footer.querySelectorAll("a");
let aFtLogo = tagAfooter[0];
let aFtTlf = tagAfooter[1];
let aFtMail = tagAfooter[2];
let aFtTienda = tagAfooter[3];
let aFtSuscripcion = tagAfooter[4];
let aFtEmpresas = tagAfooter[5];
let aFtNosotros = tagAfooter[6];
let aFtcontacto = tagAfooter[7];
let aFtPoliPriv = tagAfooter[8];
let aFtPoliCook = tagAfooter[9];
let aFtTerminos = tagAfooter[10];

if (localStorage.getItem('user')){//valueOf('invitado')
  headerTagA[7].textContent=`Bienvenido`}
else{headerTagA[7].textContent=`Iniciar sesion`}

function setAttributes(elemento, atrib) {
  for (const key in atrib) {
    elemento.setAttribute(key, atrib[key]);
  }
} 

//Funcion de refrescar pagina
function reload() {
  location.reload();
}

//Funcion asignar atributos
function setAttributes(elemento, atrib) {
  for (const key in atrib) {
    elemento.setAttribute(key, atrib[key]);
  }
}

//Iniciar Api
const iniciarApi = async () => {
  let promise = await fetch("https://cafe-de-altura.vercel.app/api/products");
  let promiseA = await promise.json();

  const filterAvailable = promiseA.products.filter((n) => n.available);
  const filterUnAvailable = promiseA.products.filter((n) => n.available == false);

  const orderAvailable = filterAvailable.sort((a, b) => a.price - b.price); // disponible ordenado de menor a mayor por precio
  const orderUnAvailable = filterUnAvailable.sort((a, b) => a.price - b.price);// agotado ordenado de menor a mayor por precio
  const products = orderAvailable.concat(orderUnAvailable) //concatenamos arrays

  //Crear producto
  const getProducts = async () => {
    products.forEach((elemento, i) => {
      if (i >= 0 && i < products.length) { //Controlamos con products.length
        let urlImg = elemento.img_url;
        let div = document.createElement("div");
        let pName = document.createElement("p");
        let pPrice = document.createElement("p");
        let img = document.createElement("img");
        let a = document.createElement("a");

        pName.innerText = elemento.brand;
        pPrice.innerText = `${elemento.price},00 €`;
        a.innerText = `Añadir`;
        a.disabled=true;
        setAttributes(div, { class: `bagsHover bagsBorde` });
        setAttributes(img, { src: `${urlImg}`, class: "bagsImg" });
        setAttributes(pName, { class: "bags1Prf" });
        setAttributes(pPrice, { class: "bags2Prf" });
        setAttributes(a, { class: "bagsLink", id: `${elemento.id}` });
        divProducts.appendChild(div);
        div.appendChild(img);
        div.appendChild(pName);
        div.appendChild(pPrice);
        div.appendChild(a);

        if (elemento.available == false) {
          pName.innerText = elemento.brand;
          pPrice.innerText = `${elemento.price},00 €`;
          a.innerText = `Agotado`;
          setAttributes(div, { class: `bagsHover_Agotado bagsBorde_Agotado` });
          setAttributes(a, { class: "bagsLink_Agotado", id: `${elemento.id}` });
        }
      }
    });

    console.log(promiseA);
  }; //END getProducts

  getProducts();
}; //END iniciarApi()

iniciarApi();

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
setAttributes(aHDCarro, { href: "../../pages/carro/testCarro.html" });
//Footer
setAttributes(aFtLogo, { href: "../../index.html" });
setAttributes(aFtTlf, { href: "tel:+34 919 49 05 18" });
setAttributes(aFtMail, { href: "mailto:hola@cafedealtura.com" });
setAttributes(aFtTienda, { href: "../../pages/tienda/testTienda.html" });
setAttributes(aFtSuscripcion, {
  href: "../../pages/suscripcion/testSuscripcion.html",
});
setAttributes(aFtEmpresas, { href: "../../pages/empresas/testEmpresas.html" });
setAttributes(aFtNosotros, { href: "../../pages/nosotros/testNosotros.html" });
setAttributes(aFtcontacto, { href: "../../pages/contacto/testContacto.html" });
setAttributes(aFtPoliPriv, {
  href: "../../pages/privacidad/testPrivacidad.html",
});
setAttributes(aFtPoliCook, { href: "../../pages/cookies/testCookies.html" });
setAttributes(aFtTerminos, { href: "../../pages/terminos/testTerminos.html" });
