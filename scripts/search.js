import { itensBanners, itensVendas } from "../bancoDados.js";
import { componentesHeader } from "../componentes/header.js";
import { componenteFooter } from "../componentes/footer.js";
import { componenteMain } from "../componentes/main.js";
import { componenteNavbarMobile } from "../componentes/navbar.js";
import { criarProdutos } from "../modulos/criarprodutos.js";
import { normalizarTexto } from "../modulos/nomralizar.js";
import { navegacaoNavbar } from "../modulos/evento.js";
import { sugestoesIniciais } from "../modulos/sgstInicial.js";
import { categorias } from "../modulos/categorias.js";
import { carrinho } from "../modulos/carrinho.js";
import { actualizarNumeroItens } from "../modulos/actualizar.js";


const paginaActual = 'pesquisa'
const search = document.querySelector('.search')
if (search) {
   search.appendChild(componentesHeader({ pagina: paginaActual }))
   search.appendChild(componenteMain({ pagina: 'pesquisa' }))
   search.appendChild(componenteNavbarMobile({ pagina: paginaActual }))
   search.appendChild(componenteFooter())

   navegacaoNavbar({ pagina: paginaActual })
    actualizarNumeroItens()
}

const parametros = new URLSearchParams(window.location.search)
let dados = parametros.get('dados')
let pagina = parametros.get('pagina')

if (dados != null) {
   resultadoPesuisa({ valor: dados, pagina: pagina })
}

else {
   const container_main = document.querySelector('.container_main')
   if (container_main) {
      container_main.appendChild(sugestoesIniciais({ itens: categorias(), pagina: paginaActual }))
      container_main.classList.add('sugestoes_in')
   }
}

export function resultadoPesuisa({ valor, pagina }) {
   const listaResultado = itensVendas.filter(p => {
      return normalizarTexto(p.iten).includes(normalizarTexto(valor)) || normalizarTexto(p.itenDesc).includes(normalizarTexto(valor))
   })

   const container_main = document.querySelector('.container_main')
   if (container_main) {
      if (listaResultado.length != 0) {
         criarProdutos({ produtos: listaResultado, pagina: paginaActual })
      }

      else {
         container_main.innerHTML = ''
         let p = document.createElement('p')
         p.textContent = 'Iten nao encontrado!'
         container_main.appendChild(p)
      }
   }
}