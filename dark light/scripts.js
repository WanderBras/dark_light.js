const navBar = document.querySelector('.navbar');
const darkMode = document.querySelector('.dark-mode-icon');
const body = document.body;

darkMode.addEventListener('click' , function (){
    navBar.classList.toggle('dark-nav');
    body.classList.toggle('dark-mode');
})