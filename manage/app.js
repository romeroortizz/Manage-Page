const icon = document.getElementById('hamburger')
const overlay = document.getElementById('overlay')
const menu = document.getElementById('navigation')
const body = document.body
icon.addEventListener('click',() =>{
    menu.classList.toggle('visibile')
    overlay.classList.toggle('visibile')
    body.classList.toggle('no-scroll')
})

