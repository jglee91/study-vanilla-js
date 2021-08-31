let $arrows = document.querySelectorAll('.arrow');
$arrows.forEach(($arrow) => {
  $arrow.addEventListener('click', (e) => {
    let $arrowParent = e.target.parentElement.parentElement;
    $arrowParent.classList.toggle('showMenu');
  });
});

let $sidebar = document.querySelector('.sidebar');
let $btnMenu = document.querySelector('#btnMenu');
$btnMenu.addEventListener('click', () => {
  $sidebar.classList.toggle('close');
});
