var html = document.querySelector('html'),
		body = document.querySelector('body'),
		wrap = document.querySelector('.wrap');

document.addEventListener('DOMContentLoaded', ()=>{
  const headerWrap = document.querySelector('.header__wrap'),
        ham = document.querySelector('.header__ham');

  ham.addEventListener('click', ()=>{
    toggleNav();
  });
  function toggleNav() {
    html.classList.toggle('overflow-disabled');
    body.classList.toggle('overflow-disabled');
    headerWrap.classList.toggle('--show');
    ham.classList.toggle('--close');
  }


  const navLinks = document.querySelectorAll('.header__nav a');
  if (navLinks) {
    navLinks.forEach((link)=>{
      link.addEventListener('click', (event)=>{
        html.classList.remove('overflow-disabled');
        body.classList.remove('overflow-disabled');
        headerWrap.classList.remove('--show');
        ham.classList.remove('--close');
      })
    });
  }
});

