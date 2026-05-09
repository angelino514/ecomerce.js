// ================================
// IMPORTAÇÃO DE DADOS EXTERNOS
// ================================
// Aqui estás a importar a base de dados dos produtos, carrinho, desconto e banners
import { itensVendas } from "./bancoDados.js"
import { carrinho } from "./JSS/dets.js"
import { desconto } from "./bancoDados.js"
import { itensBanners } from "./bancoDados.js"
import { favoritos } from "./JSS/dets.js"

let numero_favorito = document.querySelectorAll('.numero_favorito')

// ================================
// RENDERIZAÇÃO DOS PRODUTOS (0 - 10)
// ================================
// Aqui crias dinamicamente os primeiros produtos e adicionas na lista principal
itensVendas.slice(0, 10).forEach(itenVenda => {

   // criação dos elementos do produto (card)
   let itensButton = document.createElement('button')
   itensButton.dataset.id = itenVenda.id

   let itenImg = document.createElement('img')
   itenImg.classList.add('itens-Button')
   itenImg.dataset.id = itenVenda.id

   let itenDetalhes = document.createElement('div')

   let itenP = document.createElement('p')
   itenP.classList.add('itenP')

   let itenIten = document.createElement('span')
   let itenPreco = document.createElement('span')
   let dwIcone = document.createElement('div')
   let icone = document.createElement('span')

   dwIcone.addEventListener('click', () => {
      let dadosPincipal = dwIcone.closest('#itensButton')
      adicionarCarrinho(Number(dadosPincipal.dataset.id))
      guardar()
   })

   // inserção no DOM (lista principal)
   document.querySelector('.list-produtos').appendChild(itensButton)
   itensButton.appendChild(itenImg).src = itenVenda.img
   itensButton.appendChild(itenDetalhes)
   itenDetalhes.appendChild(itenP)
   itenP.appendChild(itenIten).textContent = itenVenda.iten
   itenP.appendChild(itenPreco).textContent = itenVenda.preco + 'Kz'

   itenDetalhes.appendChild(dwIcone)
   dwIcone.appendChild(icone)
   icone.textContent = "add_shopping_cart"

   itenImg.classList.add('skeleton')

   itensButton.setAttribute("id", "itensButton")
   itenImg.classList.add('imgProdutos')
   itenDetalhes.classList.add('detalhes-produtos')
   itenIten.classList.add('precos-name')
   itenPreco.classList.add('precos-name')
   icone.classList.add('material-symbols-outlined')
})


// ================================
// RENDERIZAÇÃO DOS PRODUTOS (10 - 30)
// ================================
// Segunda lista de produtos (segundo container)
itensVendas.slice(10, 30).forEach(itenVenda => {
   // criação dos elementos do produto (card)
   let itensButton = document.createElement('button')
   itensButton.dataset.id = itenVenda.id

   let itenImg = document.createElement('img')
   itenImg.classList.add('itens-Button')
   itenImg.dataset.id = itenVenda.id

   let itenDetalhes = document.createElement('div')

   let itenP = document.createElement('p')
   itenP.classList.add('itenP')

   let itenIten = document.createElement('span')
   let itenPreco = document.createElement('span')
   let dwIcone = document.createElement('div')
   let icone = document.createElement('span')

   // evento de adicionar ao carrinho
   dwIcone.addEventListener('click', () => {
      let dadosPincipal = dwIcone.closest('#itensButton')
      adicionarCarrinho(Number(dadosPincipal.dataset.id))
      guardar()
   })

   document.querySelector('.seg-lista').appendChild(itensButton)
   itensButton.appendChild(itenImg).src = itenVenda.img
   itensButton.appendChild(itenDetalhes)
   itenDetalhes.appendChild(itenP)
   itenP.appendChild(itenIten).textContent = itenVenda.iten
   itenP.appendChild(itenPreco).textContent = itenVenda.preco + 'Kz'

   itenDetalhes.appendChild(dwIcone)
   dwIcone.appendChild(icone)
   icone.textContent = "add_shopping_cart"

   itenImg.classList.add('skeleton')

   itensButton.setAttribute("id", "itensButton")
   itenImg.classList.add('imgProdutos')
   itenDetalhes.classList.add('detalhes-produtos')
   itenIten.classList.add('precos-name')
   itenPreco.classList.add('precos-name')
   icone.classList.add('material-symbols-outlined')
})


