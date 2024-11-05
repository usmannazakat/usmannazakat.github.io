const navBar = document.querySelector('nav')
function openNav()
{
    navBar.style.right = '0';
    document.body.style.overflow = 'hidden'
}
function closeNav()
{
    navBar.style.right = '';
    document.body.style.overflow = 'auto';
}


const  projects = document.querySelector('.projects');
const  about = document.querySelector('.about');
const  contacts = document.querySelector('.contact-sec');
const  services = document.querySelector('.services');
function showProjects()
{
    projects.scrollIntoView();
    closeNav();
}

function showServices()
{
    services.scrollIntoView();
    closeNav();
}
function showAbout()
{
    about.scrollIntoView();
    closeNav();
}
function showContact()
{
    contacts.scrollIntoView();
    closeNav();
}



let nameDiv = document.querySelector('.my-name');
let myName = 'Usman Nazakat';
let index = 0;

let interval = setInterval(() => {
    nameDiv.innerHTML += myName[index];
    index++;
    if (index > myName.length) {
        nameDiv.innerHTML = '';
        index = 0;
    }
}, 500);


window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 70) 
    {
        header.classList.add("scrolled");
    } 
    else 
    {
        header.classList.remove("scrolled");
    }
});



