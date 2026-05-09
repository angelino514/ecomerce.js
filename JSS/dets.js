// importar as listas de produtos do ficheiro bancoDados.js
import { itensVendas } from "../bancoDados.js";


// Pegar o id dos produtos a partir da URL (ex: ?id=1)
const params = new URLSearchParams(window.location.search)

// carrinho é carregado do localStorage ou começa vazio
export let carrinho = JSON.parse(localStorage.getItem("carrinho")) || []

// lista de favoritos do localStorage ou comeca vazio
export let favoritos = JSON.parse(localStorage.getItem("favoritos")) || []

// elemento que mostra número dos itens do carrinho e favoritos
let numeros_Itens = document.querySelector('.numeros_Itens')
let numero_favorito = document.querySelector('.numero_favorito')


// ------------------------------
// FUNÇÃO: CRIAR ITENS DO CARRINHO NA INTERFACE
// ------------------------------
function elementosDinamicos() {

   carrinho.forEach(itensCarrinho => {

      // cria o container principal do item
      let dO_itensCarrinho = document.createElement('div')
      dO_itensCarrinho.classList.add('itensCarrinho')
      dO_itensCarrinho.dataset.id = itensCarrinho.id
      dO_itensCarrinho.dataset.nome = itensCarrinho.iten
      dO_itensCarrinho.dataset.cor = itensCarrinho.cor
      dO_itensCarrinho.dataset.tamanho = itensCarrinho.tamanho

      let faceItens = document.createElement('div')
      faceItens.classList.add('face')

      let dw_carrinho = document.createElement('div')
      dw_carrinho.classList.add('dw_carrinho')

      let img_carrinho = document.createElement('img')
      img_carrinho.classList.add('img_carrinho')
      img_carrinho.src = itensCarrinho.img
      img_carrinho.alt = itensCarrinho.iten

      let nome_iten_carrinho = document.createElement('span')
      nome_iten_carrinho.classList.add('span_carrinho')
      nome_iten_carrinho.textContent = itensCarrinho.iten

      let do_ver = document.createElement('div')
      do_ver.classList.add('do_ver')

      let botao_ver = document.createElement('button')
      botao_ver.classList.add('botaos_carrinho')
      botao_ver.classList.add('material-symbols-outlined')
      botao_ver.textContent = 'arrow_forward_ios'

      // evento: abrir detalhes do item no carrinho
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
      span_ver_detal.textContent = itensCarrinho.cor

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
   })
}

// executar criação do carrinho
elementosDinamicos()


// ------------------------------
// PEGAR ID DO PRODUTO DA URL
// ------------------------------
let id = Number(params.get("id")) // id do item clicado...
let itensIds = [] // id dos itens clicados
let id_detalhes_face = document.getElementById('id_detalhes_face')  // id face
let tamanhoSelionado = ""
let coresSelecinada = ""
let taxaEntrega = 0
let totalItens = 0
let totalMaisTaxa = 0

