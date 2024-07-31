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