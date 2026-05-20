// ELEMENTOS DO HEADER
import { componentesHeader } from "../componentes/header.js"

// ELEMENTOS NAVBAR 
import { componenteNavbarMobile } from "../componentes/navbar.js"


const root = document.querySelector('.root')
root.appendChild(componentesHeader({ pagina: 'carrinho' }))
root.appendChild(componenteNavbarMobile())


import { classesNav } from "../modulos/evento.js"
classesNav({ accao: 'link_mobile', buttoss_evento: document.querySelectorAll('.link_mobile'), pagina: 'carrinho' })