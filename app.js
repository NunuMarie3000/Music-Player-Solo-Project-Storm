'use strict';
console.log('up and running');

//create function to make hamburger menu functional
let workingHamburger = ()=>{
    //get the hamburger and the navbar menu from html
    let hamburger = document.getElementById('hamburger-menu');
    let navbarMenu = document.getElementById('navbar-menu');

    //when the hamburger is clicked, add the 'active' version of class to it
    hamburger.addEventListener('click', ()=>{
        hamburger.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    })

    //when any of the navbar item links are clicked, remove the active class from the hamburger and navbar menu so it goes back to the way it was
    document.querySelectorAll('.navbar-item-link').forEach(link => link.addEventListener('click', ()=>{
        hamburger.classList.remove('active');
        navbarMenu.classList.remove('active');
    }))
}
workingHamburger();