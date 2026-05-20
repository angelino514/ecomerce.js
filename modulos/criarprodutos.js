import { caminhoPaginaDetalhes } from "./caminhosPaginas.js";
import { getImage } from "./verficarelemento.js";

// EXPORTAR  ITENS PARA ITENS CRIAR ITENS DA LISTA DE PRODUTOS
export function criarProdutos({ produtos, pagina }) {

   let container_main = document.querySelector('.container_main')
   // CRIAR ELEMENTOS COM BASE NAS DECICOES TOMADAS 
   // PREPARAR A LISTA 
   container_main.innerHTML = ''
   produtos.forEach(produto => {

      // ITEM (CONTEUDO PRINCIPAL)
      let item = document.createElement('div')
      item.classList.add('containers_list_itens', 'item');
      item.dataset.id = produto.id
      item.dataset.cor = produto.cores[0]
      item.dataset.tamanho = produto.tamanho[0]

      // IMAGEM DO PRODUTO
      let image = document.createElement('img');
      image.classList.add('container_img', 'evento');
      image.dataset.nome = 'detalhes'

      if (pagina == 'index') {
         image.src = getImage(produto.img)
      }

      else if (pagina == 'pesquisa' || pagina == 'categoria') {
         image.src = getImage(produto.img)
      }

      image.addEventListener('click', () => {
         caminhoPaginaDetalhes({ dados: image.closest('.item').dataset.id, pagina: pagina })
      })


      // CONTEUDO DETALHES DO PRODUTO ( NOME / PRECO/ ADD CARRINHO )
      let detail = document.createElement('div');
      detail.classList.add('container_detaila');

      // CONTENT ( NOME / PRECO )
      let content = document.createElement('div');
      content.classList.add('content_itens');

      // NOME DO PRODUTO
      let title = document.createElement('p');
      title.textContent = produto.iten;

      //PRECO BOX ( PRECO DO PRODUTO / MOEDA)
      let precoBox = document.createElement('p');
      precoBox.classList.add('contaiber_texo_details');

      let spanPreco = document.createElement('span');
      spanPreco.classList.add('preco');
      spanPreco.textContent = produto.preco;

      // MOEDA
      let moeda = document.createElement('span');
      moeda.classList.add('moeda');
      moeda.textContent = 'Kz';

      // ADICIONAR AO CARRINHO
      let add = document.createElement('div');
      add.classList.add('itens_add');
      add.dataset.nome = 'carrinho'

      // ICONE DO CARRINHO
      let icon = document.createElement('span');
      icon.classList.add('material-symbols-outlined');
      icon.textContent = 'add_shopping_cart';

      // MOTAGEM
      precoBox.appendChild(spanPreco);
      precoBox.appendChild(moeda);

      content.appendChild(title);
      content.appendChild(precoBox);
      add.appendChild(icon);

      detail.appendChild(content);
      detail.appendChild(add);

      item.appendChild(image);
      item.appendChild(detail);

      container_main.appendChild(item)
   });
}
