// IMPORTAR A LISTA DE PRODUOTS
import { itensVendas } from "../bancoDados.js"
import { carrinho } from "./dets.js"


//==================
// VARIAVEIS GLOBAIS
//==================
let coresSelecinada = ""
let tamanhoSelionado = ""

// elemento que mostra número de itens no carrinho
let numeros_Itens = document.querySelector('.numeros_Itens')

// PEGAR OS DADOS DE PESQUISA APARTIR DA URL
const params = new URLSearchParams(window.location.search)
let dadosPesquisa = params.get('dadosPesquisa')

// FILTRAR OS ITENS COM BASE NA PESQUISA
let itensFillter = itensVendas.filter(itvs =>
   itvs.iten.includes(dadosPesquisa) || itvs.itenDesc.includes(dadosPesquisa)
)

// CRIAR RESULTADOS DINAMICAMENTE NA TELA
itensFillter.forEach(itens => {

   // criar elementos HTML
   let buttonResultado = document.createElement('button')
   let imgResultado = document.createElement('img')
   let detalhesResultado = document.createElement('div')
   let p_detalheResultado = document.createElement('p')
   let nameIten = document.createElement('span')
   let precoIten = document.createElement('span')
   let iconeResultado = document.createElement('div')
   let icone = document.createElement('span')

   // guardar id no dataset do botão
   buttonResultado.dataset.id = itens.id
   imgResultado.dataset.id = itens.id

   iconeResultado.addEventListener('click', () => {
      let id = iconeResultado.closest('.itens-resultado').dataset.id
      adicionarCarrinho(id)
   })

   // adicionar classes CSS
   buttonResultado.classList.add('itens-resultado')
   imgResultado.classList.add('img-resultado')
   detalhesResultado.classList.add('detalhes-resultado')
   p_detalheResultado.classList.add('p-detalhe-resultado')
   nameIten.classList.add('name-iten')
   precoIten.classList.add('preco-iten')
   icone.classList.add('material-symbols-outlined')

   // inserir na página
   document.querySelector('.dw-resultado').appendChild(buttonResultado)
   buttonResultado.appendChild(imgResultado).src = "../IMGS/../" + itens.img
   buttonResultado.appendChild(detalhesResultado)
   detalhesResultado.appendChild(p_detalheResultado)
   p_detalheResultado.appendChild(nameIten).textContent = itens.iten
   p_detalheResultado.appendChild(precoIten).textContent = itens.preco + "Kz"
   detalhesResultado.appendChild(iconeResultado)
   iconeResultado.appendChild(icone).textContent = "add_shopping_cart"

   imgResultado.addEventListener('click', () => {
      let xb = Number(buttonResultado.dataset.id)
      enviar(xb)
   })
})


// FUNÇÃO PARA ENVIAR O ID PARA OUTRA PÁGINA
function enviar(id) {
   // redirecionar para página de detalhes
   window.location.href = "CPSS/../dets.html?id=" + id
}

if (itensFillter.length === 0) {
   // CASO NÃO ENCONTRE RESULTADOS
}


// BOTÃO VOLTAR PARA HOME
let button_Back = document.querySelector('.button_Back')
if (button_Back) {
   button_Back.addEventListener('click', () => {
      window.location.href = '../index.html'
   })
}

// ================================
//  ABRIR A CAIXA DE PESQUISA E SUGESTÕES
// ================================
document.querySelectorAll('.abrir-pesquisa').forEach(abriPesquisa => {
   abriPesquisa.addEventListener('click', () => {
      document.querySelector('.sugestoes').classList.add('sugestoes-activo')
   })
})


// ================================
//  FECHAR A CAIXA DE PESQUISA E SUGESTÕES
// ================================
document.querySelector('.voltar_segestoes').addEventListener('click', () => {
   document.querySelector('.sugestoes').classList.remove('sugestoes-activo')
})

// função para normalizar texto (remover acentos e deixar minúsculo)
function
   normalizar(texto) {
   return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim()

}

