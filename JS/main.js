const openModalButton = document.querySelector('#open_modal')
const closeModalButton = document.querySelector('#close_modal')
const modal = document.querySelector('#modal')
const fade = document.querySelector('#fade')
const btnEnviar = document.querySelector('#btn_enviar')
const amburguer = document.querySelector('.amburguer__menu')
const navItems = document.querySelector('#nav_items')

const toggleMenu = ()=>{
  navItems.classList.toggle('active')
  // navItems.style.display = 'flex'
}

amburguer.addEventListener('click', ()=>{
  toggleMenu()
})

const toggleModal = ()=>{
  [modal, fade].forEach((e)=> e.classList.toggle('hide'))
}

[openModalButton, closeModalButton].forEach(element => {
  element.addEventListener('click', () =>  toggleModal())
});

btnEnviar.addEventListener('click', ()=>{
  const txtEnviado = document.querySelector('#txt__enviado')
  txtEnviado.style.display = 'block'
  btnEnviar.style.display = 'none'
})