// ================================
// FILTRO DE PRODUTOS PROMOÇÃO
// ================================
// Aqui filtras apenas produtos com promoção ativa
const promoces = itensVendas.filter(p => p.promocao == true)
const bannersImg = document.querySelectorAll('.bannersImg')
bannersImg.forEach((banner, index) => {

   const item = promoces[index] // produto atual da promoção

   // Cria a imagem do banner
   const img = document.createElement('img')
   img.src = item.img
   img.classList.add('imgBanner')

   // Container principal do banner
   const container_banners = document.createElement('div')
   container_banners.classList.add('container_banners')

   // Sub-container de promoção
   const container_Promo = document.createElement('div')
   container_Promo.classList.add('container_Promo')

   // Preço do produto
   const preco = document.createElement('p')
   preco.textContent = `${item.preco} Kz`
   preco.classList.add('promo_preco')

   // Percentagem de promoção
   const promo_percemtagem = document.createElement('p')
   promo_percemtagem.classList.add('promo_percemtagem')
   promo_percemtagem.textContent = `Promoção com desconto ${desconto}%`

   // Botão de compra
   const botao = document.createElement('button')
   botao.textContent = 'Comprar Agora'
   botao.dataset.id = item.id
   botao.classList.add('bannerButton', 'itens-Button')

   // Montagem da estrutura
   container_Promo.appendChild(preco)
   container_Promo.appendChild(promo_percemtagem)
   container_Promo.appendChild(botao)

   container_banners.appendChild(container_Promo)

   banner.appendChild(img)
   banner.appendChild(container_banners)
})


// ================================
// FILTRO DE CATEGORIAS
// ================================
// aqui crias lista única de categorias
const tipoCateogoria = []
for (let i = 0; i < itensVendas.length; i++) {
   if (!tipoCateogoria.some(obj => obj.categoria === itensVendas[i].categoria)) {
      tipoCateogoria.push(itensVendas[i])
   }
}

// criação dos botões de categoria (carrossel, navbar e menu)
tipoCateogoria.forEach(listCatg => {
   let catButton = document.createElement('button')
   let imgCtg = document.createElement('img')
   let textCt = document.createElement('p')

   catButton.setAttribute("id", "btt-itens-categorias")
   imgCtg.classList.add('imgCtg')
   textCt.classList.add('textCt')
   catButton.classList.add('button-fillter')

   document.querySelector('.itens-carrossel').appendChild(catButton)
   catButton.appendChild(imgCtg).src = listCatg.img
   catButton.appendChild(textCt).textContent = listCatg.categoria

   catButton.dataset.id = listCatg.id

   let ancora = document.createElement('button')
   ancora.setAttribute("id", "links-scroll")
   ancora.classList.add('button-fillter')
   ancora.dataset.id = listCatg.id
   document.getElementById('scroll-navbar').appendChild(ancora).textContent = listCatg.categoria
})


// ================================
// FILTRAGEM POR CATEGORIA
// ================================
// quando clicas numa categoria
document.querySelectorAll('.button-fillter').forEach(buttonFillter => {
   buttonFillter.addEventListener('click', () => {
      let btc = Number(buttonFillter.dataset.id)
      let textoFillter = true

      for (let i = 0; i < itensVendas.length; i++) {
         if (btc === itensVendas[i].id) {
            textoFillter = itensVendas[i].categoria
         }
      }

      paginaCategoaria(textoFillter)
   })
})


// ================================
// DETALHE DO PRODUTO
// ================================
function paginaCategoaria(dadosCategoria) {
   window.location.href = "CPSS/filter.html?dadosCategoria=" + dadosCategoria
}


// ================================
// PRODUTOS DESTAQUE
// ================================
let listaDestaque = itensVendas.filter(ld => ld.destaque == true)
listaDestaque.forEach(ldO => {
   let butDesatque = document.createElement('button')
   butDesatque.setAttribute("id", "itensDestaque")
   butDesatque.classList.add('itens-Button')
   let imgDestaque = document.createElement('img')
   imgDestaque.classList.add('viewImg')

   butDesatque.dataset.id = ldO.id

   document.querySelector('.itens-destaques').appendChild(butDesatque)
   butDesatque.appendChild(imgDestaque).src = ldO.img
})



