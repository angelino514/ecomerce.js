import { componentesHeader } from "../componentes/header.js"
import { componenteMain } from "../componentes/main.js"
import { componenteNavbarMobile } from "../componentes/navbar.js"
import { componenteFooter } from "../componentes/footer.js"
import { itensVendas } from "../bancoDados.js"
import { criarProdutos } from "../modulos/criarprodutos.js"
import { sugestoesIniciais } from "../modulos/sgstInicial.js"
import { categorias } from "../modulos/categorias.js"


const paginaActual = 'categoria'
const categoria = document.querySelector('.categoria')
if (categoria) {
   categoria.appendChild(componentesHeader({ pagina: paginaActual }))
   categoria.appendChild(componenteMain({ pagina: paginaActual }))
   categoria.appendChild(componenteNavbarMobile({ pagina: paginaActual }))
   categoria.appendChild(componenteFooter())
}

const parametros = new URLSearchParams(window.location.search)
let dados = parametros.get('dados')
let pagina = parametros.get('pagina')




if (dados != null) {
   resultadoCategoria({ valor: dados, pagina: pagina })
}

else {
   const container_main = document.querySelector('.container_main')
   if (container_main) {
      container_main.appendChild(sugestoesIniciais({ itens: categorias(), pagina: paginaActual }))
      container_main.classList.add('sugestoes_in')
   }
}

export function resultadoCategoria({ valor, pagina }) {

   const filtroCategoria = itensVendas.filter(p => p.categoria == valor)

   const container_main = document.querySelector('.container_main')
   if (container_main) {
      criarProdutos({ produtos: filtroCategoria, pagina: paginaActual })
   }
}

