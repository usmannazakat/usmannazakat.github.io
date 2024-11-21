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


const profileSec = document.querySelector('.profile');
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 100) 
    {
        header.classList.add("scrolled");
        profileSec.classList.add('profile-scrolled');
    } 
    else 
    {
        header.classList.remove("scrolled");
        profileSec.classList.remove('profile-scrolled');
    }
});


const animatedElements = document.querySelectorAll('h3, h4, h5, span, li, a, img, p');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
        }
    });
}, {
    threshold: 0.2
});
animatedElements.forEach(element => observer.observe(element));


// Select the custom cursor elements
const cursor = document.querySelector('.cursor');
const cursorTrail = document.querySelector('.cursor-trail');

// Update cursor position
document.addEventListener('mousemove', (e) => {
    // Set the main cursor position
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    // Set the trail cursor position with a slight delay
    cursorTrail.style.left = `${e.clientX}px`;
    cursorTrail.style.top = `${e.clientY}px`;
});

