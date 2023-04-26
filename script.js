const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function() {
  if (menu.classList.contains('menu--open')) {
    menu.classList.remove('menu--open');
    menuToggle.setAttribute('aria-expanded', 'false');
  } else {
    menu.classList.add('menu--open');
    menuToggle.setAttribute('aria-expanded', 'true');
  }
});
document.addEventListener('click', function(event) {
  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
    menu.classList.remove('menu--open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    menu.classList.remove('menu--open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});
