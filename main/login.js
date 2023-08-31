let spinner = document.getElementById('svgSpinner')
let invTag = document.getElementsByClassName('a0')
let inv = 'invitado'

function loginInv() {
  localStorage.clear();
  localStorage.setItem("user", JSON.stringify(inv));
    spinner.classList.remove('spinner')
    spinner.classList.add('spinnerActivo')
    invTag[0].textContent='Accediendo' //a0Activo
    invTag[0].classList.add('a0Activo')
    invTag[0].classList.remove('a0')
    setTimeout(() => {
        location.href = "../../index.html";
      }, 2200);
}
