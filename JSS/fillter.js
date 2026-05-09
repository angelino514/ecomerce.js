import { itensVendas } from "../bancoDados.js"
import { carrinho } from "./dets.js"


/* ================================
   VARIÁVEIS GLOBAIS DO CARRINHO
================================ */
let taxaEntrega = 0
let totalItens = 0
let totalMaisTaxa = 0

/* ================================
   CAPTURA PARÂMETROS DA URL
   (usado para filtrar categoria)
================================ */
const params = new URLSearchParams(window.location.search)
const dadosCategoria = params.get("dadosCategoria")

/* ================================
   FILTRA ITENS PELA CATEGORIA
================================ */
let listaFiltrada = itensVendas.filter(ltf => ltf.categoria === dadosCategoria)


/* ================================
   ELEMENTO QUE MOSTRA NÚMERO DE ITENS NO CARRINHO
================================ */
let numeros_Itens = document.querySelector('.numeros_Itens')

/* ================================
   CRIAÇÃO DINÂMICA DOS ITENS FILTRADOS NA TELA
   (lista de produtos por categoria)
================================ */
listaFiltrada.forEach(filterView => {
   let itbtFilter = document.createElement('button')
   let imgFillter = document.createElement('img')
   let dwFillter = document.createElement('div')
   let pwFillter = document.createElement('p')
   let spanFillterNome = document.createElement('span')
   let spanFillterPreco = document.createElement('span')
   let dwIocneFillter = document.createElement('div')
   let icone = document.createElement('span')

   itbtFilter.dataset.id = filterView.id
   imgFillter.dataset.id = filterView.id

   let container_fillter = document.querySelector('.container-fillter')
   if (container_fillter) {
      container_fillter.appendChild(itbtFilter)
   }
   itbtFilter.appendChild(imgFillter).src = "../IMGS/../" + filterView.img
   itbtFilter.appendChild(dwFillter)
   dwFillter.appendChild(pwFillter)
   pwFillter.appendChild(spanFillterNome).textContent = filterView.iten
   pwFillter.appendChild(spanFillterPreco).textContent = `${filterView.preco}Kz`
   itbtFilter.setAttribute("id", "buttonsFilter")
   dwFillter.appendChild(dwIocneFillter)

   /* evento de adicionar item ao carrinho */
   dwIocneFillter.appendChild(icone).textContent = "add_shopping_cart"
   dwIocneFillter.addEventListener('click', () => {
      let dadosPincipal = dwIocneFillter.closest('#buttonsFilter')
      adicionarCarrinho(Number(dadosPincipal.dataset.id))
   })

   imgFillter.classList.add('imgFillter')
   dwFillter.classList.add('dwFillter')
   pwFillter.classList.add('pwFillter')
   spanFillterNome.classList.add('spanFillter')
   spanFillterPreco.classList.add('spanFillter')
   dwIocneFillter.classList.add('dwIocneFillter')
   icone.classList.add('material-symbols-outlined')

   /* navegação para página de detalhes */
   imgFillter.addEventListener('click', () => {
      enviarFillter(itbtFilter.dataset.id)
   })
})


/* ================================
   CRIAÇÃO DOS BOTÕES DE CATEGORIAS
================================ */
const tipoCategoria = []
for (let i = 0; i < itensVendas.length; i++) {
   if (!tipoCategoria.some(obj => obj.categoria == itensVendas[i].categoria)) {
      tipoCategoria.push(itensVendas[i])
   }
}


/* ================================
   NAVBAR FILTRO POR CATEGORIA
================================ */
tipoCategoria.forEach(tipo => {
   let button_filter = document.createElement('button')

   let navbar_fillter = document.querySelector('.navbar-fillter')
   if (navbar_fillter) {
      navbar_fillter.appendChild(button_filter).textContent = tipo.categoria
      button_filter.classList.add('button_filter')
      button_filter.addEventListener('click', () => {
         let valorButon = button_filter.textContent
         dadosFilter(valorButon)
      })
   }
})


/* ================================
   FUNÇÃO DE FILTRAGEM DE PRODUTOS POR CATEGORIA
================================ */
function dadosFilter(dadosEspecifico) {
   let container_fillter = document.querySelector('.container-fillter')
   if (container_fillter) {
      container_fillter.innerHTML = ""
   }

   let itensFilter = itensVendas.filter(itf => itf.categoria === dadosEspecifico)
   itensFilter.forEach(novoFilter => {

      let itbtFilter = document.createElement('button')
      itbtFilter.dataset.id = novoFilter.id
      itbtFilter.classList.add('itbtFilter')

      let imgFillter = document.createElement('img')
      imgFillter.classList.add('imgFillter')

      let dwFillter = document.createElement('div')
      let pwFillter = document.createElement('p')
      let spanFillterNome = document.createElement('span')
      let spanFillterPreco = document.createElement('span')

      /* adicionar item ao carrinho */
      let dwIocneFillter = document.createElement('div')
      dwIocneFillter.addEventListener('click', () => {
         let id = dwIocneFillter.closest('.itbtFilter').dataset.id
         adicionarCarrinho(id)
      })

      let icone = document.createElement('span')

      if (container_fillter) {
         container_fillter.appendChild(itbtFilter)
      }
      itbtFilter.appendChild(imgFillter).src = "../IMGS/../" + novoFilter.img
      itbtFilter.appendChild(dwFillter)
      dwFillter.appendChild(pwFillter)
      pwFillter.appendChild(spanFillterNome).textContent = novoFilter.iten
      pwFillter.appendChild(spanFillterPreco).textContent = `${novoFilter.preco}Kz`
      itbtFilter.setAttribute("id", "buttonsFilter")
      dwFillter.appendChild(dwIocneFillter)

      dwIocneFillter.appendChild(icone).textContent = "add_shopping_cart"

      dwFillter.classList.add('dwFillter')
      pwFillter.classList.add('pwFillter')
      spanFillterNome.classList.add('spanFillter')
      spanFillterPreco.classList.add('spanFillter')
      dwIocneFillter.classList.add('dwIocneFillter')
      icone.classList.add('material-symbols-outlined')

      /* navegação para detalhes do item */
      imgFillter.dataset.id = novoFilter.id
      imgFillter.addEventListener('click', () => {
         enviarFillter(itbtFilter.dataset.id)
      })
   })
}


