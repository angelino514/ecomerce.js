import { itensVendas } from "../bancoDados.js"
import { navegacaoLabels } from "../modulos/evento.js"
import { addProdutosCompra } from "../modulos/addproduto.js"
import { carrinho } from "../modulos/carrinho.js"
import { favoritos } from "../modulos/favoritos.js"
import { arrowLeftIcon } from "../modulos/icones.js"
import { arrowRightIcon } from "../modulos/icones.js"
import { heartIcon } from "../modulos/icones.js"
import { exbirMensagem } from "./mensagem.js"

// ===============================
// DADOS DA COMPRA 
//================================
export let coreSelecionada = ''
export let tamanhoSelecionado = ''



export function detalhesProduto({ id, pagina }) {

   // VERIFICAR SE EXISTE ITEN QUE TEM O MESMO ID NOS ITENS VENDAS
   const iten = itensVendas.find(p => p.id === id)
   if (!iten) return


   // CONTAINER PRINCIPAL
   const containerDetalhes = document.createElement('div')
   containerDetalhes.classList.add('container_detalhes')
   containerDetalhes.dataset.id = iten.id


   // FACE
   const face = document.createElement('div')
   face.classList.add('face')


   // =====================================
   // CARROSSEL
   // =====================================

   const carrosselImgs = document.createElement('div')
   carrosselImgs.classList.add('carrossel_imgs')

   // BOTÃO LEFT
   const btnLeft = document.createElement('button')
   btnLeft.classList.add('left', 'button_detalhes')

   btnLeft.addEventListener('click', () => {
      scroolImgsDetalhes().scrollLeft -= scroolImgsDetalhes().querySelector('.scrroll_container_imgs').clientWidth
   })

   const iconLeft = document.createElement('span')
   iconLeft.innerHTML = arrowLeftIcon()

   btnLeft.appendChild(iconLeft)

   // BOTÃO RIGHT
   const btnRight = document.createElement('button')
   btnRight.classList.add('riht', 'button_detalhes')

   btnRight.addEventListener('click', () => {
      scroolImgsDetalhes().scrollLeft += scroolImgsDetalhes().querySelector('.scrroll_container_imgs').clientWidth
   })

   const iconRight = document.createElement('span')
   iconRight.innerHTML = arrowRightIcon()

   btnRight.appendChild(iconRight)

   // CONTAINER SCROLL
   const containerCarrossel = document.createElement('div')
   containerCarrossel.classList.add('container_carrosel_imgs')

   // IMAGENS

   for (let i = 0; i < iten.imgs.length; i++) {

      const scrollImg = document.createElement('img')
      scrollImg.classList.add('scrroll_container_imgs')
      scrollImg.src = '../imgs/' + iten.imgs[i]

      containerCarrossel.appendChild(scrollImg)
   }

   // ADICIONAR ELEMENTOS
   carrosselImgs.appendChild(btnLeft)
   carrosselImgs.appendChild(btnRight)
   carrosselImgs.appendChild(containerCarrossel)


   // =====================================
   // CONTEÚDO DETALHES
   // =====================================

   const contentDetalhes = document.createElement('div')
   contentDetalhes.classList.add('content_detalhes')



   // NOME
   const nome = document.createElement('h1')
   nome.classList.add('nome_iten')
   nome.textContent = iten.iten

   // PREÇO
   const precoBox = document.createElement('h2')
   precoBox.classList.add('precoBox_h2')

   const preco = document.createElement('span')
   preco.classList.add('precoIten')
   preco.textContent = iten.preco

   const moeda = document.createElement('span')
   moeda.classList.add('moeda')
   moeda.textContent = 'Kz'

   precoBox.appendChild(preco)
   precoBox.appendChild(moeda)

   // DESCRIÇÃO
   const descricao = document.createElement('p')
   descricao.classList.add('descricao')

   descricao.textContent = iten.itenDesc



   // =====================================
   // BOTÕES
   // =====================================

   const containerBtns = document.createElement('div')
   containerBtns.classList.add('container_btns_accao')

   const faceBtns = document.createElement('div')
   faceBtns.classList.add('face')

   // FAVORITOS
   const btnFavorito = document.createElement('button')
   btnFavorito.dataset.accao = 'favorito'
   btnFavorito.dataset.botao = 'msgFavorito'
   btnFavorito.classList.add(
      'buttons_accao',
      'btn_favorito',
   )

   btnFavorito.addEventListener('click', () => {
      addProdutosCompra({
         id: id,
         cor: coreSelecionada,
         tamanho: tamanhoSelecionado,
         accao: btnFavorito.dataset.accao
      })

      // EXIBIR MENSAGEM DE ADD AS LISTAS
      exbirMensagem({ botao: btnFavorito.dataset.botao })
   })

   const svgFavorito = document.createElement('span')
   svgFavorito.innerHTML = heartIcon()
   svgFavorito.classList.add('svgs')

   btnFavorito.appendChild(svgFavorito)

   // PEDIDO
   const btnPedido = document.createElement('button')
   btnPedido.dataset.accao = 'pedido'
   btnPedido.classList.add(
      'buttons_accao',
      'btn_pedido',
      'btns_semilares'
   )

   // COMPRA IMEDIATA
   btnPedido.addEventListener('click', () => {
      addProdutosCompra({
         id: id,
         cor: coreSelecionada,
         tamanho: tamanhoSelecionado,
         accao: btnPedido.dataset.accao
      })
   })

   btnPedido.textContent = 'Fazer pedido'

   // CARRINHO
   const btnCarrinho = document.createElement('button')
   btnCarrinho.dataset.accao = 'carrinho'
   btnCarrinho.dataset.botao = 'msgCarrinho'
   btnCarrinho.classList.add(
      'buttons_accao',
      'btn_carrinho',
      'btns_semilares'
   )

   btnCarrinho.textContent = 'Adicionar ao carrinho'

   // ADICIONAR AO CARRINHO
   btnCarrinho.addEventListener('click', () => {
      addProdutosCompra({
         id: id,
         cor: coreSelecionada,
         tamanho: tamanhoSelecionado,
         accao: btnCarrinho.dataset.accao
      })

      // EXIBIR MENSAGEM DE ADD AS LISTAS
      exbirMensagem({ botao: btnCarrinho.dataset.botao })
   })

   // ADICIONAR BOTÕES
   faceBtns.appendChild(btnFavorito)
   faceBtns.appendChild(btnPedido)
   faceBtns.appendChild(btnCarrinho)

   containerBtns.appendChild(faceBtns)


   // =====================================
   // MONTAGEM FINAL
   // =====================================

   contentDetalhes.appendChild(nome)
   contentDetalhes.appendChild(precoBox)
   contentDetalhes.appendChild(descricao)

   contentDetalhes.appendChild(criarOpcoesProduto({ itens: iten, pagina: 'detalhes' }))

   contentDetalhes.appendChild(containerBtns)

   face.appendChild(carrosselImgs)
   face.appendChild(contentDetalhes)



   containerDetalhes.appendChild(face)

   // RETORNO
   return containerDetalhes
}


