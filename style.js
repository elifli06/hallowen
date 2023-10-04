const navMenu = document.getElementById('nav'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
        navClose.classList.add('visible')
    })
}


if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
        navClose.classList.remove('visible')
    })
}


const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
    const navMenu = document.getElementById('nav'),
    navClose = document.getElementById('nav-close')
   
    navMenu.classList.remove('show-menu')
    navClose.classList.remove('visible')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(L => L.classList.remove('active-link'))
        this.classList.add('active-link')
    }
}

linkColor.forEach(L=> L.addEventListener('click', colorLink))


function scrollHeader(){
    const scrollHeader = document.getElementById('header');
    
    if(this.scrollY >= 50) scrollHeader.classList.add('scroll-header'); 
    else scrollHeader.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


function scrollTop(){
    const scrollTop = document.getElementById('scroll-up');
  
    if(this.scrollY >= 460) scrollTop.classList.add('scroll-top'); 
    else scrollTop.classList.remove('scroll-top')
}
window.addEventListener('scroll', scrollTop)


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.decoration__container, .delicacy__container, .social__container`)
sr.reveal(`.social__img, .acessory__card-left, .newlleter__title`, {origin: 'left'})
sr.reveal(`.social__info, .acessory__card-right, .box__input`, {origin: 'right'})
sr.reveal(`.footer__container`, {origin: 'botom'})