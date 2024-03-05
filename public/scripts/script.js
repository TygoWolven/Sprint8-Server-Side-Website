// Filter Menu //
const menuButton = document.querySelector('#menu-button')
const menu = document.querySelector('.menu')
menuButton.addEventListener('click', showMenu)
function showMenu () {
  menu.classList.toggle('showmenu')
}

// Message Menu //
const messageButton = document.querySelector('#message-menu-button')
const menuMessage = document.querySelector('.message-menu')
messageButton.addEventListener('click', showMenuMessage)
function showMenuMessage () {
  menuMessage.classList.toggle('showmenu')
}

// Lightswitch Start Animation //
const startPage = document.querySelector('.start-page'),
      launchButton = document.querySelector('#launch-button'),
      spaceRocket = document.querySelector('.start-page img')

launchButton.addEventListener('click', startAnimation)
function startAnimation () {
  spaceRocket.classList.toggle('launchRocket')
  spaceRocket.src = ("/images/rocket-flame.webp")
  setTimeout(startDissapearing, 750)
  startDissapearing
}
function startDissapearing () {
  startPage.classList.toggle('hideStartPageAnimation')
  document.cookie = "checked"
}

// Cookie System //
 if(document.cookie){
  document.querySelector('.start-page').style.display = "none"
  console.log(document.cookie)
 } else{
  document.querySelector('.start-page').style.display = "flex"
  console.log(document.cookie)
 }
 

// // Cursor Light //
const positionCursor = document.documentElement;
positionCursor.addEventListener('mousemove', e =>{
  positionCursor.style.setProperty('--x', e.clientX + 'px')
  positionCursor.style.setProperty('--y', e.clientY + 'px')
})


// Random Star Locations //
const windowHeight = window.innerHeight,
      windowWidth = window.innerWidth

console.log(windowHeight)
console.log(windowWidth)

function randomHeight () {
  return Math.random() * (window.innerHeight - 100) + 50
}

function randomWidth () {
  return Math.random() * (window.innerWidth - 100) + 50
}

const allStars = document.querySelectorAll('.students')

console.log(allStars)

allStars.forEach(star => {
  star.style.setProperty('position', 'absolute')
  star.style.setProperty('z-index', '75')
  console.log( `${randomHeight()}px x ${randomWidth()}px`)
  star.style.setProperty('top', `${randomHeight()}px`)
  star.style.setProperty('left', `${randomWidth()}px`)
})