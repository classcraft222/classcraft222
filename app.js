const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.navbar__item');

// Function to toggle mobile menu
const toggleMobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

// Event listener to toggle mobile menu on click
menu.addEventListener('click', toggleMobileMenu);

// Function to highlight active menu item on scroll
const highlightMenu = () => {
  let fromTop = window.scrollY;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    const sectionId = section.getAttribute('id');

    if (fromTop >= sectionTop && fromTop < sectionTop + sectionHeight) {
      navItems.forEach(navItem => {
        navItem.classList.remove('highlight');
        if (navItem.dataset.page === sectionId) {
          navItem.classList.add('highlight');
        }
      });
    }
  });
};

// Event listener to highlight active menu item on scroll
window.addEventListener('scroll', highlightMenu);

// Event listener to highlight active menu item on click
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(navItem => navItem.classList.remove('highlight'));
    item.classList.add('highlight');
  });
});

// Function to hide mobile menu when clicking on a menu item
const hideMobileMenu = () => {
  if (menu.classList.contains('is-active')) {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
  }
};

// Event listener to hide mobile menu on menu item click
menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
