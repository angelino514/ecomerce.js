import { itensVendas } from "../bancoDados.js"

export function detalhesProduto({ id, pagina }) {

   // VERIFICAR SE EXISTE ITEN QUE TEM O MESMO ID NOS ITENS VENDAS
   const iten = itensVendas.find(p => p.id === id)
   if (!iten) return


   // CONTAINER PRINCIPAL
   const containerDetalhes = document.createElement('div')
   containerDetalhes.classList.add('container_detalhes')

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

   const iconLeft = document.createElement('span')
   iconLeft.classList.add('material-symbols-outlined')
   iconLeft.textContent = 'chevron_left'

   btnLeft.appendChild(iconLeft)

   // BOTÃO RIGHT
   const btnRight = document.createElement('button')
   btnRight.classList.add('riht', 'button_detalhes')

   const iconRight = document.createElement('span')
   iconRight.classList.add('material-symbols-outlined')
   iconRight.textContent = 'chevron_right'

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

   // FAVORITO
   const btnFavorito = document.createElement('button')
   btnFavorito.classList.add(
      'buttons_accao',
      'btn_favorito'
   )

   const iconFavorito = document.createElement('span')
   iconFavorito.classList.add('material-symbols-outlined')
   iconFavorito.textContent = 'favorite'

   btnFavorito.appendChild(iconFavorito)

   // PEDIDO
   const btnPedido = document.createElement('button')
   btnPedido.classList.add(
      'buttons_accao',
      'btn_pedido',
      'btns_semilares'
   )

   btnPedido.textContent = 'Fazer pedido'

   // CARRINHO
   const btnCarrinho = document.createElement('button')
   btnCarrinho.classList.add(
      'buttons_accao',
      'btn_carrinho',
      'btns_semilares'
   )

   btnCarrinho.textContent =
      'Adicionar ao carrinho'

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
   contentDetalhes.appendChild(containerBtns)

   face.appendChild(carrosselImgs)
   face.appendChild(contentDetalhes)

   containerDetalhes.appendChild(face)



   // RETORNO
   return containerDetalhes
}