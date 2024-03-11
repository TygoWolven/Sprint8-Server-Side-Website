const navButton = document.getElementById('navigationButton'),
      navBar = document.querySelector('.primary-navigation'),
      buttonChevron = document.getElementById('buttonChevron');

navButton.addEventListener('click', openNav)
function openNav () {
    navBar.classList.toggle('openNav')
    buttonChevron.classList.toggle('rotateChevron')
}

