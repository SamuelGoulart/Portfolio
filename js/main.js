'use strict'

const animeNav = () => {
    const windowTop = window.pageYOffset;
    if (windowTop > 500) { document.querySelector('.navInternalLinks').classList.add('navActivate') }
    if (windowTop < 490) { document.querySelector('.navInternalLinks').classList.remove('navActivate') }
}

const underlineNav = () => {
    const windowTop = window.pageYOffset;
    const a = document.querySelectorAll('.navInternalLinks > ul > a')
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

window.addEventListener('scroll', () => { animeNav(); underlineNav() })
if (target.length) { window.addEventListener('scroll', animeScroll) }

animeScroll()