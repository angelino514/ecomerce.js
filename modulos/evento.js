import { itensVendas } from "../bancoDados.js";
import { normalizarTexto } from "./nomralizar.js";
import { funcaoListaSugestoes } from "../componentes/sugestoesPesquisa.js";

// FUNÇÃO PARA SUGESTÕES DE PESQUISA 
export function onputSugestoes({ input, origen, pagina }) {

   // LISTA DE SUGESTOES 
   const listaSugestoes = []

   const container_sugestoes = document.querySelector('.container_sugestoes')
   if (!container_sugestoes) return
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
   funcaoListaSugestoes({valores : listaSugestoes , pagina : pagina })
}
