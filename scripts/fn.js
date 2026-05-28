import { componenteMain } from "../componentes/main.js";
import { componentesHeader } from "../componentes/header.js";
import { criarContainerFinalizar } from "../componentes/finalizar.js";
import { componenteFooter } from "../componentes/footer.js";


const parametros = new URLSearchParams(window.location.search)
let pagina = parametros.get('pagina')
let id = parametros.get('id')
let cor = parametros.get('cor')
let tamanho = parametros.get('tamanho')

const finalizar = document.querySelector('.finalizar')
const paginaActual = 'finalizar'
if (finalizar) {


   finalizar.appendChild(componentesHeader({ pagina: paginaActual }))
   finalizar.appendChild(componenteMain({ pagina: paginaActual }))
   finalizar.appendChild(componenteFooter())

   const container_main = document.querySelector('.container_main')
   if (container_main) {
      if (pagina) {
         container_main.appendChild(criarContainerFinalizar({
            pagina: pagina,
            id: id,
            cor: cor, 
            tamanho : tamanho
         }))
      }
      container_main.classList.add('container_finalizar')
   }

}