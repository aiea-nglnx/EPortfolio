const toolBarIcon = document.querySelector('.fa.fa-bars');
const menu = document.querySelector('nav ul');


toolBarIcon.addEventListener('click', () => {
  // Toggle mobile/small screen menu visibility
  menu.classList.toggle('menu-visible');  
  document.body.classList.toggle("show-mobile-menu");
});
