import { onputSugestoes } from "../modulos/evento.js"
import { dadosPesquisa } from "../modulos/dadospesquisa.js"


// ELEMENTOS DINAMICOES PARA SUGESTOES DE PESQUISA
export function sugestoesPesquisa({ pagina }) {

   // DIV PRINCIPAL 
   let sugestoes = document.createElement('div')
   sugestoes.classList.add('sugestoes')

   // FACE
   let face = document.createElement('div')
   face.classList.add('face')

   //CONTAINER INPUT 
   let sugestoes_input = document.createElement('div')
   sugestoes_input.classList.add('sugestoes_input')

   // CONTENT INPUT
   let sugestoes_content = document.createElement('div')
   sugestoes_content.classList.add('sugestoes_content')

   // INPUT 
   let valor_sugestoes = document.createElement('input')
   valor_sugestoes.classList.add('valor_sugestoes')
   valor_sugestoes.type = 'text'
   valor_sugestoes.placeholder = 'Pesuisar produto...'

   valor_sugestoes.addEventListener('input', () => {
      onputSugestoes({
         input: valor_sugestoes,
         origen: valor_sugestoes.closest('.sugestoes').closest('.header'),
         pagina: pagina
      })
   })

   valor_sugestoes.addEventListener('keydown', (event) => {
      if (event.key === "Enter") {
         if (valor_sugestoes.value != '') {
            dadosPesquisa({ valor: valor_sugestoes.value, pagina: pagina })
            limparRemover(valor_sugestoes.closest('.sugestoes').closest('.header'))
         }
      }
   })

   // BUTTON PESQUISAR
   let pesuisar = document.createElement('button')
   pesuisar.classList.add('pesquisar')

   // ICONE DE PESQUISA
   let icone = document.createElement('span')
   icone.classList.add('material-symbols-outlined')
   icone.textContent = 'search'

   //  =============================
   // ORDEM EXACTA 
   // ==============================
   sugestoes.appendChild(face)
   // FACE
   face.appendChild(sugestoes_input)
   //SUGESTOES
   sugestoes_input.appendChild(sugestoes_content)
   // SUGESTOES INPUT
   sugestoes_content.appendChild(valor_sugestoes)
   // SUGESTOES CONTENT
   sugestoes_content.appendChild(pesuisar)
   // PESQUISAR
   pesuisar.appendChild(icone)

   // CONTAINER PARA LISTA DE SUGESTOES
   let container_sugestoes = document.createElement('div')
   container_sugestoes.classList.add('container_sugestoes')

   // VALORES DE SUGESTOES 
   face.appendChild(container_sugestoes)

   return sugestoes
}


export function funcaoListaSugestoes({ valores, pagina }) {
   valores.slice(0 , 10).forEach(iten => {
      const container_sugestoes = document.querySelector('.container_sugestoes')

      if (container_sugestoes) {

         let buttons_sugestoes = document.createElement('button')
         buttons_sugestoes.dataset.valor = iten
         buttons_sugestoes.classList.add('buttons_sugestoes')

         buttons_sugestoes.addEventListener('click', () => {
            dadosPesquisa({
               valor: buttons_sugestoes.dataset.valor,
               pagina: pagina
            })

            limparRemover(buttons_sugestoes.closest('.container_sugestoes').closest('.header'))
         })

         let icon = document.createElement('span')
         icon.classList.add('material-symbols-outlined')
         icon.textContent = 'search'

         let texto = document.createElement('span')
         texto.textContent = iten

         buttons_sugestoes.append(icon, texto)

         container_sugestoes.appendChild(buttons_sugestoes)
      }
   })
}

function limparRemover(origem) {
   const container_input = origem.querySelector('.container_input')
   container_input.classList.remove('container_input_activo')
   const container_sugestoes = origem.querySelector('.container_sugestoes')
   container_sugestoes.classList.remove('container_sugestoes_activo')
}