const $burguer = document.getElementsByClassName('burguer__icon')[0];
const $nav = document.getElementsByClassName('nav--header')[0];
const $busquedas = document.getElementById('busqueda');
const $navUl = $nav.querySelector('ul');
$burguer.addEventListener('click', menuburguer);
function menuburguer(){
    $nav.classList.toggle('nav--header');
    $busquedas.classList.toggle('header__busqueda');
    $navUl.classList.toggle('is-active');
    $busquedas.classList.toggle('is-active-busqueda');
  

    
}
