'use strict'

const animeNav = () => {
    const windowTop = window.pageYOffset;
    if (windowTop > 500) { document.querySelector('.navInternalLinks').classList.add('navActivate') }
    if (windowTop < 490) { document.querySelector('.navInternalLinks').classList.remove('navActivate') }
}

const underlineNav = () => {
    const windowTop = window.pageYOffset;
    const a = document.querySelectorAll('.navInternalLinks a')
    if (windowTop < 700) {
        a[3].classList.remove('activateAdherentIndex')
    }

    if (windowTop > 700) {
        a[3].classList.add('activateAdherentIndex')
        a[4].classList.remove('activateAdherentIndex')
        a[5].classList.remove('activateAdherentIndex')
    }

    if (windowTop > 1300) {
        a[3].classList.remove('activateAdherentIndex')
        a[4].classList.add('activateAdherentIndex')
    }

    if (windowTop > 2000) {
        a[4].classList.remove('activateAdherentIndex')
        a[6].classList.remove('activateAdherentIndex')
        a[5].classList.add('activateAdherentIndex')
    }

    if (windowTop > 2500) {
        a[5].classList.remove('activateAdherentIndex')
        a[6].classList.add('activateAdherentIndex')

    }
}


const target = document.querySelectorAll('[data-anime]')

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.75
    target.forEach((element) => {
        if (windowTop > element.offsetTop) {
            element.classList.add('animate')
        }else{
            element.classList.remove('animate')
        }
    })
}

const removeTriangle3 = () =>{
    document.querySelector('#triangle3').classList.remove('displayNone')
}

const addTriangle3 = () =>{
    document.querySelector('#triangle3').classList.add('displayNone')
}

const removeTriangle2 = () =>{
    document.querySelector('#triangle2').classList.remove('displayNone')
}

const addTriangle2 = () =>{
    document.querySelector('#triangle2').classList.add('displayNone')
}

window.addEventListener('scroll', () => { animeNav(); underlineNav() })
if (target.length) { window.addEventListener('scroll', animeScroll) }

document.querySelector('#card3').addEventListener('mouseenter', addTriangle3)
document.querySelector('#card3').addEventListener('mouseleave', removeTriangle3)

document.querySelector('#card2').addEventListener('mouseenter', addTriangle2)
document.querySelector('#card2').addEventListener('mouseleave', removeTriangle2)

animeScroll()