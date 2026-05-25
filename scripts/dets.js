import { detalhesProduto } from "../componentes/detalhes.js";
import { componentesHeader } from "../componentes/header.js";
import { componenteMain } from "../componentes/main.js";
import { componenteFooter } from "../componentes/footer.js";

const paginaActual = 'detalhes'
const detalhes = document.querySelector('.detalhes')
if (detalhes) {
   detalhes.appendChild(componentesHeader({ pagina: paginaActual }))
   detalhes.appendChild(componenteMain({ pagina: paginaActual }))
   detalhes.appendChild(componenteFooter())
}

const parametros = new URLSearchParams(window.location.search)
let id = parametros.get('dados')
let pagina = parametros.get('pagina')

if (id != null) {
   const main = document.querySelector('main')
   if (main) { 
      main.appendChild(detalhesProduto({id :  Number(id) , pagina : paginaActual}))
   }
}
