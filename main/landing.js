//Principales
let body = document.getElementById("contenBody");
let header = document.querySelector("header");
let main = document.getElementById("contenMain");
let usuarios = []; //Alm. de user creados apartir del formulario
let compra = JSON.parse(localStorage.getItem('cafe'))||[]; 

//Alm. de compras / LS cafe | [{},{},{}]
let divCarrito = document.createElement("div");
divCarrito.id = "carrito";
body.appendChild(divCarrito);
let compraLS = JSON.parse(localStorage.getItem("cafe"));

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
let aHDCarro = headerTagA[8];
let imgCar = document.getElementById("car-img");

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
let artSec3 = mainSec3Wrap.querySelector("article");
let artTagAtienda = mainTagSection[2].querySelector("a");
//Main - section4
let articlesSection4 = mainTagSection[3].getElementsByTagName("article");
let art1Section4 = articlesSection4[0];
let art2Section4 = articlesSection4[1];
let art3Section4 = articlesSection4[2];
//Main - section4 - desplegables FAQ
let divAction1 = document.getElementById("boxH3_1");
let divAction2 = document.getElementById("boxH3_2");
let divAction3 = document.getElementById("boxH3_3");
let art1Arrow1 = art1Section4.querySelector("img");
let art2Arrow2 = art2Section4.querySelector("img");
let art3Arrow3 = art3Section4.querySelector("img");
let section4TagA = mainTagSection[3].querySelector("a");

//Main - section5
let sec5TagA = mainTagSection[4].querySelector("a");
//Main - section6
let sec6TagsA = mainTagSection[5].querySelectorAll("a");
let artContentForm = document.getElementById("contenForm");
let form = mainTagSection[5].querySelector("form");
let inName = document.getElementById("name");
let select = document.getElementById("selectForm");
let inTel2 = document.getElementById("tlf2");
let inTel3 = document.getElementById("tlf3");
let inTel4 = document.getElementById("tlf4");
let inputCodigo = document.getElementById("codPais");
let inCheck = document.getElementById("check");
let inSubmit = document.getElementById("submit");
let sec6TagA1 = sec6TagsA[0];
let sec6TagA2 = sec6TagsA[1]; // privacidad
let sec6TagA3 = sec6TagsA[2]; // terminos
//Main - section6 - Registrado
let divReg = document.createElement("div");
let hReg1 = document.createElement("h2");
let hReg2 = document.createElement("h4");
let btnReg = document.createElement("button");
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

let userInvitado = localStorage.getItem("user");

//Limpiar LS al cerrar o refrescar pagina
/* window.addEventListener("beforeunload", function () {
  localStorage.clear();
}); */

//Funcion de refrescar pagina
function reload() {
  location.reload();
}


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
//Check si tenemos productos o no en el carro, identifica la cesta con bola roja o default
function checkCar() {
  if (compra.length >0) {
    imgCar.removeAttribute("src");
    setAttributes(imgCar, { src: "img/home/Car-ON.png"})
  }else{
    imgCar.removeAttribute("src");
    setAttributes(imgCar, { src: "img/home/Carr.svg"});
  }
}
checkCar()

//Ev. Listen -> Nav -> imagen -> Compra
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

