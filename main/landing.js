//Principales
let body = document.getElementById("contenBody");
let header = document.querySelector("header");
let main = document.getElementById("contenMain");

//Globales
let headerTagA = header.getElementsByTagName("a");
let mainTagSection = main.getElementsByTagName("section");
let mainArticle = main.getElementsByTagName("article");
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
//Main - section1
let mainSec1 = mainTagSection[0];
let mainSec2Card = mainTagSection[1];
let mainSec3Wrap = mainTagSection[2];
let mainSec4FAQ = mainTagSection[3];
let mainSec5Feature = mainTagSection[4];
let mainSec6Form = mainTagSection[5];
//Main - section2 - Botones
let sec1Btn1 = document.getElementById("mainLink1");
let sec1Btn2 = document.getElementById("mainLink2");
//Main - section3
let artImagenes = mainArticle[3];
let artTagAtienda = mainTagSection[2].querySelector("a");
console.log(artTagAtienda);
//Main - section4
let articlesSection4 = mainTagSection[3].getElementsByTagName("article");
let art1Section4 = articlesSection4[0];
let art2Section4 = articlesSection4[1];
let art3Section4 = articlesSection4[2];
//Main - section4 - desplegables FAQ
let art1Arrow1 = art1Section4.querySelector("img");
let art2Arrow2 = art2Section4.querySelector("img");
let art3Arrow3 = art3Section4.querySelector("img");
let section4TagA = mainTagSection[3].querySelector("a");
//Main - section5
let sec5TagA = mainTagSection[4].querySelector("a");
//Main - section6
let sec6TagsA = mainTagSection[5].querySelectorAll("a");
let sec6TagA1 = sec6TagsA[0]
let sec6TagA2 = sec6TagsA[1] // privacidad
let sec6TagA3 = sec6TagsA[2] // terminos

//Footer
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

//FAQ - Parrafos
let flag = false; //Control FAQ viene con css > .labelPrf - opacity 0
function deployFAQ(param) {
  let getPrf = document.getElementById(`${param}`);
  if (flag) {
    getPrf.style = `transition-property: height, opacity;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    height:0px;
    opacity: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #2B2A2B;`;
    return (flag = false);
  } else {
    getPrf.style = `transition-property: height, opacity;
    transition-duration: 0.6s;
    transition-timing-function: ease-in-out;
    height:40px;
    opacity: 1;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #2B2A2B`;
    return (flag = true);
  }
}

//Evento para flechas FAQ
art1Arrow1.addEventListener("click", () => {
  if (flag == true) {
    art1Arrow1.style = `cursor:pointer;transition-property: rotate;transition-duration: .7s; rotate:180deg`;
  } else {
    art1Arrow1.style = `cursor:pointer;transition-property: rotate;transition-duration: .7s; rotate:360deg`;
  }
});
art2Arrow2.addEventListener("click", () => {
  if (flag == true) {
    art2Arrow2.style = `cursor:pointer;transition-property: rotate;transition-duration: .7s; rotate:180deg`;
  } else {
    art2Arrow2.style = `cursor:pointer;transition-property: rotate;transition-duration: .7s; rotate:360deg`;
  }
});
art3Arrow3.addEventListener("click", () => {
  if (flag == true) {
    art3Arrow3.style = `cursor:pointer;transition-property: rotate;transition-duration: .7s; rotate:180deg`;
  } else {
    art3Arrow3.style = `cursor:pointer;transition-property: rotate;transition-duration: .7s; rotate:360deg`;
  }
});

//Iniciar Api
const iniciarApi = async () => {
  let promise = await fetch("https://cafe-de-altura.vercel.app/api/products");
  let promiseA = await promise.json();

//Crear producto
  const getProducts = async () => {
    promiseA.products.forEach((elemento, i) => {

      if ((i >= 0 && i < 4) && (elemento.available==true)) {
        let urlImg = elemento.img_url;
        let div = document.createElement("div");
        let pName = document.createElement("p");
        let pPrice = document.createElement("p");
        let img = document.createElement("img");
        let a = document.createElement("a");

        pName.innerText = elemento.brand;
        pPrice.innerText = `${elemento.price},00 €`;
        a.innerText = `Añadir`;

        setAttributes(div, { class: `bagsHover bagsBorde` });
        setAttributes(img, { src: `${urlImg}`, class: "bagsImg" });
        setAttributes(pName, { class: "bags1Prf" });
        setAttributes(pPrice, { class: "bags2Prf" });
        setAttributes(a, { class: "bagsLink", id: `${elemento.id}` });
        artImagenes.appendChild(div);
        div.appendChild(img);
        div.appendChild(pName);
        div.appendChild(pPrice);
        div.appendChild(a);

        if (elemento.available == false) {
                pName.innerText = elemento.brand;
                pPrice.innerText = `${elemento.price},00 €`;
                a.innerText = `Agotado`;
                setAttributes(div, {class: `bagsHover_Agotado bagsBorde_Agotado` });
                setAttributes(a, { class: "bagsLink_Agotado", id: `${elemento.id}` });

               
        }

      }
    });

    console.log(promiseA);
  };//END getProducts

  getProducts();
 
}; //END iniciarApi()



