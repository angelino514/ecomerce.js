import { componentesHeader } from "../componentes/header.js"
import { componenteNavbarMobile } from "../componentes/navbar.js"
import { componenteMain } from "../componentes/main.js"
import { componenteFooter } from "../componentes/footer.js"
import { criarItemCarrinho } from "../componentes/informacoes.js"
import { navegacaoNavbar } from "../modulos/evento.js"
import { actualizarNumerosCarrinho } from "../index.js"
import { carrinho } from "../modulos/carrinho.js"




const paginaActual = 'favoritos'

const favoritos = document.querySelector('.favoritos')
if (favoritos) {
   favoritos.appendChild(componentesHeader({ pagina: paginaActual }))
   favoritos.appendChild(componenteNavbarMobile({ pagina: paginaActual }))
   favoritos.appendChild(componenteMain({ pagina: paginaActual }))
   favoritos.appendChild(componenteFooter())

   navegacaoNavbar({ pagina: paginaActual })
   actualizarNumerosCarrinho(carrinho.length)
}


// ACTIVAR A FUNCAO ATRAVES DO BOTOES CLICADO ( CARRINHO || FAVORITO)
const containerMain = document.querySelector('.container_main')
if (containerMain) {
   containerMain.appendChild(criarItemCarrinho({ pagina: paginaActual }))
}