//FAQ -> acordion -> Parrafos
//Evento -> flechas FAQ
divAction1.addEventListener("click", () => {
  let getPrf = document.getElementById("p1FAQ");
  let divLine1 = document.getElementById("lineFaq1");

  if (getPrf.classList.contains("labelPrf")) {
    divLine1.classList.remove("lineFaq");
    divLine1.classList.add("lineFaqActivo");
    getPrf.classList.remove("labelPrf");
    getPrf.classList.add("labelPrfActivo");
    art1Arrow1.style = `transition-property: rotate;transition-duration: .7s; rotate:180deg`;
  } else if (getPrf.classList.contains("labelPrfActivo")) {
    //abajo
    divLine1.classList.add("lineFaq");
    divLine1.classList.remove("lineFaqActivo");
    getPrf.classList.remove("labelPrfActivo");
    getPrf.classList.add("labelPrf");
    art1Arrow1.style = `transition-property: rotate;transition-duration: .7s; rotate:360deg`;
  }
});
divAction2.addEventListener("click", () => {
  let getPrf = document.getElementById("p2FAQ");
  let divLine2 = document.getElementById("lineFaq2");

  if (getPrf.classList.contains("labelPrf")) {
    divLine2.classList.remove("lineFaq");
    divLine2.classList.add("lineFaqActivo");
    getPrf.classList.remove("labelPrf");
    getPrf.classList.add("labelPrfActivo");
    art2Arrow2.style = `transition-property: rotate;transition-duration: .7s; rotate:180deg`;
  } else if (getPrf.classList.contains("labelPrfActivo")) {
    //abajo
    divLine2.classList.add("lineFaq");
    divLine2.classList.remove("lineFaqActivo");
    getPrf.classList.remove("labelPrfActivo");
    getPrf.classList.add("labelPrf");
    art2Arrow2.style = `transition-property: rotate;transition-duration: .7s; rotate:360deg`;
  }
});
divAction3.addEventListener("click", () => {
  let getPrf = document.getElementById("p3FAQ");
  let divLine3 = document.getElementById("lineFaq3");
  if (getPrf.classList.contains("labelPrf")) {
    divLine3.classList.remove("lineFaq");
    divLine3.classList.add("lineFaqActivo");
    getPrf.classList.remove("labelPrf");
    getPrf.classList.add("labelPrfActivo");
    art3Arrow3.style = `transition-property: rotate;transition-duration: .7s; rotate:180deg`;
  } else if (getPrf.classList.contains("labelPrfActivo")) {
    //abajo
    divLine3.classList.add("lineFaq");
    divLine3.classList.remove("lineFaqActivo");
    getPrf.classList.remove("labelPrfActivo");
    getPrf.classList.add("labelPrf");
    art3Arrow3.style = `transition-property: rotate;transition-duration: .7s; rotate:360deg`;
  }
});

