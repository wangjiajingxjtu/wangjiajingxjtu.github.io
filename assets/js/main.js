document.documentElement.classList.add('js');
const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.menu-toggle');
const closeMenu = () => { navbar.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); };
menu.addEventListener('click', () => { const open = navbar.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if(event.key === 'Escape' && navbar.classList.contains('open')) { closeMenu(); menu.focus(); } });
matchMedia('(max-width:760px)').addEventListener('change', closeMenu);
