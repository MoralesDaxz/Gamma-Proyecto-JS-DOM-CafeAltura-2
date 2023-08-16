//Principales
let body = document.getElementById("contenBody");
let header = document.querySelector("header");
let main = document.getElementById("contenMain");
let usuarios = []; //Alm. de user creados apartir del formulario
let compra = []; //Alm. de compras / LS cafe | [{},{},{}]
let divCarrito = document.createElement("div");
divCarrito.id = "carrito";
body.appendChild(divCarrito);
let carritoLS = JSON.parse(localStorage.getItem("cafe"));
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
let artSec3 = mainSec3Wrap.querySelector("article");
let artTagAtienda = mainTagSection[2].querySelector("a");
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

 function carritoNew(param) {

if (localStorage.getItem("cafe") != null) {
divCarrito.innerHTML=''
  for (const i of param) {

    i.forEach((x) => {

      let contentDiv = document.createElement("div");
      let div1 = document.createElement("div");
      let div2 = document.createElement("div");
      let pUnd = document.createElement("p");
      let pName = document.createElement("p");
      let pPrecio = document.createElement("p");
      let btnNo = document.createElement("button");

      pUnd.innerText = `1`;
      pName.innerText = `${x.brand}`;
      let a = pUnd.innerText * x.price;
      pPrecio.innerText = `${a},00€`;
      btnNo.innerText = `Retirar`;
      div1.style = `width:90px;height:110pxpx;background-image: url('${x.img_url}');background-repeat: no-repeat;background-size: cover;`;
      div2.style = `width:140px;display:flex;flex-direction:column;gap:5px;height:auto;`;

      contentDiv.style = `border-bottom:solid black 2px;display:flex;flex-direction:row;gap:10px;height:110px`;
      btnNo.style = `width:50px;border-color:rgb(196, 33, 33);text-align:center;font-size:12px;background-color:rgb(163, 27, 27); color:white; border-radius:5px;cursor:pointer`;
      divCarrito.appendChild(contentDiv);
      contentDiv.appendChild(div1);
      contentDiv.appendChild(div2);
      div2.appendChild(pUnd);
      div2.appendChild(pName);
      div2.appendChild(pPrecio);
      div2.appendChild(btnNo);
    });
  }
} else {
  aHDCarro.addEventListener("click", () => {
    alert(`Carrito vacio - Realiza un compra`);
  });
}
}
carritoNew(carritoLS)