// INPUT DE PESQUISA (SUGESTÕES EM TEMPO REAL)
document.getElementById('input-pesquisar').addEventListener('input', () => {
   let inputPesquisar = document.getElementById('input-pesquisar').value

   // limpar sugestões anteriores
   let sugestoes = []
   document.querySelector('.dw-sugestoes').innerHTML = ""


   if (!inputPesquisar == "") {

      // só pesquisa se tiver texto
      if (!inputPesquisar.trim() == "") {
         for (let i = 0; i < itensVendas.length; i++) {

            // verificar se nome do item contém o texto pesquisado
            if (normalizar(itensVendas[i].iten).includes(normalizar(inputPesquisar))) {

               // evitar duplicados
               if (!sugestoes.some(obj => obj.iten === itensVendas[i].iten)) {
                  sugestoes.push(itensVendas[i])
               }
            }
         }
      }
   }

   // mostrar sugestões na tela
   for (let i = 0; i < sugestoes.length; i++) {
      let sugstButton = document.createElement('button')
      document.querySelector('.dw-sugestoes').appendChild(sugstButton)
      sugstButton.textContent = sugestoes[i].iten
      sugstButton.addEventListener('click', () => {

         // ao clicar numa sugestão
         mostarResultado(sugstButton.textContent)
         rmSugestoes()
      })
   }
})


// PEGAR O INPUT DE PESQUISA
const inputpesquisar_Enter = document.getElementById('input-pesquisar')

// ESCUTAR QUANDO UMA TECLA FOR PRESSIONADA
inputpesquisar_Enter.addEventListener('keydown', (event) => {

   // VERIFICAR SE A TECLA PRESSIONADA FOI ENTER
   if (event.key === "Enter") {
      // VERIFICAR SE O INPUT NÃO ESTÁ VAZIO
      // trim() remove espaços vazios
      if (inputpesquisar_Enter.value !== '') {


         // EXECUTAR A AÇÃO
         mostarResultado(normalizar(inputpesquisar_Enter.value))
         rmSugestoes()


         inputpesquisar_Enter.value = ''
      }
   }
})

// MOSTRAR RESULTADOS BASEADOS NA SUGESTÃO CLICADA
function mostarResultado(dadosSugestoes) {
   if (dadosSugestoes !== "") {
      let dw_resultado = document.querySelector('.dw-resultado')
      if (dw_resultado) {
         dw_resultado.innerHTML = ""  // limpar resultados antigos

      }

      // filtrar novamente com base na sugestão
      let resultadoNativo = itensVendas.filter(r => r.iten.includes(dadosSugestoes) || r.itenDesc.includes(dadosSugestoes))
      resultadoNativo.forEach(itensNativo => {
         // criar elementos dos resultados
         let buttonResultado = document.createElement('button')
         let imgResultado = document.createElement('img')
         let detalhesResultado = document.createElement('div')
         let p_detalheResultado = document.createElement('p')
         let nameIten = document.createElement('span')
         let precoIten = document.createElement('span')
         let iconeResultado = document.createElement('div')
         let icone = document.createElement('span')

         buttonResultado.dataset.id = itensNativo.id
         imgResultado.dataset.id = itensNativo.id

         iconeResultado.addEventListener('click', () => {
            let id = iconeResultado.closest('.itens-resultado').dataset.id
            adicionarCarrinho(id)
         })

         buttonResultado.classList.add('itens-resultado')
         imgResultado.classList.add('img-resultado')
         detalhesResultado.classList.add('detalhes-resultado')
         p_detalheResultado.classList.add('p-detalhe-resultado')
         nameIten.classList.add('name-iten')
         precoIten.classList.add('preco-iten')
         icone.classList.add('material-symbols-outlined')

         document.querySelector('.dw-resultado').appendChild(buttonResultado)
         buttonResultado.appendChild(imgResultado).src = "../IMGS/../" + itensNativo.img
         buttonResultado.appendChild(detalhesResultado)
         detalhesResultado.appendChild(p_detalheResultado)
         p_detalheResultado.appendChild(nameIten).textContent = itensNativo.iten
         p_detalheResultado.appendChild(precoIten).textContent = itensNativo.preco + "Kz"
         detalhesResultado.appendChild(iconeResultado)
         iconeResultado.appendChild(icone).textContent = "add_shopping_cart"

         imgResultado.addEventListener('click', () => {
            let xb = Number(buttonResultado.dataset.id)
            enviar(xb)
         })
      })
   }
}

