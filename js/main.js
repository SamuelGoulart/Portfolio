'use strict'

const animeNav = () =>{
    const windowTop = window.pageYOffset;
    if (windowTop > 700) { document.querySelector('.navInternalLinks').classList.add('navActivate') }
    if (windowTop < 690) { document.querySelector('.navInternalLinks').classList.remove('navActivate') }
}


window.addEventListener('scroll', animeNav)