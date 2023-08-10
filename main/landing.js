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
let aHDInicio = headerTagA[6];
let aHDCarro = headerTagA[9];
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
//Main - section4
let articlesSection4 = mainTagSection[3].getElementsByTagName("article");
let art1Section4 = articlesSection4[0];
let art2Section4 = articlesSection4[1];
let art3Section4 = articlesSection4[2];

let art1Arrow1 = art1Section4.querySelector("img");
let art2Arrow2 = art2Section4.querySelector("img");
let art3Arrow3 = art3Section4.querySelector("img");



//Funcion asignar atributos
function setAttributes(elemento, atrib) {
  for (const key in atrib) {
    elemento.setAttribute(key, atrib[key]);
    return elemento;
  }
}

//Funcion de refrescar pagina
function reload() {
  location.reload();
}

//Head
setAttributes(aHDLogo, { href: "index.html", target: "self" });
setAttributes(aHDTienda, {
  href: "pages/tienda/testTienda.html",
  target: "_blank",
});
setAttributes(aHDSuscripcion, {
  href: "pages/suscripcion/testSuscripcion.html",
  target: "_blank",
});
setAttributes(aHDEmpresas, {
  href: "pages/empresas/testEmpresas.html",
  target: "_blank",
});
setAttributes(aHDNosotros, {
  href: "pages/nosotros/testNosotros.html",
  target: "_blank",
});
setAttributes(aHDContacto, {
  href: "pages/contacto/testContacto.html",
  target: "_blank",
});
setAttributes(aHDInicio, { href: "pages/login/login.html", target: "_blank" });
setAttributes(aHDCarro, {
  href: "pages/carro/testCarro.html",
  target: "_blank",
});
//main - section 1
setAttributes(sec1Btn1, {
  href: "pages/origen/testOrigen.html",
  target: "_blank",
});
setAttributes(sec1Btn2, {
  href: "pages/tienda/testTienda.html",
  target: "_blank",
});


//FAQ - Parrafos
let flag = false;
function deployFAQ(param) {
  let getPrf = document.getElementById(`${param}`);
  if (flag){
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

    return flag = false;
  }
  else  {
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

    return flag = true;
  } 

}

  
art1Arrow1.addEventListener('click',()=>{
  if (flag==true){
    art1Arrow1.style =`cursor:pointer;transition-property: rotate;transition-duration: .7s; rotate:180deg`
   
  }else{
    art1Arrow1.style =`cursor:pointer;transition-property: rotate;transition-duration: .7s; rotate:360deg`
  }
})
art2Arrow2.addEventListener('click',()=>{
  if (flag==true){
    art2Arrow2.style =`cursor:pointer;transition-property: rotate;transition-duration: .7s; rotate:180deg`
   
  }else{
    art2Arrow2.style =`cursor:pointer;transition-property: rotate;transition-duration: .7s; rotate:360deg`
  }
})
art3Arrow3.addEventListener('click',()=>{
  if (flag==true){
    art3Arrow3.style =`cursor:pointer;transition-property: rotate;transition-duration: .7s; rotate:180deg`
   
  }else{
    art3Arrow3.style =`cursor:pointer;transition-property: rotate;transition-duration: .7s; rotate:360deg`
  }
})
/* art1Point1.addEventListener(
  "click",
  () => tal() */

/* .style=`opacity: 1;
    transition: opacity 0.5s ease-in-out;
    height:max-content;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #2B2A2B;` */

//Iniciar Api
const iniciarApi = async () => {
  let promise = await fetch("https://cafe-de-altura.vercel.app/api/products");
  let promiseA = await promise.json();

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
}; //END iniciarApi()
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