function scroolImgsDetalhes() {
   return document.querySelector('.container_carrosel_imgs')
}

function criarOpcoesProduto({ itens, pagina }) {

   // CONTAINER PRINCIPAL
   const containerOpcoes = document.createElement('div');
   containerOpcoes.classList.add('container_opces');


   // =========================
   // CORES
   // =========================

   const opcoesCores = document.createElement('div');
   opcoesCores.classList.add('opces_content', 'cores');

   for (let i = 0; i < itens.cores.length; i++) {

      let labelCor = document.createElement('label');
      labelCor.classList.add('labeis_itens')
      labelCor.setAttribute('for', itens.cores[i]);
      labelCor.textContent = itens.cores[i];

      // ENVIAR DADOS DO ELEMENTO PAI E O ITEM CLICADO
      labelCor.addEventListener('click', () => {
         navegacaoLabels({ origen: labelCor.closest('.opces_content'), iten_label: labelCor, pagina: 'detalhes' })
      })

      let inputCor = document.createElement('input');
      inputCor.classList.add('ocultar')
      inputCor.type = 'radio';
      inputCor.name = 'cores';
      inputCor.value = itens.cores[i]
      inputCor.id = itens.cores[i]

      inputCor.addEventListener('change', () => {
         if (inputCor.checked) {
            coreSelecionada = inputCor.value
         }
      })

      if (labelCor.textContent == itens.cores[0] && inputCor.value == itens.cores[0]) {
         inputCor.checked = true
         labelCor.classList.add('label_activo')
      }

      if (inputCor.checked == true) {
         coreSelecionada = inputCor.value

      }

      // ORDEM
      opcoesCores.appendChild(labelCor);
      opcoesCores.appendChild(inputCor);
   }

   // =========================
   // TAMANHO
   // =========================

   const opcoesTamanho = document.createElement('div');
   opcoesTamanho.classList.add('opces_content', 'tamanho');

   for (let i = 0; i < itens.tamanho.length; i++) {

      let labelTamanho = document.createElement('label');
      labelTamanho.classList.add('labeis_itens')
      labelTamanho.setAttribute('for', itens.tamanho[i]);
      labelTamanho.textContent = itens.tamanho[i];

      // ENVIAR DADOS DO ELEMENTO PAI E O ITEM CLICADO
      labelTamanho.addEventListener('click', () => {
         navegacaoLabels({ origen: labelTamanho.closest('.opces_content'), iten_label: labelTamanho, pagina: 'detalhes' })
      })

      let inputTamanho = document.createElement('input');
      inputTamanho.classList.add('ocultar')
      inputTamanho.type = 'radio';
      inputTamanho.name = 'tamanhos';
      inputTamanho.value = itens.tamanho[i]
      inputTamanho.id = itens.tamanho[i];

      // EVENTO
      inputTamanho.addEventListener('change', () => {
         if (inputTamanho.checked) {
            tamanhoSelecionado = inputTamanho.value
         }
      })

      // ADICIONAR CLASS LABEL ACTIVO
      if (labelTamanho.textContent == itens.tamanho[0] && inputTamanho.value == itens.tamanho[0]) {
         inputTamanho.checked = true
         labelTamanho.classList.add('label_activo')
      }

      // VALOR NATIVO
      if (inputTamanho.checked == true) {
         tamanhoSelecionado = inputTamanho.value
      }

      // ORDEM
      opcoesTamanho.appendChild(labelTamanho);
      opcoesTamanho.appendChild(inputTamanho);
   }



   // =========================
   // ADICIONAR AO CONTAINER
   // =========================

   containerOpcoes.appendChild(opcoesCores);
   containerOpcoes.appendChild(opcoesTamanho);

   return containerOpcoes;
}