if (id) {
   itensIds.push(id)

   // exibir informacoes do item clicado... 
   function informacoesItem() {
      for (let i = 0; i < itensVendas.length; i++) {
         if (id === itensVendas[i].id) {
            let dO_detlhes = document.createElement('div')
            dO_detlhes.classList.add('dO_detlhes')
            dO_detlhes.dataset.id = itensVendas[i].id

            let dt_sliders = document.createElement('div')
            dt_sliders.classList.add('dt_sliders')

            let carrossel_Imgs = document.createElement('div')
            carrossel_Imgs.classList.add('carrossel_Imgs')

            let buttons_Carrossel = document.createElement('div')
            buttons_Carrossel.classList.add('buttons_Carrossel')

            let buttons_rith = document.createElement('button')
            buttons_rith.classList.add('buttons_rith')
            buttons_rith.classList.add('button_Geral')
            buttons_rith.classList.add('material-symbols-outlined')

            buttons_rith.addEventListener('click', () => {
               carrossel_Imgs.scrollLeft += carrossel_Imgs.clientWidth
            })


            let buttons_left = document.createElement('button')
            buttons_left.classList.add('buttons_left')
            buttons_left.classList.add('button_Geral')
            buttons_left.classList.add('material-symbols-outlined')

            buttons_left.addEventListener('click', () => {
               carrossel_Imgs.scrollLeft -= carrossel_Imgs.clientWidth
            })

            let art_descricao = document.createElement('article')
            art_descricao.classList.add('art_descricao')

            let nomeIten = document.createElement('h1')
            nomeIten.classList.add('nomeIten')
            nomeIten.dataset.nome = itensVendas[i].iten

            let precoIten = document.createElement('h2')
            precoIten.classList.add('precoIten')
            precoIten.dataset.preco = itensVendas[i].preco

            let descricaoIten = document.createElement('h3')
            descricaoIten.classList.add('descricaoIten')

            for (let img = 0; img < itensVendas[i].imgs.length; img++) {
               let container_imgs = document.createElement('img')
               container_imgs.classList.add('container_imgs')
               carrossel_Imgs.appendChild(container_imgs).src = "../" + itensVendas[i].imgs[img]
               container_imgs.alt = itensVendas[i].iten
            }


            //  criar elementos para exbir o tamanho dos itens 
            let itensTamanhos = document.createElement('div')
            itensTamanhos.classList.add('itensTamanhos')
            let faceTamanho = document.createElement('div')
            faceTamanho.classList.add('face')
            let titleTamanho = document.createElement('p')

            for (let t = 0; t < itensVendas[i].tamanho.length; t++) {
               let dados_tamanhos = document.createElement('input')
               dados_tamanhos.type = 'radio'
               dados_tamanhos.name = 'tamanho'
               dados_tamanhos.id = itensVendas[i].tamanho[t]
               dados_tamanhos.value = itensVendas[i].tamanho[t]

               if (dados_tamanhos.value == itensVendas[i].tamanho[0]) {
                  dados_tamanhos.checked = true
                  tamanhoSelionado = dados_tamanhos.value
               }

               let label_tamanhos = document.createElement('label')
               label_tamanhos.setAttribute("for", itensVendas[i].tamanho[t])
               label_tamanhos.innerHTML = itensVendas[i].tamanho[t]
               label_tamanhos.classList.add('label_tamanhos')

               faceTamanho.appendChild(dados_tamanhos)
               faceTamanho.appendChild(label_tamanhos)
               dados_tamanhos.classList.add('input_None')

               // evento para selecionar o valor do input radio
               dados_tamanhos.addEventListener('change', () => {
                  if (dados_tamanhos.checked) {
                     tamanhoSelionado = dados_tamanhos.value
                  }
               })
            }

            // criar elementos para exbir as cores dos itens 
            let itensCores = document.createElement('div')
            itensCores.classList.add('itensTamanhos')
            let faceCores = document.createElement('div')
            faceCores.classList.add('face')
            let titleCores = document.createElement('p')

            for (let c = 0; c < itensVendas[i].cores.length; c++) {
               let dados_cores = document.createElement('input')
               dados_cores.type = 'radio'
               dados_cores.name = 'cores'
               dados_cores.id = itensVendas[i].cores[c]
               dados_cores.value = itensVendas[i].cores[c]
               dados_cores.classList.add('input_None')

               if (dados_cores.value == itensVendas[i].cores[0]) {
                  dados_cores.checked = true
                  coresSelecinada = dados_cores.value
               }

               let label_cores = document.createElement('label')
               label_cores.setAttribute("for", itensVendas[i].cores[c])
               label_cores.innerHTML = itensVendas[i].cores[c]
               label_cores.classList.add('label_cores')

               faceCores.appendChild(dados_cores)
               faceCores.appendChild(label_cores)

               // evento para selecionar o valor do input radio
               dados_cores.addEventListener('change', () => {
                  if (dados_cores.checked) {
                     coresSelecinada = dados_cores.value
                  }
               })

            }

            let buttons_Finais = document.createElement('div')
            buttons_Finais.classList.add('buttons_Finais')

            let finasFace = document.createElement('div')
            finasFace.classList.add('face')

            let add_favorito = document.createElement('button')
            add_favorito.classList.add('add_favorito')
            add_favorito.classList.add('material-symbols-outlined')

            // adicionar a lista de favorito
            add_favorito.addEventListener('click', () => {
               let id = add_Carrinho.closest('.dO_detlhes').dataset.id
               adicionarFavorito(id)
            })

            let comprar_Agora = document.createElement('button')
            comprar_Agora.classList.add('comprar_Agora')
            comprar_Agora.classList.add('buttonAdds')


            comprar_Agora.addEventListener('click', () => {
               totalItens = 0
               totalMaisTaxa = 0

               let dadosAgora = comprar_Agora.closest('.dO_detlhes')
               let precoAgora = dadosAgora.querySelector('.precoIten').dataset.preco
               totalItens = Number(precoAgora)
               comprarItemAgora()
            })


            let add_Carrinho = document.createElement('button')
            add_Carrinho.classList.add('add_Carrinho')
            add_Carrinho.classList.add('buttonAdds')

            // adicionar itens ao carrinho
            add_Carrinho.addEventListener('click', () => {
               let id = add_Carrinho.closest('.dO_detlhes').dataset.id
               adicionarCarrinho(id)
            })


            if (id_detalhes_face) {
               id_detalhes_face.appendChild(dO_detlhes)
               dO_detlhes.appendChild(dt_sliders)
               dt_sliders.appendChild(carrossel_Imgs)
               dt_sliders.appendChild(buttons_Carrossel)
               buttons_Carrossel.appendChild(buttons_left).innerHTML = "arrow_back_ios"
               buttons_Carrossel.appendChild(buttons_rith).innerHTML = "arrow_forward_ios"
               dO_detlhes.appendChild(art_descricao)
               art_descricao.appendChild(nomeIten).innerHTML = itensVendas[i].iten
               art_descricao.appendChild(precoIten).innerHTML = itensVendas[i].preco + "kz"
               art_descricao.appendChild(descricaoIten).innerHTML = itensVendas[i].itenDesc
               art_descricao.appendChild(itensTamanhos)
               itensTamanhos.appendChild(titleTamanho).innerHTML = "Tamanho"
               itensTamanhos.appendChild(faceTamanho)
               art_descricao.appendChild(itensCores)
               itensCores.appendChild(titleCores).innerHTML = "Cor"
               itensCores.appendChild(faceCores)
               art_descricao.appendChild(buttons_Finais)
               buttons_Finais.appendChild(finasFace)
               finasFace.appendChild(add_favorito).textContent = 'favorite'
               finasFace.appendChild(comprar_Agora).textContent = "Comprar"
               finasFace.appendChild(add_Carrinho).textContent = "Adicionar ao carrinho"

            }
         }
      }
   }
   informacoesItem()
}


