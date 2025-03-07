const menuTrigger = document.querySelector('#menu-trigger');
const menuTriggerIcons = menuTrigger.querySelectorAll("i");
const menu = document.querySelector('#menu');

// fonctionnalité de permutation des boutons du menu burger et ouverture du menu
menuTrigger.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  for(let icon of menuTriggerIcons) {
    icon.classList.toggle('!hidden');
  }  
});