const iconMenu = document.querySelector('.burger__logo');
const sidebar = document.querySelector('.sidebar');

iconMenu.addEventListener("click", function(e) {
  document.body.classList.toggle('_lock');
  iconMenu.classList.toggle('_active');
  sidebar.classList.toggle('_active');
});