// Pegar os dados da Lista de produtos a vendas
document.querySelectorAll('.itens-Button').forEach(button => {
   button.addEventListener('click', () => {
      let xid = true
      let xb = Number(button.dataset.id)
      for (let i = 0; i < itensVendas.length; i++) {
         if (xb === itensVendas[i].id) {
            xid = itensVendas[i].id
         }
      }

      enviarDethales(xid)
   })
})

// ================================
// CARRINHO (CONTAGEM)
// ================================
let numeros_Itens = document.querySelectorAll('.numeros_Itens')
numeros_Itens.forEach(n => {
   if (n) {
      n.textContent = carrinho.length
   }
})


// ================================
// ABRIR / FECHAR CARRINHO
// ================================
let verItensCarrinho = document.querySelectorAll('.verItensCarrinho')
verItensCarrinho.forEach(v => {
   v.addEventListener('click', () => {
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
         let valor = 'carrinho'
         avisoGeral(valor)
      }
   })
})



let voltar = document.querySelector('.voltar')
if (voltar) {
   voltar.addEventListener('click', () => {
      document.querySelector('.carrinho').classList.remove('carrinhoActivo')
   })
}

// ================================
// ENVIAR PARA DETALHES
// ================================
function enviarDethales(id) {
   const itensConvertidos = JSON.stringify(itensVendas)
   window.location.href = "CPSS/dets.html?id=" + id
}


// transformar texto
function normalizar(texto) {
   return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim()

}

// ================================
//  ABRIR A CAICA DE PESQUISA E SUGESTÕES
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

// funcao de busca e segestoes de  pesquisa...
document.getElementById('input-pesquisar').addEventListener('input', () => {
   let inputPesquisar = document.getElementById('input-pesquisar').value

   let sugestoes = []
   document.querySelector('.dw-sugestoes').innerHTML = ""

   if (!inputPesquisar == "") {
      if (!inputPesquisar.trim() == "") {
         for (let i = 0; i < itensVendas.length; i++) {
            if (normalizar(itensVendas[i].iten).includes(normalizar(inputPesquisar))) {
               if (!sugestoes.some(obj => obj.iten === itensVendas[i].iten)) {
                  sugestoes.push(itensVendas[i])
               }
            }
         }
      }

   }

   // enviar dados ao html 
   for (let i = 0; i < sugestoes.length; i++) {
      let sugstButton = document.createElement('button')
      document.querySelector('.dw-sugestoes').appendChild(sugstButton)
      sugstButton.textContent = sugestoes[i].iten
      sugstButton.addEventListener('click', () => {
         enviarDados(sugstButton.textContent)
      })
   }
})

// PEGAR O INPUT DE PESQUISA
const inputpesquisar_Enter = document.getElementById('input-pesquisar')

// ESCUTAR QUANDO UMA TECLA FOR PRESSIONADA
inputpesquisar_Enter.addEventListener('keydown', (event) => {

   // VERIFICAR SE A TECLA PRESSIONADA FOI ENTER
   if (event.key === "Enter") {
      if (inputpesquisar_Enter.value !== '') {
         enviarDados(normalizar(inputpesquisar_Enter.value))
      }
   }
})

// funcao para enviar dados apartir do input 
document.querySelector('.button-pesquisar').addEventListener('click', () => {
   let inputPesquisar = document.getElementById('input-pesquisar').value
   if (inputPesquisar !== "") {
      enviarDados(inputPesquisar)
   }
})


//  funcao enviar dados para  a pagina de resultado 
function enviarDados(dadosPesquisa) {
   window.location.href = "CPSS/search.html?dadosPesquisa=" + dadosPesquisa
   let inputPesquisar = document.getElementById('input-pesquisar')
   inputPesquisar.value = ""
}