// FECHAR SUGESTÕES
function rmSugestoes() {
   document.querySelector('.sugestoes').classList.remove('sugestoes-activo')
}


// ================================
// ADICIONAR AO CARRINHO
// ================================
function adicionarCarrinho(id) {
   for (let i = 0; i < itensVendas.length; i++) {
      if (id == itensVendas[i].id) {
         coresSelecinada = itensVendas[i].cores[0]
         tamanhoSelionado = itensVendas[i].tamanho[0]


         if (coresSelecinada !== "" && tamanhoSelionado !== "") {
            // verificar se ja existe este item...
            let existemItem = carrinho.find(existe =>
               existe.id === itensVendas[i].id && existe.cor === coresSelecinada && existe.tamanho === tamanhoSelionado
            )

            let xb = 0
            if (existemItem) {
               existemItem.quantidade++
               xb = existemItem.quantidade * existemItem.preco
               quantidadeItens(existemItem.id, existemItem.cor, existemItem.tamanho, existemItem.quantidade, xb)
            }

            else {
               carrinho.push({ id: itensVendas[i].id, iten: itensVendas[i].iten, img: itensVendas[i].img, preco: itensVendas[i].preco, cor: coresSelecinada, descricao: itensVendas[i].itenDesc, tamanho: tamanhoSelionado, quantidade: 1 })

               // criar elementos dinamicos...
               let dO_itensCarrinho = document.createElement('div')
               dO_itensCarrinho.classList.add('itensCarrinho')
               dO_itensCarrinho.dataset.id = itensVendas[i].id
               dO_itensCarrinho.dataset.nome = itensVendas[i].iten
               dO_itensCarrinho.dataset.cor = coresSelecinada
               dO_itensCarrinho.dataset.tamanho = tamanhoSelionado

               let faceItens = document.createElement('div')
               faceItens.classList.add('face')

               let dw_carrinho = document.createElement('div')
               dw_carrinho.classList.add('dw_carrinho')

               let img_carrinho = document.createElement('img')
               img_carrinho.classList.add('img_carrinho')
               img_carrinho.src = itensVendas[i].img
               img_carrinho.alt = itensVendas[i].iten

               let nome_iten_carrinho = document.createElement('span')
               nome_iten_carrinho.classList.add('span_carrinho')
               nome_iten_carrinho.textContent = itensVendas[i].iten

               let do_ver = document.createElement('div')
               do_ver.classList.add('do_ver')

               let botao_ver = document.createElement('button')
               botao_ver.classList.add('botaos_carrinho')
               botao_ver.classList.add('material-symbols-outlined')
               botao_ver.textContent = 'arrow_forward_ios'

               botao_ver.addEventListener('click', () => {
                  let ver_itens_carrinho = document.querySelector('.ver_itens_carrinho')
                  ver_itens_carrinho.classList.add('ver_itens_carrinho_activo')

                  setTimeout(() => {
                     let faceOll = document.querySelector('.ver_itens_carrinho .face')
                     faceOll.classList.add('ok')
                     console.log(faceOll)
                  }, 100)

                  ver_detals_carrinho(dO_itensCarrinho.dataset.id, dO_itensCarrinho.dataset.nome, dO_itensCarrinho.dataset.cor, dO_itensCarrinho.dataset.tamanho)
               })

               let span_ver_detal = document.createElement('span')
               span_ver_detal.textContent = coresSelecinada

               let dO_quantidade = document.createElement('div')
               dO_quantidade.classList.add('dO_quantidade')

               let botao_add_qt = document.createElement('button')
               botao_add_qt.classList.add('material-symbols-outlined')
               botao_add_qt.textContent = 'add'

               let span_quantidade = document.createElement('span')
               span_quantidade.classList.add('span_quantidade')
               span_quantidade.classList.add('itenQuantdade')
               span_quantidade.textContent = 1

               let botao_reduz_qt = document.createElement('button')
               botao_reduz_qt.classList.add('material-symbols-outlined')
               botao_reduz_qt.textContent = 'remove'

               let removerItens = document.createElement('button')
               removerItens.classList.add('material-symbols-outlined')
               removerItens.textContent = 'close'

               removerItens.addEventListener('click', () => {
                  let dadosItens = removerItens.closest('.itensCarrinho')

                  let d_Id = dadosItens.dataset.id
                  let d_Cor = dadosItens.dataset.cor
                  let d_Tamanho = dadosItens.dataset.tamanho
                  console.log(d_Id, d_Cor, d_Tamanho)
                  eliminarItens(d_Id, d_Cor, d_Tamanho)
               })


               let id_Face_Itens = document.getElementById('faceItens')
               if (id_Face_Itens) {
                  id_Face_Itens.appendChild(dO_itensCarrinho)
                  dO_itensCarrinho.appendChild(faceItens)

                  faceItens.appendChild(dw_carrinho)

                  dw_carrinho.appendChild(img_carrinho)
                  dw_carrinho.appendChild(nome_iten_carrinho)

                  faceItens.appendChild(do_ver)
                  do_ver.appendChild(botao_ver)
                  do_ver.appendChild(span_ver_detal)

                  faceItens.appendChild(dO_quantidade)
                  dO_quantidade.appendChild(span_quantidade)

                  faceItens.appendChild(removerItens)
               }
            }
         }
      }

   }


   localStorage.setItem("carrinho", JSON.stringify(carrinho))
   numeros_Itens.textContent = carrinho.length

   let sect_avisoAdicionar = document.querySelector('.sect_avisoAdicionar')
   if (sect_avisoAdicionar) {
      sect_avisoAdicionar.classList.add('activo_avisoAdicionar')
   }


   // funcao para exbir a quantidade de itens com as mesmas caracteristicas...
   function quantidadeItens(q_Id, q_Cor, q_Tamanho, q_quantidade, q_preco) {
      let q_dOitens = document.querySelector(`.itensCarrinho[data-id="${q_Id}"][data-cor="${q_Cor}"][data-tamanho="${q_Tamanho}"]`)

      let q_itenQuantdade = q_dOitens.querySelector('.itenQuantdade')
      q_itenQuantdade.textContent = q_quantidade
   }
   removerMensgem()
}


