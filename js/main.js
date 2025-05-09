const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
const menulist = document.querySelectorAll('.mobile-menu__link');
const menuHeaderlists = document.querySelectorAll('.header__menu-item');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');
const disableScroll = () =>
  document.body.classList.toggle('scroll-block');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);
menulist.forEach(li => {
  li.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    document.body.classList.remove('scroll-block')
  });
});

menuHeaderlists.forEach(navHeaderlist => {
  navHeaderlist.addEventListener('click', () => {
    document.querySelector('.active')?.classList.remove('active')
    navHeaderlist.classList.remove('active');
  });
});


menuBtnOpen.addEventListener('click', disableScroll);
menuBtnClose.addEventListener('click', disableScroll);