let coresSelecinada = ""
let tamanhoSelionado = ""


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
                  }, 100)

                  ver_detals_carrinho(dO_itensCarrinho.dataset.id, dO_itensCarrinho.dataset.nome, dO_itensCarrinho.dataset.cor, dO_itensCarrinho.dataset.tamanho)
               })

               let span_ver_detal = document.createElement('span')
               span_ver_detal.textContent = coresSelecinada

               let dO_quantidade = document.createElement('div')
               dO_quantidade.classList.add('dO_quantidade')


               let span_quantidade = document.createElement('span')
               span_quantidade.classList.add('span_quantidade')
               span_quantidade.classList.add('itenQuantdade')
               span_quantidade.textContent = 1



               let removerItens = document.createElement('button')
               removerItens.classList.add('material-symbols-outlined')
               removerItens.textContent = 'delete'

               removerItens.addEventListener('click', () => {
                  let dadosItens = removerItens.closest('.itensCarrinho')

                  let d_Id = dadosItens.dataset.id
                  let d_Cor = dadosItens.dataset.cor
                  let d_Tamanho = dadosItens.dataset.tamanho
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
   numeros_Itens.forEach(n => {
      if (n) {
         n.textContent = carrinho.length
      }
   })

   // funcao para exbir a quantidade de itens com as mesmas caracteristicas...
   function quantidadeItens(q_Id, q_Cor, q_Tamanho, q_quantidade, q_preco) {
      let q_dOitens = document.querySelector(`.itensCarrinho[data-id="${q_Id}"][data-cor="${q_Cor}"][data-tamanho="${q_Tamanho}"]`)

      let q_itenQuantdade = q_dOitens.querySelector('.itenQuantdade')
      q_itenQuantdade.textContent = q_quantidade
   }
   removerMensgem()

   let valor = 'add'
   avisoGeral(valor)
}


//=========================
// CRIAR ELEMENTO DINAMICOS DO FAVORITO
//======================
let face_favorito = document.querySelector('.face_favorito')
function elementosFavoritos() {

   face_favorito.innerHTML = ''

   favoritos.forEach(fv => {
      let fv_container = document.createElement('div')
      fv_container.classList.add('fv_container')
      fv_container.dataset.id = fv.id
      fv_container.dataset.cor = fv.cor
      fv_container.dataset.tamanho = fv.tamanho

      let fv_face = document.createElement('div')
      fv_face.classList.add('face')

      let fv_dOne = document.createElement('div')
      fv_dOne.classList.add('fv_dOne')

      let fv_img = document.createElement('img')
      fv_img.classList.add('fv_img')
      fv_img.src = fv.img

      let fv_span_iten = document.createElement('p')
      fv_span_iten.textContent = fv.iten
      fv_span_iten.classList.add('fv_span_iten')

      let fv_dOButtons = document.createElement('button')
      fv_dOButtons.classList.add('fv_dOButtons')
      fv_dOButtons.classList.add('material-symbols-outlined')
      fv_dOButtons.textContent = 'delete'

      fv_dOButtons.addEventListener('click', () => {
         let id = Number(fv_dOButtons.closest('.fv_container').dataset.id)
         let cor = fv_dOButtons.closest('.fv_container').dataset.cor
         let tamanho = fv_dOButtons.closest('.fv_container').dataset.tamanho

         eliminarFavorito(id)
      })

      let face_favorito = document.querySelector('.face_favorito')
      if (face_favorito) {
         face_favorito.appendChild(fv_container)
         fv_container.appendChild(fv_face)
         fv_face.appendChild(fv_dOne)
         fv_dOne.appendChild(fv_img)
         fv_dOne.appendChild(fv_span_iten)
         fv_face.appendChild(fv_dOButtons)
      }
   })
}
elementosFavoritos()


// ============================
// FUNCAO DE AVISO GERAL ( EXIBIR MENSAGEM DE AVSISO )
//=============================
function avisoGeral(valor) {
   let sect_avisoAdicionar = document.querySelector('.sect_avisoAdicionar')
   sect_avisoAdicionar.classList.add('activo_avisoAdicionar')

   let processo = document.querySelector('.processo')
   let avisoAdicionar = document.querySelector('.avisoAdicionar')

   if (valor == 'favorito') {
      avisoAdicionar.textContent = 'lista vazia'
      processo.classList.add('processo_none')
   }

   else if (valor == 'carrinho') {
      avisoAdicionar.textContent = 'carrinho vazio'
      processo.classList.add('processo_none')
   }

   else if (valor == 'add') {
      avisoAdicionar.textContent = 'item adicionado ao carrinho'
   }
   removerMensgem()
}

// ================================
// LIMPAR MENSAGENS
// ================================
function removerMensgem() {
   let activo_avisoAdicionar = document.querySelector('.activo_avisoAdicionar')
   if (activo_avisoAdicionar) {
      setTimeout(() => {
         activo_avisoAdicionar.classList.remove('activo_avisoAdicionar')
      }, 1000)
   }
}


// ABRIR A LISTA DE FAVORITOS 
let sect_favorito = document.querySelector('.sect_favorito')
let ver_fovorito = document.querySelectorAll('.ver_fovorito')
ver_fovorito.forEach(vt => {
   if (vt) {
      vt.addEventListener('click', () => {
         if (favoritos.length !== 0) {
            sect_favorito.classList.add('sect_favorito_activo')
         }

         else {
            let valor = 'favorito'
            avisoGeral(valor)
         }
      })
   }
})


// REMOVER LSIA DE FAVORITOS
let remover_sect_favorito = document.querySelector('.remover_sect_favorito')
if (remover_sect_favorito) {
   remover_sect_favorito.addEventListener('click', () => {
      sect_favorito.classList.remove('sect_favorito_activo')
   })
}


//=====================================
// ELIMINAR ITENS DA LISTA DE FAVORITOS
//====================================
function eliminarFavorito(id) {
   let itensEliminar = document.querySelector(`.fv_container[data-id="${id}"]`)
   if (itensEliminar) {
      itensEliminar.classList.add('dOItens_fadeUP')

      let indice = favoritos.findIndex(p => p.id == id)
      if (indice !== -1) {
         favoritos.splice(indice, 1)
      }

      setTimeout(() => {
         itensEliminar.remove()
      }, 1000)
   }

   actualizarFavoritos()
}

//================================
// ACTUALIZAR LISTAS DE FAVORITOS 
//===============================
function actualizarFavoritos() {
   localStorage.setItem("favoritos", JSON.stringify(favoritos))
   numero_favorito.forEach(nv => {
      if (nv) {
         nv.textContent = favoritos.length
      }
   })
}
actualizarFavoritos()

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

   numeros_Itens.forEach(n => {
      if (n) {
         n.textContent = carrinho.length
      }
   })
   localStorage.setItem("carrinho", JSON.stringify(carrinho))
}