//Ev. Listen -> boton compra
aHDCarro.addEventListener("click", () => {
  if (divCarrito.classList.contains("hidden")) {
    divCarrito.classList.remove("hidden");
  } else {
    divCarrito.classList.add("hidden");
  }
});

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
    art1Arrow1.style = `transition-property: rotate;transition-duration: .7s; rotate:180deg`;
  } else {
    art1Arrow1.style = `transition-property: rotate;transition-duration: .7s; rotate:360deg`;
  }
});
art2Arrow2.addEventListener("click", () => {
  if (flag == true) {
    art2Arrow2.style = `transition-property: rotate;transition-duration: .7s; rotate:180deg`;
  } else {
    art2Arrow2.style = `transition-property: rotate;transition-duration: .7s; rotate:360deg`;
  }
});
art3Arrow3.addEventListener("click", () => {
  if (flag == true) {
    art3Arrow3.style = `transition-property: rotate;transition-duration: .7s; rotate:180deg`;
  } else {
    art3Arrow3.style = `transition-property: rotate;transition-duration: .7s; rotate:360deg`;
  }
});

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
  const products = orderAvailable.concat(orderUnAvailable); //concatena arrays

  //Crear producto
  const getProducts = async () => {
    products.forEach((elemento, i) => {
      let a = document.createElement("a");
      let div = document.createElement("div");
      let pName = document.createElement("p");
      let pPrice = document.createElement("p");
      let img = document.createElement("img");

      let urlImg = elemento.img_url;
      if (i >= 0 && i < 4 && elemento.available == true) {
        pName.innerText = elemento.brand;
        pPrice.innerText = `${elemento.price},00 €`;
        a.innerText = `Añadir`;

        setAttributes(div, { class: `bagsHover bagsBorde` });
        setAttributes(img, { src: `${urlImg}`, class: "bagsImg" });
        setAttributes(pName, { class: "bags1Prf" });
        setAttributes(pPrice, { class: "bags2Prf" });
        setAttributes(a, { class: "bagsLink", id: `${elemento._id}` });
        artImagenes.appendChild(div);
        div.appendChild(img);
        div.appendChild(pName);
        div.appendChild(pPrice);
        div.appendChild(a);

        if (elemento.available == false) {
          pName.innerText = elemento.brand;
          pPrice.innerText = `${elemento.price},00 €`;
          a.innerText = `Agotado`;
          setAttributes(div, { class: `bagsHover_Agotado bagsBorde_Agotado` });
          setAttributes(a, {
            class: "bagsLink_Agotado",
            id: `${elemento._id}`,
          });
        }
      }
      a.addEventListener("click", (event)=> {
        let idEvent = event.target.id;
        const result = products.filter((i) => i._id === idEvent);
        compra.unshift(result);
        localStorage.setItem("cafe", JSON.stringify(compra));
       carritoNew(compra)
//-----
        /* 
            let contentDiv = document.createElement("div");
            let div1 = document.createElement("div");
            let div2 = document.createElement("div");
            let pUnd = document.createElement("p");
            let pName = document.createElement("p");
            let pPrecio = document.createElement("p");
            let btnNo = document.createElement("button");
      
            pUnd.innerText = `1`;
            pName.innerText = `${x.brand}`;
            let a = pUnd.innerText * x.price;
            pPrecio.innerText = `${a},00€`;
            btnNo.innerText = `Retirar`;
            div1.style = `width:90px;height:110pxpx;background-image: url('${x.img_url}');background-repeat: no-repeat;background-size: cover;`;
            div2.style = `width:140px;display:flex;flex-direction:column;gap:5px;height:auto;`;
      
            contentDiv.style = `border-bottom:solid black 2px;display:flex;flex-direction:row;gap:10px;height:110px`;
            btnNo.style = `width:50px;border-color:rgb(196, 33, 33);text-align:center;font-size:12px;background-color:rgb(163, 27, 27); color:white; border-radius:5px;cursor:pointer`;
            divCarrito.appendChild(contentDiv);
            contentDiv.appendChild(div1);
            contentDiv.appendChild(div2);
            div2.appendChild(pUnd);
            div2.appendChild(pName);
            div2.appendChild(pPrecio);
            div2.appendChild(btnNo); */
       
      }); 

    });//END FOR
  }; //END getProducts
   getProducts();
}; //END iniciarApi()

iniciarApi();

//-------------

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
  hReg1.innerText = `Hola ${inName.value} pronto te leeremos!`;
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
      registered();
    } else {
      confirm((text = `Datos no registrados, quieres seguir?`));
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

    registered();
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



//Intento de tags a para push actualizando div carrito
   /*
  const getTags = async () =>{
    let tagAart1Sec3 = artSec3.querySelectorAll("a"); //Tags de wraps *4
    console.log(tagAart1Sec3);

   tagAart1Sec3[0].addEventListener("click", () => {
    let idEvent = event.target.id;
    const result = products.filter((i) => i._id === idEvent);
    compra.unshift(result);
    localStorage.setItem("cafe", JSON.stringify(compra));
   
    })
    tagAart1Sec3[1].addEventListener("click", () => {
      let idEvent = event.target.id;
      const result = products.filter((i) => i._id === idEvent);
      compra.unshift(result);
      localStorage.setItem("cafe", JSON.stringify(compra));
     
      })
  }
  getTags() */
//----------------------------------------------------
  /* const arrayTagA = new Array(tagAart1Sec3);

for (let i = 0; i < arrayTagA.length; i++) {
  const element = arrayTagA[i];
  console.log(element);
} */
//tagAart1Sec3

/*  a.addEventListener('click',()=>{
       
        let idEvent = event.target.id 
        const result = products.filter(i =>i._id === idEvent)
        compra.unshift(result)
        localStorage.setItem('cafe', JSON.stringify(compra));
        
      });  */
