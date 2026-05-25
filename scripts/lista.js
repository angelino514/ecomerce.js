import { componentesHeader } from "../componentes/header.js";
import { componenteMain } from "../componentes/main.js";
import { componenteNavbarMobile } from "../componentes/navbar.js";
import { criarItemCarrinho } from "../componentes/informacoes.js";
import { carrinho } from "../modulos/carrinho.js";
import { itensVendas } from "../bancoDados.js";
import { infoCarrinho } from "../componentes/informacoes.js";
import { criarResumoPedido } from "../componentes/informacoes.js";
import { actualizarEmTempoReal } from "../componentes/informacoes.js";
import { navegacaoNavbar } from "../modulos/evento.js";


const paginaActual = 'lista'
const list = document.querySelector('.list')
if (list) {
   list.appendChild(componentesHeader({ pagina: paginaActual }))
   list.appendChild(componenteNavbarMobile({ pagina: paginaActual }))
   list.appendChild(componenteMain({ pagina: paginaActual }))

    navegacaoNavbar({ pagina: paginaActual })
}



// ACTIVAR A FUNCAO ATRAVES DO BOTOES CLICADO ( CARRINHO || FAVORITO)
const containerMain = document.querySelector('.container_main')
if (containerMain) {
   containerMain.appendChild(infoCarrinho())
   containerMain.appendChild(criarItemCarrinho({pagina : paginaActual}))
   containerMain.appendChild(criarResumoPedido())
   actualizarEmTempoReal()
}



