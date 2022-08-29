//* header
window.onscroll = function () {
  const header = document.querySelector('header');
  //* maksud dari header.offsetTop ini adalah jarak dari posisi header terhadap topnya / atas window nya
  const a = document.querySelector('#scrollup');
  const fixedNav = header.offsetTop;

  // * ini di bacanya "jika pageYoffset ini maksudnya window nya scroll yang lagi saya lakukan itu lebih besar dari fixedNav maka jalankan aksi tambahkan class navbar-fixed dan jika kembali semula hapus class navbar-fixed nya"
  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }

  //* maksud dari header.offsetTop ini adalah jarak dari posisi header terhadap topnya / atas window nya

  // * ini di bacanya "jika pageYoffset ini maksudnya window nya scroll yang lagi saya lakukan itu lebih besar dari fixedNav maka jalankan aksi tambahkan class navbar-fixed dan jika kembali semula hapus class navbar-fixed nya"
  if (window.pageYOffset > fixedNav) {
    a.classList.add('scrollup');
  } else {
    a.classList.remove('scrollup');
  }
};

//* Hamburger Menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

//* Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

//* Dark Mode
const darkTogle = document.querySelector('#dark-toggel');
const html = document.querySelector('html');
const logo = document.querySelector('#logo');

darkTogle.addEventListener('click', function () {
  if (darkTogle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkTogle.checked = true;
} else {
  darkTogle.checked = false;
}