/* ================================
   NAVEGAÇÃO PARA PÁGINA DE DETALHES
================================ */
function enviarFillter(id) {
   window.location.href = "CPSS/../dets.html?id=" + id
}



/* ================================
   ABRIR CARRINHO
================================ */
let verItensCarrinho = document.querySelector('.verItensCarrinho')
if (verItensCarrinho) {
   verItensCarrinho.addEventListener('click', () => {

      /* se tiver itens no carrinho */
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

      /* se carrinho estiver vazio */
      else {
         avisoGeral('carrinho')
      }
   })
}


/* ================================
   FECHAR CARRINHO
================================ */
let voltar = document.querySelector('.voltar')
if (voltar) {
   voltar.addEventListener('click', () => {
      document.querySelector('.carrinho').classList.remove('carrinhoActivo')
   })
}

/* ================================
   VOLTAR PARA PÁGINA PRINCIPAL
================================ */
let button_Back = document.querySelector('.button_Back')
if (button_Back) {
   button_Back.addEventListener('click', () => {
      window.location.href = '../index.html'
   })
}


let coresSelecinada = ""
let tamanhoSelionado = ""


/* ================================
   ADICIONAR ITENS AO CARRINHO
================================ */
function adicionarCarrinho(id) {
   for (let i = 0; i < itensVendas.length; i++) {
      if (id == itensVendas[i].id) {
         coresSelecinada = itensVendas[i].cores[0]
         tamanhoSelionado = itensVendas[i].tamanho[0]


         if (coresSelecinada !== "" && tamanhoSelionado !== "") {
            /* verifica se já existe item igual no carrinho */
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

               /* criação dinâmica do card do carrinho */
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

   guardar()
   avisoGeral('add')
   localStorage.setItem("carrinho", JSON.stringify(carrinho))
   numeros_Itens.textContent = carrinho.length


   /* ================================
   FUNÇÃO PARA ATUALIZAR QUANTIDADE
================================ */
   function quantidadeItens(q_Id, q_Cor, q_Tamanho, q_quantidade, q_preco) {
      let q_dOitens = document.querySelector(`.itensCarrinho[data-id="${q_Id}"][data-cor="${q_Cor}"][data-tamanho="${q_Tamanho}"]`)

      let q_itenQuantdade = q_dOitens.querySelector('.itenQuantdade')
      q_itenQuantdade.textContent = q_quantidade
   }
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
   }

   removerMensgem()
}

// ============================
// FUNCAO DE AVISO GERAL ( EXIBIR MENSAGEM DE AVSISO )
//=============================
function avisoGeral(valor) {
   let sect_avisoAdicionar = document.querySelector('.sect_avisoAdicionar')
   sect_avisoAdicionar.classList.add('activo_avisoAdicionar')

   let processo = document.querySelector('.processo')
   let avisoAdicionar = document.querySelector('.avisoAdicionar')

   if (valor == 'carrinho') {
      avisoAdicionar.textContent = 'carrinho vazio'
      processo.classList.add('processo_none')
   }

   else if (valor == 'add') {
      avisoAdicionar.textContent = 'item adicionado ao carrinho'
      processo.classList.remove('processo_none')
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


/* ================================
   DETALHES DO ITEM NO CARRINHO
================================ */
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


/* ================================
   ELIMINAR ITEM DO CARRINHO
================================ */
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

   numeros_Itens.textContent = carrinho.length
   localStorage.setItem("carrinho", JSON.stringify(carrinho))
}

/* ================================
   FINALIZAÇÃO DE COMPRA
================================ */
function detalhesCompra() {

   /* criação de UI de pagamento, envio, cidade, inputs etc */
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

/* inicialização */
detalhesCompra()

/* ================================
   GUARDAR CARRINHO NO LOCALSTORAGE
================================ */
function guardar() {
   localStorage.setItem("carrinho", JSON.stringify(carrinho))
   if (numeros_Itens) {
      numeros_Itens.innerHTML = carrinho.length
   }
}
guardar()