/* 
  //Crear producto
  const getProducts = async () => {
    promiseA.products.forEach((elemento, i) => {
      if (i >= 0 && i < 4) {
        let urlImg = elemento.img_url;
        let div = document.createElement("div");
        let pName = document.createElement("p");
        let pPrice = document.createElement("p");
        let img = document.createElement("img");
        let a = document.createElement("a");

        pName.innerText = elemento.brand;
        pPrice.innerText = `${elemento.price},00 €`;
        a.innerText = `Añadir`;

        setAttributes(div, { class: `bagsHover bagsBorde` });
        setAttributes(img, { src: `${urlImg}`, class: "bagsImg" });
        setAttributes(pName, { class: "bags1Prf" });
        setAttributes(pPrice, { class: "bags2Prf" });
        setAttributes(a, { class: "bagsLink", id: `${elemento.id}` });

        artImagenes.appendChild(div);
        div.appendChild(img);
        div.appendChild(pName);
        div.appendChild(pPrice);
        div.appendChild(a);
      }
    });
  };
  getProducts();
}; //END iniciarApi() */
iniciarApi();

/* 
form.addEventListener("submit", (event) => {
	event.preventDefault();
	const user = {
		name: event.target.name.value,
		age: event.target.age.value	
	}
	console.log(user);
});
*/

//Head
setAttributes(aHDLogo, { href: "index.html" });
setAttributes(aHDTienda, {href: "pages/tienda/testTienda.html",});
setAttributes(aHDSuscripcion, {href: "pages/suscripcion/testSuscripcion.html",});
setAttributes(aHDEmpresas, {href: "pages/empresas/testEmpresas.html",});
setAttributes(aHDNosotros, {href: "pages/nosotros/testNosotros.html",});
setAttributes(aHDContacto, {href: "pages/contacto/testContacto.html",});
setAttributes(aHDTlf, { href: "tel:+34 919 49 05 18" });
setAttributes(aHDInicio, { href: "pages/login/login.html", target: "_blank" });
setAttributes(aHDCarro, {href: "pages/carro/testCarro.html",});
//main - section 1
setAttributes(sec1Btn1, {href: "pages/origen/testOrigen.html",});
setAttributes(sec1Btn2, {href: "pages/tienda/testTienda.html",});
//main - section 3
setAttributes(artTagAtienda, {href: "pages/tienda/testTienda.html",});
//main - section 4
setAttributes(section4TagA, {href: "pages/contacto/testContacto.html",});
//main - section 5
setAttributes(sec5TagA, {href: "https://www.google.com/maps/dir//m25+space/@40.4062952,-3.7130099,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd4229925e14f093:0xaa4035f58111fdbb!2m2!1d-3.6754957!2d40.4373922?entry=ttu",target: "_blank",});
//main - section 6
setAttributes(sec6TagA1, {href: "pages/tienda/testTienda.html",});
setAttributes(sec6TagA2, {href: "pages/privacidad/testPrivacidad.html",});
setAttributes(sec6TagA3, {href: "pages/terminos/testTerminos.html",});

//Footer
setAttributes(aFtLogo, { href: "index.html" });
setAttributes(aFtTlf, { href: "tel:+34 919 49 05 18" });
setAttributes(aFtMail, { href: "mailto:hola@cafedealtura.com" });
setAttributes(aFtTienda, { href: "pages/tienda/testTienda.html" });
setAttributes(aFtSuscripcion, {href: "pages/suscripcion/testSuscripcion.html",});
setAttributes(aFtEmpresas, { href: "../../pages/empresas/testEmpresas.html" });
setAttributes(aFtNosotros, { href: "../../pages/nosotros/testNosotros.html" });
setAttributes(aFtcontacto, { href: "../../pages/contacto/testContacto.html" });
setAttributes(aFtPoliPriv, {href: "../../pages/privacidad/testPrivacidad.html",});
setAttributes(aFtPoliCook, { href: "../../pages/cookies/testCookies.html" });
setAttributes(aFtTerminos, { href: "../../pages/terminos/testTerminos.html" });
