const menuBtn=document.querySelector('.menu-btn');
const hymburger = document.querySelector('.menu-btn__burger');
const nav= document.querySelector('.nav');
const menuNv=document.querySelector('.menu-nav');
const nevitems=document.querySelectorAll('.menu-nav__item');

let showMenu =false;

menuBtn.addEventListener('click' , togglermenu);

function togglermenu(){
    if(!showMenu){
        hymburger.classList.add('open');
        nav.classList.add('open');
        nevitems.forEach(item => {
            item.classList.add('open')
        });
        menuNv.classList.add('open')

        showMenu=true;
    }else{
        hymburger.classList.remove('open');
        nav.classList.remove('open');
        menuNv.classList.remove('open');
        nevitems.forEach(item => {
            item.classList.remove('open')
        })
        showMenu=false;
    }
}