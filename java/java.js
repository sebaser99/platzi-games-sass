const ipad = window.matchMedia('screen and (max-width: 992px)');
const $header = document.getElementsByClassName('header--principal')[0];
const $nav = $header.querySelector('nav');
const $burguer = document.getElementsByClassName('burguer__icon')[0];
const $classnav = document.getElementsByClassName('nav--header')[0];
const $busquedas = document.getElementById('busqueda');
const $navUl = $nav.querySelector('ul');

function menuburguer(){
    $classnav.classList.toggle('nav--header');
    $busquedas.classList.toggle('header__busqueda');
    $navUl.classList.toggle('is-active');
    $busquedas.classList.toggle('is-active-busqueda');
  

    
}
function pantallaGrande(){
    
    if ($navUl.classList.contains('is-active')) {
        $navUl.classList.remove('is-active');
        $busquedas.classList.remove('is-active-busqueda');
        $nav.classList.add('nav--header');
        $busquedas.classList.add('header__busqueda');
    }

}

ipad.addListener(cambioPantalla);
function cambioPantalla(tamaño){
    if(tamaño.matches){
     
        $burguer.addEventListener('click', menuburguer);

    }
    else{
       pantallaGrande();
    
    }
    
}

cambioPantalla(ipad);