// remover os detalhes dos itens que estao no carrinho
let b_ver_remover = document.querySelector('.b_ver_remover')
if (b_ver_remover) {
   b_ver_remover.addEventListener('click', () => {
      document.querySelector('.ver_itens_carrinho').classList.remove('ver_itens_carrinho_activo')
      document.querySelector('.ver_itens_carrinho .face').classList.remove('ok')
   })
}


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


// ================================
// GUARDAR CARRINHO
// ================================
function guardar() {
   localStorage.setItem("carrinho", JSON.stringify(carrinho))
   numeros_Itens.forEach(n => {
      if (n) {
         n.textContent = carrinho.length
      }
   })
}
guardar()


// ================================
// BANNERS SECUNDÁRIOS
// ================================
const bannersDois = document.querySelectorAll('.bannersDois')
for (let i = 0; i < itensBanners.length; i++) {
   let imgBannersDois = document.createElement('img')
   imgBannersDois.classList.add('imgBannersDois')
   imgBannersDois.src = itensBanners[i].img

   let textoBanners = document.createElement('p')
   textoBanners.textContent = itensBanners[i].texto
   textoBanners.classList.add('textoBanners')

   bannersDois[i].appendChild(imgBannersDois)
   bannersDois[i].appendChild(textoBanners)
}


// ================================
// ROLAGEM HORIZONTAL PARA ESQUERDA
// ================================
document.querySelector('.button_cr_left').addEventListener('click', () => {
   document.querySelector('.carrossel-categoria').scrollLeft -= document.getElementById('btt-itens-categorias').offsetWidth
})

// ================================
// ROLAGEM HORIZONTAL PARA DIREITA
// ================================
document.querySelector('.button_cr_rith').addEventListener('click', () => {
   document.querySelector('.carrossel-categoria').scrollLeft += document.getElementById('btt-itens-categorias').offsetWidth
})