// Revmover a mensagem de retiarar do carrinho...
function removerMensgem() {
   let activo_avisoAdicionar = document.querySelector('.activo_avisoAdicionar')
   if (activo_avisoAdicionar) {
      setTimeout(() => {
         activo_avisoAdicionar.classList.remove('activo_avisoAdicionar')
      }, 1000)
   }
}


// ------------------------------
// FUNÇÃO: ABRIR A PAGINA DE CARRINHO
// ------------------------------
let verItensCarrinho = document.querySelector('.verItensCarrinho')
if (verItensCarrinho) {
   verItensCarrinho.addEventListener('click', () => {
      if (carrinho.length !== 0) {
         document.querySelector('.carrinho').classList.add('carrinhoActivo')
         let carrinhoActivo = document.querySelector('.carrinhoActivo')

         if (carrinhoActivo) {
            let dO_pagar = document.querySelector('.dO_pagar')
            if (dO_pagar) {
               setTimeout(() => {
                  dO_pagar.classList.add('dO_pagar_Activo')
               }, 1000)
            }
         }
      }

      else {
         let sect_avisoAdicionar = document.querySelector('.sect_avisoAdicionar')
         sect_avisoAdicionar.classList.add('activo_avisoAdicionar')


         let avisoAdicionar = document.querySelector('.avisoAdicionar')
         avisoAdicionar.textContent = "carrinho vazio"

         document.querySelector('.processo').classList.add('processo_None')

         setTimeout(() => {
            document.querySelector('.processo').classList.remove('processo_None')
            sect_avisoAdicionar.classList.remove('activo_avisoAdicionar')
         }, 1000)
      }
   })
}


