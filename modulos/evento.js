import { itensVendas } from "../bancoDados.js";
import { normalizarTexto } from "./nomralizar.js";
import { funcaoListaSugestoes } from "../componentes/sugestoesPesquisa.js";
import { caminhosPaginasNavbar } from "./caminhosPaginas.js";

// FUNÇÃO PARA SUGESTÕES DE PESQUISA 
export function onputSugestoes({ input, origen, pagina }) {

   // LISTA DE SUGESTOES 
   const listaSugestoes = []

   const container_sugestoes = document.querySelector('.container_sugestoes')
   container_sugestoes.innerHTML = ''

   const container_input = origen.querySelector('.container_input')

   if (input.value != '') {

      // VERIFICAR SE O ITEM É IGUAL AO ITEN DA LISTA DE VENDAS E EVITAR REPETIÇÃO
      for (let i = 0; i < itensVendas.length; i++) {
         if (normalizarTexto(itensVendas[i].iten).includes(normalizarTexto(input.value))) {
            if (!listaSugestoes.some(obj => obj == itensVendas[i].iten)) {
               listaSugestoes.push(itensVendas[i].iten)
            }
         }
      }

      // ADICONAR CLASSES AOS ITENS DE SUGESTOES 
      container_input.classList.add('container_input_activo')
      container_sugestoes.classList.add('container_sugestoes_activo')
   }

   else {
      // REMOVER CLASSES AOS ITENS DE SUGESTOES 
      container_input.classList.remove('container_input_activo')
      container_sugestoes.classList.remove('container_sugestoes_activo')
   }
   funcaoListaSugestoes({ valores: listaSugestoes, pagina: pagina })
}


// ADICONAR E REMOVER CLASSE DOS LABELS ITENS
export function navegacaoLabels({ origen, iten_label, pagina }) {
   let labeis_itens = origen.querySelectorAll('.labeis_itens')

   labeis_itens.forEach(label_iten => {
      label_iten.classList.remove('label_activo')
   })
   iten_label.classList.add('label_activo')
}



// NAVEGACAO MOBILE ADICONAR E REMOVER CLASSES
export function navegacaoNavbar({ pagina }) {
   const links_mobiles = document.querySelectorAll('.link_mobile')
   links_mobiles.forEach(link => {
      if (link.dataset.nome == pagina) {
         link.classList.add('link_activo')
      }

      link.addEventListener('click', () => {
         links_mobiles.forEach(link_2 => {
            link_2.classList.remove('link_activo')
         })

         link.classList.add('link_activo')
      })
   }) 

}
