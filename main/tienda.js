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
const imgCar = aHDCarro.children[0];
//main - section - div contentProducts
const secDivProducts = document.getElementById("content1DivProd");
const divProducts = document.getElementById("content2Products");
//footer
const footer = document.querySelector("footer");
const tagAfooter = footer.querySelectorAll("a");
const aFtLogo = tagAfooter[0];
const aFtTlf = tagAfooter[1];
const aFtMail = tagAfooter[2];
const aFtTienda = tagAfooter[3];
const aFtSuscripcion = tagAfooter[4];
const aFtEmpresas = tagAfooter[5];
const aFtNosotros = tagAfooter[6];
const aFtcontacto = tagAfooter[7];
const aFtPoliPriv = tagAfooter[8];
const aFtPoliCook = tagAfooter[9];
const aFtTerminos = tagAfooter[10];

let compraLS = JSON.parse(localStorage.getItem("cafe"));
let compra = JSON.parse(localStorage.getItem("cafe")) || [];
let divCarrito = document.createElement("div");
divCarrito.id = "carrito";
body.appendChild(divCarrito);

aHDCarro.addEventListener("click", () => {
  if (
    divCarrito.classList.contains("hidden") &&
    localStorage.getItem("cafe") !== null
  ) {
    divCarrito.classList.remove("hidden");
  } else {
    divCarrito.classList.add("hidden");
  }
});
//Verificar LS -> user
if (localStorage.getItem("user")) {
  //valueOf('invitado')
  headerTagA[7].textContent = `Bienvenido`;
} else {
  headerTagA[7].textContent = `Iniciar sesion`;
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

if (localStorage.getItem("cafe") != null) {
  imgCar.removeAttribute("src");
  setAttributes(imgCar, { src: "../../img/home/Car-ON.png" });
}

function carritoNew(param) {
  if (localStorage.getItem("cafe") != null) {
    divCarrito.innerHTML = "";
    let carToStore = document.createElement("div");
    let tagA = document.createElement("a");
    let payNow = document.createElement("button");
    let divSvg = document.createElement("div");

    payNow.innerText = "Pagar";
    divCarrito.appendChild(carToStore);
    carToStore.appendChild(tagA);
    carToStore.appendChild(divSvg);
    tagA.appendChild(payNow);
    divSvg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-stack-pop" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2b674c" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M7 9.5l-3 1.5l8 4l8 -4l-3 -1.5" />
      <path d="M4 15l8 4l8 -4" />
      <path d="M12 11v-7" />
      <path d="M9 7l3 -3l3 3" />
    </svg>`;

    setAttributes(carToStore, { id: "carDiv1" });
    setAttributes(divSvg, { id: "divSvg", title: "Ocultar" });
    setAttributes(tagA, { href: "../pages/carro/testCarro.html" });
    setAttributes(payNow, { id: "pay" });
    setAttributes(imgCar, { src: "../../img/home/Car-ON.png" });

    divSvg.addEventListener("click", () => {
      divCarrito.classList.add("hidden");
    });

    for (const i of param) {
      let contentDiv = document.createElement("div");
      let div1 = document.createElement("div");
      let div2 = document.createElement("div");
      let pUnd = document.createElement("p");
      let pName = document.createElement("p");
      let pPrecio = document.createElement("p");
      let btnRetirar = document.createElement("button"); 
      i.forEach((x) => {

        pUnd.innerText = `1 Unidad`;
        pName.innerText = `${x.brand}`;
        pPrecio.innerText = `${x.price},00€`;
        btnRetirar.innerText = `Retirar`;
        btnRetirar.id=x._id
        contentDiv.style = `width:340px;margin-top:40px;border-bottom:solid rgb(227,222,215) 1px;display:flex;flex-direction:row;`;
        div1.style = `height:120px;width:120px;background-image: url('${x.img_url}');background-repeat: no-repeat;background-size: 100%;background-position:center`;
        div2.style = `height:120px;width:220px;display:flex;flex-direction:column;gap:5px;height:auto;justify-content:center;align-items:start;`;
        btnRetirar.style = `margin:0 auto;;width:50px;border-color:rgb(196, 33, 33);text-align:center;font-size:12px;background-color:rgb(163, 27, 27); color:white; border-radius:5px;cursor:pointer`;

        divCarrito.appendChild(contentDiv);
        contentDiv.appendChild(div1);
        contentDiv.appendChild(div2);
        div2.appendChild(pUnd);
        div2.appendChild(pName);
        div2.appendChild(pPrecio);
        div2.appendChild(btnRetirar);

      });
     btnRetirar.addEventListener('click',(event)=>{
        let idEvent = event.target.id;
        let result1 = compra.filter((i) => i[0]._id !== idEvent); 
        compra = [...result1]; //Alimentando array con nuevos objetos
        //compraLS = JSON.parse(localStorage.getItem("cafe"));
        localStorage.setItem("cafe", JSON.stringify(compra)); 
        carritoNew(compra);
       
      }) 
    }
  } /*else {
     aHDCarro.addEventListener("click", () => {
      alert(`Carrito vacio - Realiza un compra`);
    });  
  }*/
} //END carrtoNew
carritoNew(compraLS);
//Iniciar Api
const iniciarApi = async () => {
  let promise = await fetch("https://cafe-de-altura.vercel.app/api/products");
  let promiseA = await promise.json();

  const filterAvailable = promiseA.products.filter((n) => n.available);
  const filterUnAvailable = promiseA.products.filter(
    (n) => n.available == false
  );

  const orderAvailable = filterAvailable.sort((a, b) => a.price - b.price); // disponible ordenado de menor a mayor por precio
  const orderUnAvailable = filterUnAvailable.sort((a, b) => a.price - b.price); // agotado ordenado de menor a mayor por precio
  const products = orderAvailable.concat(orderUnAvailable); //concatenamos arrays

  //Crear producto
  const getProducts = async () => {
    products.forEach((elemento, i) => {
      if (i >= 0 && i < products.length) {
        //Controlamos con products.length
        let urlImg = elemento.img_url;
        let div = document.createElement("div");
        let pName = document.createElement("p");
        let pPrice = document.createElement("p");
        let img = document.createElement("img");
        let añadir = document.createElement("a");

        pName.innerText = elemento.brand;
        pPrice.innerText = `${elemento.price},00 €`;
        añadir.innerText = `Añadir`;
        añadir.disabled = true;
        setAttributes(div, { class: `bagsHover bagsBorde` });
        setAttributes(img, { src: `${urlImg}`, class: "bagsImg" });
        setAttributes(pName, { class: "bags1Prf" });
        setAttributes(pPrice, { class: "bags2Prf" });
        setAttributes(añadir, { class: "bagsLink", id: `${elemento._id}` });
        divProducts.appendChild(div);
        div.appendChild(img);
        div.appendChild(pName);
        div.appendChild(pPrice);
        div.appendChild(añadir);

        if (elemento.available == false) {
          pName.innerText = elemento.brand;
          pPrice.innerText = `${elemento.price},00 €`;
          añadir.innerText = `Agotado`;
          setAttributes(div, { class: `bagsHover_Agotado bagsBorde_Agotado` });
          setAttributes(añadir, {
            class: "bagsLink_Agotado",
            id: `${elemento._id}`,
          });
        }
        añadir.addEventListener("click", (event) => {
          console.log(products);
          let idEvent = event.target.id;
          let result = products.filter((i) => i._id === idEvent);
          if (result[0].available !== false) {
            compra.unshift(result);
            localStorage.setItem("cafe", JSON.stringify(compra));
            compra = [...compra]; //Alimentando array con nuevos objetos
            carritoNew(compra); //Funcion con elementos nuevos + anteriores
            divCarrito.classList.remove("hidden");
          } else {
            alert(
              `${result[0].brand} no esta disponible, pronto podras disfrutarlo.`
            );
          }
        });
      }
    });
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
//setAttributes(aHDCarro, { href: "../../pages/carro/testCarro.html" });
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
