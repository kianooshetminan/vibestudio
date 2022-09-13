const nav_ul = document.querySelector('.nav-ul')
const btn = document.querySelector('.nav-btn')
const light_btn = document.querySelectorAll('.light-btn')
const root = document.querySelector(':root')
const logo = document.querySelector('.nav-logo')
const footer_logo = document.querySelector('.footer-logo-bruh')
const instagram_logo = document.querySelector('.instagram-logo')
const whatsapp_logo = document.querySelector('.whatsapp-logo')
const linkedin_logo = document.querySelector('.linkedin-logo')
const landing_logo = document.querySelector('.wrapper')

var rs = getComputedStyle(root);

btn.addEventListener('click', function () {
    if (btn.getAttribute('data-expand') == 'false') {
        nav_ul.classList.add('nav-ul-expand')
        btn.setAttribute('data-expand', true)
        document.children[0].style.overflowY = "hidden";
        btn.classList.add("active")
    }
    else {
        nav_ul.classList.remove('nav-ul-expand')
        btn.setAttribute('data-expand', false)
        document.children[0].style.overflowY = "scroll";
        btn.classList.remove("active")

    }
})

light_btn[0].addEventListener('click', function () {
    if (root.style.getPropertyValue('--primary-color') == "#1c1c1c" || root.style.getPropertyValue('--primary-color') == "") {
        logo.src = "images/vibe-dark-logo.png"
        footer_logo.src = "images/vibe-dark-logo.png"

        instagram_logo.src = "images/instagram-logo.png"
        whatsapp_logo.src = "images/whatsapp-logo.png"
        linkedin_logo.src = "images/linkedin-logo.png"
        landing_logo.style.backgroundImage = "url('../images/landing-logo-dark.png')";
        root.style.setProperty('--primary-color', '#f6f6f6');
        root.style.setProperty('--secondery-color', '#1c1c1c');
        root.style.setProperty('--secondery-color7', '#1c1c1c70');
        root.style.setProperty('--secondery-color5', '#1c1c1c50');

        root.style.setProperty('--third-color', '#e6e6e6');

        light_btn[0].classList.add("active")
    }else{
        root.style.setProperty('--primary-color', '#1c1c1c');
        root.style.setProperty('--secondery-color', '#f6f6f6');
        root.style.setProperty('--secondery-color5', '#f6f6f650');
        root.style.setProperty('--secondery-color7', '#f6f6f670');
        logo.src = "images/vibe-logo.png"
 
        footer_logo.src = "images/vibe-logo.png"
        root.style.setProperty('--third-color', '#262626');
        light_btn[0].classList.remove("active");
        landing_logo.style.backgroundImage = "url('../images/landing-logo.png')";
        instagram_logo.src = "images/instagram-logo-light.png"
        whatsapp_logo.src = "images/whatsapp-logo-light.png"
        linkedin_logo.src = "images/linkedin-logo-light.png"
    }
})



light_btn[1].addEventListener('click', function () {
    if (root.style.getPropertyValue('--primary-color') == "#1c1c1c" || root.style.getPropertyValue('--primary-color') == "") {
        logo.src = "images/vibe-dark-logo.png"
        footer_logo.src = "images/vibe-logo.png"

        instagram_logo.src = "images/instagram-logo-light.png"
        whatsapp_logo.src = "images/whatsapp-logo-light.png"
        linkedin_logo.src = "images/linkedin-logo-light.png"
        root.style.setProperty('--primary-color', '#f6f6f6');
        root.style.setProperty('--secondery-color', '#1c1c1c');
        root.style.setProperty('--secondery-color7', '#1c1c1c70');
        root.style.setProperty('--secondery-color5', '#1c1c1c50');

        root.style.setProperty('--third-color', '#e6e6e6');

        light_btn[1].classList.add("active")
    }else{
        root.style.setProperty('--primary-color', '#1c1c1c');
        root.style.setProperty('--secondery-color', '#f6f6f6');
        root.style.setProperty('--secondery-color5', '#f6f6f650');
        root.style.setProperty('--secondery-color7', '#f6f6f670');
        logo.src = "images/vibe-logo.png"
 
        footer_logo.src = "images/vibe-dark-logo.png"
        root.style.setProperty('--third-color', '#262626');
        light_btn[1].classList.remove("active")
        instagram_logo.src = "images/instagram-logo.png"
        whatsapp_logo.src = "images/whatsapp-logo.png"
        linkedin_logo.src = "images/linkedin-logo.png"
    }
})