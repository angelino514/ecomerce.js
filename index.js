import { componentesHeader } from "./componentes/header.js";
import { componenteMain } from "./componentes/main.js";
import { criarProdutos } from "./modulos/criarprodutos.js";
import { componenteNavbarMobile } from "./componentes/navbar.js";
import { componenteFooter } from "./componentes/footer.js";
import { itensVendas } from "./bancoDados.js";


const paginaActual = 'index'
const root = document.querySelector('.root')
root.appendChild(componentesHeader({ pagina: paginaActual }))
root.appendChild(componenteMain({ pagina: paginaActual }))
root.appendChild(componenteNavbarMobile({ pagina: paginaActual }))
root.appendChild(componenteFooter())

const container_main = document.querySelector('.container_main')
if (container_main) {
    criarProdutos({produtos : itensVendas , pagina : paginaActual})
}