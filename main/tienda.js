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
let aHDInicio = headerTagA[6];
let aHDCarro = headerTagA[9];
//main - section - div contentProducts
let secDivProducts = document.getElementById('content1DivProd')
let divProducts = document.getElementById('content2Products')


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

//Head
setAttributes(aHDLogo, { href: "../../index.html", target: "_sef" });
setAttributes(aHDTienda, {
  href: "../../pages/tienda/testTienda.html",
  target: "_sef",
});
setAttributes(aHDSuscripcion, {
  href: "../../pages/suscripcion/testSuscripcion.html",
  target: "_sef",
});
setAttributes(aHDEmpresas, {
  href: "../../pages/empresas/testEmpresas.html",
  target: "_sef",
});
setAttributes(aHDNosotros, {
  href: "../../pages/nosotros/testNosotros.html",
  target: "_sef",
});
setAttributes(aHDContacto, {
  href: "../../pages/contacto/testContacto.html",
  target: "_sef",
});
setAttributes(aHDInicio, { href: "../../pages/login/login.html", target: "_blank" });
setAttributes(aHDCarro, {
  href: "../../pages/carro/testCarro.html",
  target: "_sef",
});




//Iniciar Api
const iniciarApi = async () => {
  let promise = await fetch("https://cafe-de-altura.vercel.app/api/products");
  let promiseA = await promise.json();

  //Crear producto
  const getProducts = async () => {
    promiseA.products.forEach((elemento, i) => {
      if (i >= 0 && i < 9) {
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

        divProducts.appendChild(div);
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
