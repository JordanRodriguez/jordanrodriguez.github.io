let navbarToggler = document.querySelector('.navbar-toggler');
let navbarDropdown = document.querySelector('#navbarNavDropdown');
let navbarDropdownExpanded = navbarDropdown.getAttribute('aria-expanded');

// Mobile menu toggle
navbarToggler.addEventListener('click', function(){
navbarDropdown.classList.toggle('show');

if(navbarDropdownExpanded == "true") {
    navbarDropdownExpanded = "false";
} else {
    navbarDropdownExpanded = "true";
}

navbarDropdown.setAttribute("aria-expanded", navbarDropdownExpanded);
});