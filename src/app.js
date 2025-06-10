const closeMenu = document.getElementById('menu-close');
const openMenu = document.getElementById('menu-open');
const arrowUP = document.getElementById('arrow-up');
const arrowDown = document.getElementById('arrow-down');
const arrowUP2 = document.getElementById('arrow-2-up');
const arrowDown2 = document.getElementById('arrow-2-down');
const body = document.querySelector('body');

//toggle menu icons on and off on mobile devices

openMenu.addEventListener('click', ()=> {
    document.getElementById('menu').classList.toggle('hidden');
    body.classList.toggle('overlay');
});

closeMenu.addEventListener('click', ()=> {
    document.getElementById('menu').classList.toggle('hidden');
    body.classList.toggle('overlay');
});

//To toggle the drop-down menu on mobile devices

//select both dropdown menus with their respective unique IDs
const dropDown = document.getElementById('dropdown');
const dropDown2 = document.getElementById('dropdown-2');

//listen for clicks and then toggle the display menu
dropDown.addEventListener('click', ()=>{
    document.getElementById('dropwdown-menu').classList.toggle('display-menu');
    arrowUP.classList.toggle('display-arrow');
    arrowDown.classList.toggle('display-down-arrow');
});
dropDown2.addEventListener('click', ()=>{
    document.getElementById('dropwdown-menu-2').classList.toggle('display-menu');
    arrowUP2.classList.toggle('display-arrow');
    arrowDown2.classList.toggle('display-down-arrow');
});