function carritoNew(param) {
  checkCar()
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
    
   

    divSvg.addEventListener("click", () => {
      divCarrito.classList.add("hidden");
    });

    for (const i of param) {
      i.forEach((x) => {
        let contentDiv = document.createElement("div");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let pUnd = document.createElement("p");
        let pName = document.createElement("p");
        let pPrecio = document.createElement("p");
        //let btnNo = document.createElement("button");

        pUnd.innerText = `1 Unidad`;
        pName.innerText = `${x.brand}`;

        pPrecio.innerText = `${x.price},00€`;
        //btnNo.innerText = `Retirar`;
        //btnNo.id=x._id
        //divCarrito.style=`display:flex;flex-direction:column; gap:10px`
        contentDiv.style = `width:340px;margin:5px auto 5px auto;border-bottom:solid rgb(227,222,215) 1px;display:flex;flex-direction:row;`;
        div1.style = `height:100px;width:100px;background-image: url('${x.img_url}');background-repeat: no-repeat;background-size: 100%;background-position:center`;
        div2.style = `height:120px;width:220px;display:flex;flex-direction:column;gap:5px;height:auto;justify-content:center;align-items:start;`;
        //btnNo.style = `margin:0 auto;;width:50px;border-color:rgb(196, 33, 33);text-align:center;font-size:12px;background-color:rgb(163, 27, 27); color:white; border-radius:5px;cursor:pointer`;

        divCarrito.appendChild(contentDiv);
        contentDiv.appendChild(div1);
        contentDiv.appendChild(div2);
        div2.appendChild(pUnd);
        div2.appendChild(pName);
        div2.appendChild(pPrecio);
        //div2.appendChild(btnNo);

        /* 
         a.addEventListener("click", (event)=> {
          let idEvent = event.target.id;
          const result = products.filter((i) => i._id === idEvent);
          compra.unshift(result);
          localStorage.setItem("cafe", JSON.stringify(compra));
         carritoNew(compra)
        */
      });
      /* btnNo.addEventListener('click',(event)=>{
        let idEvent = event.target.id;
        const result = compraLS.filter((i) => i[0]._id !== idEvent);
        console.log(`compraLS \n`, compraLS);
        console.log(result);
       localStorage.setItem("cafe", JSON.stringify(result));
      }) */
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

  const filterAvailable = promiseA.products.filter((item) => item.available);
  const filterUnAvailable = promiseA.products.filter(
    (item) => item.available == false
  );

  const orderAvailable = filterAvailable.sort((a, b) => a.price - b.price); // disponible ordenado de menor a mayor por precio
  const orderUnAvailable = filterUnAvailable.sort((a, b) => a.price - b.price); // agotado ordenado de menor a mayor por precio
  const products = orderAvailable.concat(orderUnAvailable); //concatena arrays

  //Crear producto
  const getProducts = async () => {
    products.forEach((elemento, indice) => {
      let añadir = document.createElement("a");
      let div = document.createElement("div");
      let pName = document.createElement("p");
      let pPrice = document.createElement("p");
      let img = document.createElement("img");

      let urlImg = elemento.img_url;
      if (indice >= 0 && indice < 4 && elemento.available == true) {
        pName.innerText = elemento.brand;
        pPrice.innerText = `${elemento.price},00 €`;
        añadir.innerText = `Añadir`;

        setAttributes(div, { class: `bagsHover bagsBorde` });
        setAttributes(img, { src: `${urlImg}`, class: "bagsImg" });
        setAttributes(pName, { class: "bags1Prf" });
        setAttributes(pPrice, { class: "bags2Prf" });
        setAttributes(añadir, { class: "bagsLink", id: elemento._id});
        artImagenes.appendChild(div);
        div.appendChild(img);
        div.appendChild(pName);
        div.appendChild(pPrice);
        div.appendChild(añadir);

        if (elemento.available == false) {
          pName.innerText = elemento.brand;
          pPrice.innerText = `${elemento.price},00 €`;
          añadir.innerText = `Agotado`;
          añadir.disabled = true;
          setAttributes(div, { class: `bagsHover_Agotado bagsBorde_Agotado` });
          setAttributes(añadir, {
            class: "bagsLink_Agotado",
            id: elemento._id,
          });
        }
      }
      añadir.addEventListener("click", (event) => {
      
        const nameEvent = event.target.parentElement.querySelector('p').innerText;
        
        let result = products.filter((i) => i.brand === nameEvent);
       /*let idEvent = event.target.id;
        let result = products.filter((item,ind) => {
          if (item.brand === nameEvent) {
          return item.idUnico = uuid() */
        compra.unshift(result);
        localStorage.setItem("cafe", JSON.stringify(compra));
        divCarrito.classList.remove("hidden");
        carritoNew(compra);
      });
    }); //END FOR
  }; //END getProducts
  getProducts();
}; //END iniciarApi()

iniciarApi();

//EventListener - Select - habilita los siguientes input telefono
select.addEventListener("click", () => {
  inTel2.disabled = false;
  inTel3.disabled = false;
  inTel4.disabled = false;
});

//EventListener - Select - asignando valor de codigo pais
let codigoP = select.addEventListener("change", () => {
  inputCodigo.value = event.target.value;
  return inputCodigo.value;
});

//Form - Registro exitoso
const registered = () => {
  form.style = `display:none`;
  hReg1.innerText = `Hola ${inName.value} pronto te contactaremos!`;
  hReg2.innerText = `Gracias por registrarte!`;
  divReg.classList = "divNewReg";
  btnReg.classList = "btnNewReg";
  btnReg.innerText = `Nuevo Registro`;

  divReg.appendChild(hReg1);
  divReg.appendChild(hReg2);
  divReg.appendChild(btnReg);
  artContentForm.appendChild(divReg);
};
//Form - Registro exitoso -> EventListener - boton btnReg
btnReg.addEventListener("click", () => {
  reload();
});

//EventListener - form
form.addEventListener("submit", (event) => {
  let nameInput = event.target.name.value.trim(),
    mailInput = event.target.email.value.trim(),
    tlfField1 = inputCodigo.value,
    tlfField2 = event.target.tlf2.value.trim(),
    tlfField3 = event.target.tlf3.value.trim(),
    tlfField4 = event.target.tlf4.value.trim();

  event.preventDefault();

  if (inCheck.checked == false) {
    let modalConfirm = confirm(`Aceptas politicas y terminos?`); //obtenemos boolean para condicionar

    if (modalConfirm) {
      event.preventDefault();
      const user = {
        name: nameInput,
        mail: mailInput,
        tlfCodigo: inputCodigo.value,
        telefonoCompleto: `${tlfField1}${tlfField2}${tlfField3}${tlfField4}`,
        textArea: event.target.area.value,
      };
      inCheck.checked = true;
      usuarios.unshift(user);
      localStorage.setItem("formulario", JSON.stringify(usuarios));
      setTimeout(() => {
        registered();
      }, 1000);
    } else {
      confirm((text = `Datos no registrados, seguir en formulario?`));
    }
  } else {
    const user = {
      name: nameInput,
      mail: mailInput,
      tlfCodigo: inputCodigo.value,
      telefonoCompleto: `${tlfField1}${tlfField2}${tlfField3}${tlfField4}`,
      textArea: event.target.area.value,
    };
    usuarios.unshift(user);
    localStorage.setItem("formulario", JSON.stringify(usuarios));
    setTimeout(() => {
      registered();
    }, 1000);
  }
});

//Body
setAttributes(divCarrito, { class: "hidden", id: "carrito" });

//Head
setAttributes(aHDLogo, { href: "index.html" });
setAttributes(aHDTienda, { href: "pages/tienda/testTienda.html" });
setAttributes(aHDSuscripcion, {
  href: "pages/suscripcion/testSuscripcion.html",
});
setAttributes(aHDEmpresas, { href: "pages/empresas/testEmpresas.html" });
setAttributes(aHDNosotros, { href: "pages/nosotros/testNosotros.html" });
setAttributes(aHDContacto, { href: "pages/contacto/testContacto.html" });
setAttributes(aHDTlf, { href: "tel:+34919490518" });
setAttributes(aHDInicio, { href: "pages/login/login.html", target: "_blank" });
//setAttributes(aHDCarro, { href: "pages/carro/testCarro.html" });
//main - section 1
setAttributes(sec1Btn1, { href: "pages/origen/testOrigen.html" });
setAttributes(sec1Btn2, { href: "pages/tienda/testTienda.html" });
//main - section 3
setAttributes(artTagAtienda, { href: "pages/tienda/testTienda.html" });
//main - section 4
setAttributes(section4TagA, { href: "pages/contacto/testContacto.html" });
//main - section 5
setAttributes(sec5TagA, {
  href: "https://www.google.com/maps/dir//m25+space/@40.4062952,-3.7130099,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd4229925e14f093:0xaa4035f58111fdbb!2m2!1d-3.6754957!2d40.4373922?entry=ttu",
  target: "_blank",
});
//main - section 6
setAttributes(sec6TagA1, { href: "pages/tienda/testTienda.html" });
setAttributes(sec6TagA2, { href: "pages/privacidad/testPrivacidad.html" });
setAttributes(sec6TagA3, { href: "pages/terminos/testTerminos.html" });

//Footer
setAttributes(aFtLogo, { href: "index.html" });
setAttributes(aFtTlf, { href: "tel:+34 919 49 05 18" });
setAttributes(aFtMail, { href: "mailto:hola@cafedealtura.com" });
setAttributes(aFtTienda, { href: "pages/tienda/testTienda.html" });
setAttributes(aFtSuscripcion, {
  href: "pages/suscripcion/testSuscripcion.html",
});
setAttributes(aFtEmpresas, { href: "../../pages/empresas/testEmpresas.html" });
setAttributes(aFtNosotros, { href: "../../pages/nosotros/testNosotros.html" });
setAttributes(aFtcontacto, { href: "../../pages/contacto/testContacto.html" });
setAttributes(aFtPoliPriv, {
  href: "../../pages/privacidad/testPrivacidad.html",
});
setAttributes(aFtPoliCook, { href: "../../pages/cookies/testCookies.html" });
setAttributes(aFtTerminos, { href: "../../pages/terminos/testTerminos.html" });