// ------------------------------
// FUNÇÃO: ADICIONAR ITEM AO CARRINHO
// ------------------------------
function adicionarCarrinho(id) {

   for (let i = 0; i < itensVendas.length; i++) {
      if (id == itensVendas[i].id) {

         // verifica se o utilizador escolheu cor e tamanho
         if (coresSelecinada !== "" && tamanhoSelionado !== "") {

            // verifica se já existe o item igual no carrinho
            let existemItem = carrinho.find(existe =>
               existe.id === itensVendas[i].id && existe.cor === coresSelecinada && existe.tamanho === tamanhoSelionado
            )

            let xb = 0
            if (existemItem) {

               // se já existe, aumenta quantidade
               existemItem.quantidade++
               xb = existemItem.quantidade * existemItem.preco
               quantidadeItens(existemItem.id, existemItem.cor, existemItem.tamanho, existemItem.quantidade, xb)
            }


            else {
               // se não existe, cria novo item no carrinho
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

   // salvar no localStorage
   localStorage.setItem("carrinho", JSON.stringify(carrinho))

   // atualizar número de itens
   numeros_Itens.textContent = carrinho.length

   // funcao para exbir a quantidade de itens com as mesmas caracteristicas...
   function quantidadeItens(q_Id, q_Cor, q_Tamanho, q_quantidade, q_preco) {
      let q_dOitens = document.querySelector(`.itensCarrinho[data-id="${q_Id}"][data-cor="${q_Cor}"][data-tamanho="${q_Tamanho}"]`)

      let q_itenQuantdade = q_dOitens.querySelector('.itenQuantdade')
      q_itenQuantdade.textContent = q_quantidade
   }

   let valor = 'add'
   avisoGeral(valor)
}


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



// funcao para maracr a label dos input radios
function selecionarLabel() {
   let lwSelecionar = document.querySelectorAll('.label_cores')
   let coresMaracdo = document.querySelector('input[name="cores"]:checked')

   if (lwSelecionar) {
      lwSelecionar.forEach(itemSelecionar => {

         if (itemSelecionar.innerHTML == coresMaracdo.id) {
            itemSelecionar.classList.add('selecionarActivo')
         }

         itemSelecionar.addEventListener('click', () => {
            lwSelecionar.forEach(lwRemover => {
               lwRemover.classList.remove('selecionarActivo')
            })

            itemSelecionar.classList.add('selecionarActivo')
         })
      })
   }


   let lwSelTamanho = document.querySelectorAll('.label_tamanhos')
   let tamanhoMaracdo = document.querySelector('input[name="tamanho"]:checked')

   if (lwSelTamanho) {
      lwSelTamanho.forEach(itemStamanho => {
         if (itemStamanho.innerHTML == tamanhoMaracdo.id) {
            itemStamanho.classList.add('selecionarActivo')
         }

         itemStamanho.addEventListener('click', () => {
            lwSelTamanho.forEach(sltRemover => {
               sltRemover.classList.remove('selecionarActivo')
            })

            itemStamanho.classList.add('selecionarActivo')
         })
      })
   }


}
selecionarLabel()

// ------------------------------
// FUNÇÃO: REMOVER ITEM DO CARRINHO
// ------------------------------
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

   numeros_Itens.textContent = carrinho.length
   localStorage.setItem("carrinho", JSON.stringify(carrinho))
}

//=========================
// CRIAR ELEMENTO DINAMICOS DO FAVORITO
//======================
function elementosFavoritos() {
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
// ------------------------------
// FUNÇÃO: ADICIONAR ITEM AO CARRINHO
// ------------------------------
function adicionarFavorito(id) {

   for (let i = 0; i < itensVendas.length; i++) {
      if (id == itensVendas[i].id) {

         // verifica se o utilizador escolheu cor e tamanho
         if (coresSelecinada !== "" && tamanhoSelionado !== "") {

            // verifica se já existe o item igual no carrinho
            let existemItem = favoritos.find(existe =>
               existe.id === itensVendas[i].id
            )

            if (existemItem) {
               mensagemExiste('add_favorito', 'older')
            }


            else {

               // se não existe, cria novo item na lista de favorito
               favoritos.push({ id: itensVendas[i].id, iten: itensVendas[i].iten, img: itensVendas[i].img, preco: itensVendas[i].preco, cor: coresSelecinada, descricao: itensVendas[i].itenDesc, tamanho: tamanhoSelionado, quantidade: 1 })
               let fv_container = document.createElement('div')
               fv_container.classList.add('fv_container')
               fv_container.dataset.id = itensVendas[i].id
               fv_container.dataset.cor = itensVendas[i].cor
               fv_container.dataset.tamanho = itensVendas[i].tamanho

               // criar elementos do do favorito
               let fv_face = document.createElement('div')
               fv_face.classList.add('face')

               let fv_dOne = document.createElement('div')
               fv_dOne.classList.add('fv_dOne')

               let fv_img = document.createElement('img')
               fv_img.classList.add('fv_img')
               fv_img.src = itensVendas[i].img

               let fv_span_iten = document.createElement('p')
               fv_span_iten.textContent = itensVendas[i].iten
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

               mensagemExiste('add_favorito', 'new')
            }
         }
      }

   }

   actualizarFavoritos()
}

function mensagemExiste(valor, valor1) {
   let sect_avisoAdicionar = document.querySelector('.sect_avisoAdicionar')
   sect_avisoAdicionar.classList.add('activo_avisoAdicionar')

   let processo = document.querySelector('.processo')
   let avisoAdicionar = document.querySelector('.avisoAdicionar')

   if (valor == 'add_favorito' && valor1 == 'new') {
      avisoAdicionar.textContent = 'Item adicionado aos favoritos'
   }

   if (valor == 'add_favorito' && valor1 == 'older') {
      avisoAdicionar.textContent = 'Esse item já existe'
      processo.classList.add('processo_none')
      console.log(processo)
   }

   removerMensgem()
}

// ABRIR A LISTA DE FAVORITOS 
let sect_favorito = document.querySelector('.sect_favorito')
let ver_fovorito = document.querySelector('.ver_fovorito')
if (ver_fovorito) {
   ver_fovorito.addEventListener('click', () => {
      if (favoritos.length !== 0) {
         sect_favorito.classList.add('sect_favorito_activo')
      }

      else {
         avisoGeral('favorito')
      }
   })
}



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
   console.log(favoritos)
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
   if (numero_favorito) {
      numero_favorito.textContent = favoritos.length
   }
}
actualizarFavoritos()

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

// ------------------------------
// FUNÇÃO: REMOVER OS DETALHES DOS QUE ESTÇÃO NO CARRINHO
// ------------------------------
let b_ver_remover = document.querySelector('.b_ver_remover')
if (b_ver_remover) {
   b_ver_remover.addEventListener('click', () => {
      document.querySelector('.ver_itens_carrinho').classList.remove('ver_itens_carrinho_activo')
      document.querySelector('.ver_itens_carrinho .face').classList.remove('ok')
   })
}


// ------------------------------
// FUNÇÃO: ACTIVAR FUNÇÃO GURADAR E CRIAR ELEMENTOS DINAMICOS , ACTUALIZAR O NUMERO DE ITENS NO HTML
// ------------------------------
function guardar() {
   localStorage.setItem("carrinho", JSON.stringify(carrinho))
   if (numeros_Itens) {
      numeros_Itens.innerHTML = carrinho.length
   }
}
guardar()


// ------------------------------
// FUNÇÃO: INICIALIZAÇÃO DA COMPRA (DETALHES DA COMPRA)
// ------------------------------
function detalhesCompra() {
   // lista de metodos de pagemento 
   const metodoPagemento = ["Unitel Money", "Multicaixa Express", "IBAN"]
   const metodoEnvio = ["AngoEnvio", "TWENDE", "EVAN"] // Metodo de envio...
   const cidades = ["Huambo", "Menongue"]

   let face_Compra = document.getElementById('face_Compra')

   // Criar elementos dinamiocos para detalhes da compra...
   let dO_dt_Compra = document.createElement('div')
   dO_dt_Compra.classList.add('dO_dt_Compra')

   let dO_spanTotal = document.createElement('div')
   dO_spanTotal.classList.add('dO_spanTotal')

   let spanTotal = document.createElement('span')
   spanTotal.classList.add('spanTotal')

   let dO_pagamento_title = document.createElement('p')
   dO_pagamento_title.classList.add('dO_pagamento_title')

   let dO_metPagamento = document.createElement('div')
   dO_metPagamento.classList.add('dO_metPagamento')

   let dadosPagamento = document.createElement('div')
   dadosPagamento.classList.add('dadosPagamento')

   let nome_conta = document.createElement('p')
   nome_conta.classList.add('nomeConta')

   let numero_conta = document.createElement('p')
   numero_conta.classList.add('numeroConta')

   for (let pa = 0; pa < metodoPagemento.length; pa++) {
      let labelPgamento = document.createElement('label')
      labelPgamento.classList.add('labelPgamento')
      labelPgamento.setAttribute("for", metodoPagemento[pa])
      labelPgamento.dataset.nome = metodoPagemento[pa]


      let radioPagmento = document.createElement('input')
      radioPagmento.type = 'radio'
      radioPagmento.value = metodoPagemento[pa]
      radioPagmento.id = metodoPagemento[pa]
      radioPagmento.classList.add('input_None')
      radioPagmento.classList.add('radioPagmento')
      radioPagmento.name = 'pagamento'

      // condicao para deixar o primeiro item marcado
      if (radioPagmento.value == metodoPagemento[0]) {
         radioPagmento.checked = true
      }

      dO_metPagamento.appendChild(labelPgamento).textContent = metodoPagemento[pa]
      dO_metPagamento.appendChild(radioPagmento)
   }


   let dO_pagamento_Envio = document.createElement('p')
   dO_pagamento_Envio.classList.add('dO_pagamento_title')

   let dO_Envio = document.createElement('div')
   dO_Envio.classList.add('dO_Envio')

   for (let me = 0; me < metodoEnvio.length; me++) {
      let labelEnvio = document.createElement('label')
      labelEnvio.classList.add('labelEnvio')
      labelEnvio.dataset.nome = metodoEnvio[me]
      labelEnvio.setAttribute("for", metodoEnvio[me])

      let radioEnvio = document.createElement('input')
      radioEnvio.type = 'radio'
      radioEnvio.id = metodoEnvio[me]
      radioEnvio.name = 'envio'
      radioEnvio.value = metodoEnvio[me]
      radioEnvio.classList.add('radioEnvio')
      radioEnvio.classList.add('input_None')

      if (radioEnvio.value == metodoEnvio[0]) {
         radioEnvio.checked = true
      }

      dO_Envio.appendChild(labelEnvio).textContent = metodoEnvio[me]
      dO_Envio.appendChild(radioEnvio)
   }

   let pO_rastreio = document.createElement('p')
   pO_rastreio.classList.add('rastreio')

   let selecionarCidade = document.createElement('p')
   selecionarCidade.classList.add('dO_pagamento_title')

   let dO_Cidade = document.createElement('div')
   dO_Cidade.classList.add('dO_Cidade')

   for (let d = 0; d < cidades.length; d++) {
      let labelCidade = document.createElement('label')
      labelCidade.classList.add('labelCidade')
      labelCidade.dataset.nome = cidades[d]
      labelCidade.setAttribute("for", cidades[d])

      let radioCidade = document.createElement('input')
      radioCidade.type = 'radio'
      radioCidade.id = cidades[d]
      radioCidade.name = 'cidade'
      radioCidade.value = cidades[d]
      radioCidade.classList.add('radioCidade')
      radioCidade.classList.add('input_None')

      if (radioCidade.value == cidades[0]) {
         radioCidade.checked = true
      }

      dO_Cidade.appendChild(labelCidade).textContent = cidades[d]
      dO_Cidade.appendChild(radioCidade)
   }

   let dO_InfCidade = document.createElement('div')
   dO_InfCidade.classList.add('dO_InfCidade')

   let p_entregaEstimada = document.createElement('p')
   p_entregaEstimada.classList.add('entregaEstimada')

   let p_entrega = document.createElement('p')
   p_entrega.classList.add('entrega')

   // div pai para os inputs  dados do usuario...
   let dO_daddosUsuario = document.createElement('div')
   dO_daddosUsuario.classList.add('dO_daddosUsuario')

   let wa_dO_contactos = document.createElement('div')
   wa_dO_contactos.classList.add('dO_contactos')

   let wa_labelUsuario = document.createElement('label')
   wa_labelUsuario.classList.add('labelUsuario')
   wa_labelUsuario.setAttribute("for", 'numerosWatsapp')

   let wa_inputDadosUser = document.createElement('article')
   wa_inputDadosUser.classList.add('inputDadosUser')

   let wa_aviso = document.createElement('p')
   wa_aviso.classList.add('aviso')

   let wa_input = document.createElement('input')
   wa_input.type = "text/number"
   wa_input.id = "numerosWatsapp"
   wa_input.classList.add('face')
   wa_input.classList.add('whatsApp')

   let nu_dO_contactos = document.createElement('div')
   nu_dO_contactos.classList.add('dO_contactos')

   let nu_labelUsuario = document.createElement('label')
   nu_labelUsuario.classList.add('labelUsuario')
   nu_labelUsuario.setAttribute("for", 'numerosTelefone')

   let nu_inputDadosUser = document.createElement('article')
   nu_inputDadosUser.classList.add('inputDadosUser')

   let nu_aviso = document.createElement('p')
   nu_aviso.classList.add('aviso')

   let nu_input = document.createElement('input')
   nu_input.type = "text/number"
   nu_input.id = "numerosTelefone"
   nu_input.classList.add('face')
   nu_input.classList.add('numeroTelefone')


   let gm_dO_contactos = document.createElement('div')
   gm_dO_contactos.classList.add('dO_contactos')

   let gm_labelUsuario = document.createElement('label')
   gm_labelUsuario.classList.add('labelUsuario')
   gm_labelUsuario.setAttribute("for", 'gmail')

   let gm_inputDadosUser = document.createElement('article')
   gm_inputDadosUser.classList.add('inputDadosUser')

   let gm_aviso = document.createElement('p')
   gm_aviso.classList.add('aviso')

   let gm_input = document.createElement('input')
   gm_input.type = "email"
   gm_input.id = "gmail"
   gm_input.classList.add('face')
   gm_input.classList.add('g_mail')


   let en_dO_contactos = document.createElement('div')
   en_dO_contactos.classList.add('dO_contactos')

   let en_labelUsuario = document.createElement('label')
   en_labelUsuario.classList.add('labelUsuario')
   en_labelUsuario.setAttribute("for", 'endereco')

   let en_inputDadosUser = document.createElement('article')
   en_inputDadosUser.classList.add('inputDadosUser')

   let en_aviso = document.createElement('p')
   en_aviso.classList.add('aviso')

   let en_input = document.createElement('input')
   en_input.type = "text"
   en_input.id = "endereco"
   en_input.classList.add('face')
   en_input.classList.add('endereco')

   let dO_buttonSubmit = document.createElement('div')
   dO_buttonSubmit.classList.add('dO_buttonSubmit')

   let b_buttonSubmit = document.createElement('button')
   b_buttonSubmit.classList.add('buttonSubmit')

   if (face_Compra) {

      face_Compra.appendChild(dO_dt_Compra)
      dO_dt_Compra.appendChild(dO_spanTotal)
      dO_spanTotal.appendChild(spanTotal)
      dO_dt_Compra.appendChild(dO_pagamento_title).innerHTML = "Selecionar Metódo de pagamento"
      dO_dt_Compra.appendChild(dO_metPagamento)
      dO_dt_Compra.appendChild(dadosPagamento)
      dadosPagamento.appendChild(nome_conta)
      dadosPagamento.appendChild(numero_conta)
      dO_dt_Compra.appendChild(dO_pagamento_Envio).textContent = "Selecionar Metodo de Envio"
      dO_dt_Compra.appendChild(dO_Envio)
      dO_dt_Compra.appendChild(pO_rastreio)
      dO_dt_Compra.appendChild(selecionarCidade).textContent = "Selecionar Cidade"
      dO_dt_Compra.appendChild(dO_Cidade)
      dO_dt_Compra.appendChild(dO_InfCidade)
      dO_InfCidade.appendChild(p_entregaEstimada)
      dO_InfCidade.appendChild(p_entrega)

      // Numero do Whatsapp
      face_Compra.appendChild(dO_daddosUsuario)
      dO_daddosUsuario.appendChild(wa_dO_contactos)
      wa_dO_contactos.appendChild(wa_labelUsuario).textContent = "Número do WhatsApp"
      wa_dO_contactos.appendChild(wa_inputDadosUser)
      wa_inputDadosUser.appendChild(wa_input).placeholder = "+244 943 000 000"
      wa_dO_contactos.appendChild(wa_aviso)

      // Numero de telefone
      dO_daddosUsuario.appendChild(nu_dO_contactos)
      nu_dO_contactos.appendChild(nu_labelUsuario).textContent = "Número de Telefone"
      nu_dO_contactos.appendChild(nu_inputDadosUser)
      nu_inputDadosUser.appendChild(nu_input).placeholder = "+244 943 000 000"
      nu_dO_contactos.appendChild(nu_aviso)

      // Email
      dO_daddosUsuario.appendChild(gm_dO_contactos)
      gm_dO_contactos.appendChild(gm_labelUsuario).textContent = "Email"
      gm_dO_contactos.appendChild(gm_inputDadosUser)
      gm_inputDadosUser.appendChild(gm_input).placeholder = "joaofilipe@gamil.com"
      gm_dO_contactos.appendChild(gm_aviso)

      // Endereco
      dO_daddosUsuario.appendChild(en_dO_contactos)
      en_dO_contactos.appendChild(en_labelUsuario).textContent = "Endereco"
      en_dO_contactos.appendChild(en_inputDadosUser)
      en_inputDadosUser.appendChild(en_input).placeholder = "Endereço de entrega"
      en_dO_contactos.appendChild(en_aviso)

      // butao submit 
      dO_daddosUsuario.appendChild(dO_buttonSubmit)
      dO_buttonSubmit.appendChild(b_buttonSubmit).textContent = "Enviar"
   }



   let nomeConta = document.querySelector('.nomeConta')
   let numeroConta = document.querySelector('.numeroConta')
   let rastreio = document.querySelector('.rastreio')
   let entrega = document.querySelector('.entrega')
   let entregaEstimada = document.querySelector('.entregaEstimada')


   let valorChave = "" // valor chave para o swich cese opcoes de pagamento
   let valorChaveDois = "" // valor chave para o swich cese opcoes de envio
   let valorChavesTres = "" // valor chave para o swich cese opcoes de cidade
   let labelPgamento = document.querySelectorAll('.labelPgamento')

   let radioPagmento = document.querySelectorAll('.radioPagmento')
   if (radioPagmento) {
      radioPagmento.forEach(rp => {
         if (rp.checked) {

            valorChave = rp.value
            opcoesSwich(valorChave)

            if (labelPgamento) {
               labelPgamento.forEach(lp => {
                  if (rp.value == lp.dataset.nome) {
                     lp.classList.add('selecionarActivo')
                  }
               })
            }
         }

         rp.addEventListener('change', () => {
            valorChave = rp.value
            opcoesSwich(valorChave)
         })
      })
   }

   if (labelPgamento) {
      labelPgamento.forEach(lp_dois => {
         lp_dois.addEventListener('click', () => {
            labelPgamento.forEach(lp_tres => {
               lp_tres.classList.remove('selecionarActivo')
            })
            lp_dois.classList.add('selecionarActivo')
         })
      })
   }

   // funacao para opcoes do swich case para opces de pagamentos
   function opcoesSwich(valorChave) {
      if (labelPgamento) {
         switch (valorChave) {
            case labelPgamento[0].dataset.nome:
               nomeConta.textContent = "Evan Comerical"
               numeroConta.textContent = "945 132 201"
               break;

            case labelPgamento[1].dataset.nome:
               nomeConta.textContent = "Multicaixa Express"
               numeroConta.textContent = "925 122 221"
               break;

            case labelPgamento[2].dataset.nome:
               nomeConta.textContent = "EVAN COMERCIAL"
               numeroConta.textContent = "AO06 0006 0000 2345 2819 6"
               break;

            default:
               break;
         }
      }
   }

   let labelEnvio = document.querySelectorAll('.labelEnvio')
   let radioEnvio = document.querySelectorAll('.radioEnvio')
   if (radioEnvio) {
      radioEnvio.forEach(re => {
         if (labelEnvio) {
            labelEnvio.forEach(le => {
               if (re.checked) {

                  valorChaveDois = re.value
                  opcoesSwichDois(valorChaveDois)

                  if (re.value == le.dataset.nome) {
                     le.classList.add('selecionarActivo')
                  }
               }
            })
         }

         re.addEventListener('change', () => {
            valorChaveDois = re.value
            opcoesSwichDois(valorChaveDois)
         })
      })
   }

   if (labelEnvio) {
      labelEnvio.forEach(le_dois => {
         le_dois.addEventListener('click', () => {
            labelEnvio.forEach(le_tres => {
               le_tres.classList.remove('selecionarActivo')
            })

            le_dois.classList.add('selecionarActivo')
         })
      })
   }


   // funacao para opcoes do swich case
   function opcoesSwichDois(valorChaveDois) {
      if (labelEnvio) {
         switch (valorChaveDois) {
            case labelEnvio[0].dataset.nome:
               if (rastreio) {
                  rastreio.textContent = "Rastreio disponível"
               }
               break;

            case labelEnvio[1].dataset.nome:
               rastreio.textContent = "Rastreio disponível"
               break;

            case labelEnvio[2].dataset.nome:
               rastreio.textContent = "Compromisso do EVAN"
               break;

            default:
               break;
         }
      }
   }


   let labelCidade = document.querySelectorAll('.labelCidade')
   let radioCidade = document.querySelectorAll('.radioCidade')
   if (radioCidade) {
      radioCidade.forEach(rc => {
         if (labelCidade) {
            labelCidade.forEach(lc => {
               if (rc.checked) {

                  valorChavesTres = rc.value
                  opcoesSwichTres(valorChavesTres)

                  if (rc.value == lc.dataset.nome) {
                     lc.classList.add('selecionarActivo')
                  }
               }
            })
         }

         rc.addEventListener('change', () => {
            valorChavesTres = rc.value
            opcoesSwichTres(valorChavesTres)
         })
      })
   }


   if (labelCidade) {
      labelCidade.forEach(lc_dois => {
         lc_dois.addEventListener('click', () => {
            labelCidade.forEach(lc_tres => {
               lc_tres.classList.remove('selecionarActivo')
            })

            lc_dois.classList.add('selecionarActivo')
         })
      })
   }

   // funacao para opcoes do swich case para selicionar cidades
   function opcoesSwichTres(valorChavesTres) {

      let x_precoIten = document.querySelector('.precoIten')
      if (labelEnvio) {
         switch (valorChavesTres) {
            case labelCidade[0].dataset.nome:
               if (rastreio) {
                  taxaEntrega = 800
                  entregaEstimada.textContent = ` Frete ${taxaEntrega}Kz`
                  entrega.textContent = "Entrega estimada de 2 a 5 horas"

                  totalMaisTaxa = totalItens + taxaEntrega

                  let spanTotal = document.querySelector('.spanTotal')
                  if (spanTotal) {
                     spanTotal.textContent = `total a pagar ${totalMaisTaxa}kz`
                  }
               }
               break;

            case labelCidade[1].dataset.nome:
               if (rastreio) {

                  taxaEntrega = 3000
                  entregaEstimada.textContent = `Frete ${taxaEntrega}Kz`
                  entrega.textContent = "Entrega estimada de 1 a 3 dias"

                  totalMaisTaxa = totalItens + taxaEntrega

                  let spanTotal = document.querySelector('.spanTotal')
                  if (spanTotal) {
                     spanTotal.textContent = `total a pagar ${totalMaisTaxa}kz`
                  }
               }
               break;
         }
      }
   }

   let whatsApp = document.querySelector('.whatsApp')
   let numeroTelefone = document.querySelector('.numeroTelefone')
   let g_mail = document.querySelector('.g_mail')
   let endereco = document.querySelector('.endereco')
   let aviso = document.querySelectorAll('.aviso')


   let buttonSubmit = document.querySelector('.buttonSubmit')
   if (buttonSubmit) {
      buttonSubmit.addEventListener('click', () => {

         if (whatsApp.value == "" && numeroTelefone.value == "" && g_mail.value == "" && endereco.value == "") {
            aviso.forEach(avs => {
               avs.textContent = "Este campo é obrigatório"
            })
         }

         else if (whatsApp.value == "") {
            aviso[0].textContent = "Este campo é obrigatório"
            aviso[1].textContent = ""
            aviso[2].textContent = ""
            aviso[3].textContent = ""
         }

         else if (numeroTelefone.value == "") {
            aviso[0].textContent = ""
            aviso[1].textContent = "Este campo é obrigatório"
            aviso[2].textContent = ""
            aviso[3].textContent = ""
         }

         else if (g_mail.value == "") {
            aviso[0].textContent = ""
            aviso[1].textContent = ""
            aviso[2].textContent = "Este campo é obrigatório"
            aviso[3].textContent = ""
         }

         else if (endereco.value == "") {
            aviso[0].textContent = ""
            aviso[1].textContent = ""
            aviso[2].textContent = ""
            aviso[3].textContent = "Este campo é obrigatório"
         }

         else {
            aviso.forEach(avs => {
               avs.textContent = ""
            })

            let regexOU = /^\+244\s?9\d{2}\s?\d{3}\s?\d{3}$/;
            let regex = /^\+2449\d{8}$/;
            if (regex.test(whatsApp.value) || regexOU.test(whatsApp.value)) {
               if (regex.test(numeroTelefone.value) || regexOU.test(numeroTelefone.value)) {
                  let regxEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                  if (regxEmail.test(g_mail.value)) {
                     aviso[2].textContent = ""


                  }

                  else {
                     aviso[2].textContent = "Email inválido. Por favor, insira um email válido."
                  }
               }

               else {
                  aviso[1].textContent = "Número inválido. Deve começar com +244 e ter 9 dígitos iniciando por 9."
               }
            }

            else {
               aviso[0].textContent = "Número inválido. Deve começar com +244 e ter 9 dígitos iniciando por 9."
            }

         }
      })
   }

}
detalhesCompra()


// ------------------------------
// FUNÇÃO: CALCULAR OS PREÇCS DOS ITENS DO CARRINHO
// ------------------------------
function calcularPrecos() {
   totalItens = 0
   totalMaisTaxa = 0
   if (carrinho.length !== 0) {
      carrinho.forEach(precosIten => {
         totalItens += (precosIten.quantidade * precosIten.preco)
      })
   }

   totalMaisTaxa = totalItens + taxaEntrega
   let spanTotal = document.querySelector('.spanTotal')
   if (spanTotal) {
      totalMaisTaxa = totalItens + taxaEntrega
      spanTotal.textContent = `total a pagar ${totalMaisTaxa}kz`

      if (totalItens === 0) {
         spanTotal.textContent = ""
      }
   }

   let dOremoverDetalhes = document.querySelector('.dOremoverDetalhes')
   if (dOremoverDetalhes) {
      dOremoverDetalhes.textContent = ""

      let removerDetalhes = document.createElement('button')
      removerDetalhes.classList.add('removerDetalhes')

      removerDetalhes.addEventListener('click', revrDetalhes)

      let spanIconClose = document.createElement('span')
      spanIconClose.classList.add('material-symbols-outlined')
      spanIconClose.textContent = "close"

      dOremoverDetalhes.appendChild(removerDetalhes)
      removerDetalhes.appendChild(spanIconClose)
   }

}

// ------------------------------
// FUNÇÃO: PARA COMPRA IMEDIATA (COMPRAR AGORA)
// ------------------------------
function comprarItemAgora() {
   let confirmarDados = document.querySelector('.dadosDetalhes')
   confirmarDados.classList.add('confirmarDados_Activo')

   totalMaisTaxa = totalItens + taxaEntrega
   let spanTotal = document.querySelector('.spanTotal')
   if (spanTotal) {
      spanTotal.textContent = `total a pagar ${totalMaisTaxa}kz`
   }

   let dOremoverDetalhes = document.querySelector('.dOremoverDetalhes')
   if (dOremoverDetalhes) {

      dOremoverDetalhes.textContent = ""

      let reComprarAgora = document.createElement('button')
      reComprarAgora.classList.add('reComprarAgora')

      reComprarAgora.addEventListener('click', () => {
         let dadosDetalhes = document.querySelector('.dadosDetalhes')
         if (dadosDetalhes) {
            dadosDetalhes.classList.remove('confirmarDados_Activo')
         }
      })


      let spanIconClose = document.createElement('span')
      spanIconClose.classList.add('material-symbols-outlined')
      spanIconClose.textContent = "close"

      dOremoverDetalhes.appendChild(reComprarAgora)
      reComprarAgora.appendChild(spanIconClose)
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
         avisoGeral('carrinho')
      }
   })
}

// ------------------------------
// FUNÇÃO: FECHAR A PAGINA DE CARRINHO
// ------------------------------
let voltar = document.querySelector('.voltar')
if (voltar) {
   voltar.addEventListener('click', () => {
      document.querySelector('.carrinho').classList.remove('carrinhoActivo')
      document.querySelector('.dO_pagar').classList.remove('dO_pagar_Activo')
   })
}

// ------------------------------
// FUNÇÃO: ABRIR A TAG DE CONFIRMAR O PAGAMENTO
// ------------------------------
let pagamento = document.querySelector('.pagamento')
if (pagamento) {
   pagamento.addEventListener('click', () => {
      let confirmarDados = document.querySelector('.dadosDetalhes')
      confirmarDados.classList.add('confirmarDados_Activo')

      document.querySelector('.carrinhoActivo').classList.remove('carrinhoActivo')
      document.querySelector('.dO_pagar').classList.remove('dO_pagar_Activo')

      calcularPrecos()
   })
}


// ------------------------------
// FUNÇÃO: FECHAR A TAG DE CONFIRMAR O PAGAMENTO
// ------------------------------
function revrDetalhes() {
   let confirmarDados = document.querySelector('.dadosDetalhes')
   confirmarDados.classList.remove('confirmarDados_Activo')

   document.querySelector('.carrinho').classList.add('carrinhoActivo')
   setTimeout(() => {
      document.querySelector('.dO_pagar').classList.add('dO_pagar_Activo')
   }, 1000)
}


// ------------------------------
// FUNÇÃO: VOLTAR PARA A PAGINA PRINCIPAL
// ------------------------------
let button_Back = document.querySelector('.button_Back')
if (button_Back) {
   button_Back.addEventListener('click', () => {
      window.location.href = '../index.html'
   })
}