// ================================
// ELIMINAR ITEM DO CARRINHO
// ================================
function eliminarItens(d_Id, d_Cor, d_Tamanho) {
   let d_dOitens = document.querySelector(`.itensCarrinho[data-id="${d_Id}"][data-cor="${d_Cor}"][data-tamanho="${d_Tamanho}"]`)
   let existeItem = carrinho.find(vef => vef.id == d_Id && vef.cor == d_Cor && vef.tamanho == d_Tamanho)
   if (existeItem) {
      if (existeItem.quantidade >= 1) {
         existeItem.quantidade -= 1
      }

      if (d_dOitens) {
         let sQuantidade = d_dOitens.querySelector('.itenQuantdade')
         sQuantidade.textContent = existeItem.quantidade
      }

      if (existeItem.quantidade === 0) {
         let indice = carrinho.findIndex(p => p.id == d_Id && p.cor == d_Cor && p.tamanho == d_Tamanho)
         if (indice !== -1) {
            carrinho.splice(indice, 1)
         }

         if (d_dOitens) {

            d_dOitens.classList.add('dOItens_fadeUP')
            setTimeout(() => {
               d_dOitens.remove()
            }, 100)
         }
      }
   }

   // subtrairPrecos(dOItens.dataset.id)

   numeros_Itens.forEach(n => {
      if (n) {
         n.textContent = carrinho.length
      }
   })
   localStorage.setItem("carrinho", JSON.stringify(carrinho))
}

// ================================
// VER DETALHES DOS ITENS QUE ESTÃO NO CARRINHO
// ================================
let art_container_ver = document.querySelector('.art_container_ver')
function ver_detals_carrinho(id, nome, cor, tamanho) {
   art_container_ver.innerHTML = ''
   let obs_carrinho = carrinho.filter(p =>
      p.id == id && p.iten == nome && p.cor == cor && p.tamanho == tamanho
   )

   obs_carrinho.forEach(obs => {
      let obsImg = document.createElement('img')
      obsImg.src = obs.img
      obsImg.classList.add('obsImg')

      let dw_obs_container = document.createElement('div')
      dw_obs_container.classList.add('dw_obs_container')

      let obsIten = document.createElement('h1')
      obsIten.textContent = obs.iten

      let obs_preco_moeda = document.createElement('p')
      obs_preco_moeda.classList.add('obs_preco_moeda')

      let obsPreco = document.createElement('h2')
      obsPreco.classList.add('obsPreco')
      obsPreco.textContent = obs.preco * obs.quantidade

      let obsMoeda = document.createElement('span')
      obsMoeda.textContent = 'Kz'

      let obsDescricao = document.createElement('p')
      obsDescricao.textContent = obs.descricao

      let obsCor = document.createElement('span')
      obsCor.textContent = 'cor: ' + obs.cor

      let obsTamanho = document.createElement('span')
      obsTamanho.textContent = 'tamanho: ' + obs.tamanho


      art_container_ver.appendChild(obsImg)
      art_container_ver.appendChild(dw_obs_container)
      dw_obs_container.appendChild(obsIten)

      dw_obs_container.appendChild(obs_preco_moeda)
      obs_preco_moeda.appendChild(obsPreco)
      obs_preco_moeda.appendChild(obsMoeda)

      dw_obs_container.appendChild(obsDescricao)
      dw_obs_container.appendChild(obsCor)
      dw_obs_container.appendChild(obsTamanho)
   })
}