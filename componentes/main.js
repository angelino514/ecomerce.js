
import { categorias } from "../modulos/categorias.js";
import { filtarCategorias } from "../modulos/categorias.js";
import { arrowLeftIcon } from "../modulos/icones.js";
import { arrowRightIcon } from "../modulos/icones.js";


// CARROSEL ITENS
function componenteCarrossel({ pagina }) {

   // CONTAINER PRINCIPAL
   let container = document.createElement('div');
   container.classList.add('container_carrossel', 'face');

   // BOTÃO LEFT
   let btnLeft = document.createElement('button');
   btnLeft.classList.add('buttons_carrossel');

   btnLeft.addEventListener('click', () => {
      scroolCarrousel().scrollLeft -= scroolCarrousel().querySelector('.itens_carrossel_content').clientWidth * 2
   })

   let iconLeft = document.createElement('span');
   iconLeft.innerHTML = arrowLeftIcon()

   btnLeft.appendChild(iconLeft);

   // BOTÃO RIGHT
   let btnRight = document.createElement('button');
   btnRight.classList.add('buttons_carrossel', 'rith');

   btnRight.addEventListener('click', () => {
      scroolCarrousel().scrollLeft += scroolCarrousel().querySelector('.itens_carrossel_content').clientWidth * 2
   })

   let iconRight = document.createElement('span');
   iconRight.innerHTML = arrowRightIcon()

   btnRight.appendChild(iconRight);

   // CARROSSEL
   let carrossel = document.createElement('div');
   carrossel.classList.add('carrossel');

   let carrosselItens = document.createElement('div');
   carrosselItens.classList.add('carrossel_itens');



   categorias().forEach(iten => {
      // BUTTO CARROSSEL
      let itemBtn = document.createElement('button');
      itemBtn.classList.add('itens_carrossel_content');
      itemBtn.dataset.valor = iten.categoria

      itemBtn.addEventListener('click', () => {
         filtarCategorias({ valor: itemBtn.dataset.valor, pagina: pagina })
      })

      let img = document.createElement('img');
      img.classList.add('img_category');
      img.src = 'imgs/' + iten.img

      let text = document.createElement('p');
      text.classList.add('texto_container');
      text.textContent = iten.categoria

      // ORDEM INTERNA DO ITEM
      itemBtn.appendChild(img);
      itemBtn.appendChild(text);

      carrosselItens.appendChild(itemBtn)
   })


   carrossel.appendChild(carrosselItens);
   // ORDEM FINAL (igual ao teu HTML)
   container.appendChild(btnLeft);
   container.appendChild(btnRight);
   container.appendChild(carrossel);

   return container;
}


function scroolCarrousel() {
   return document.querySelector('.carrossel')
}


export function componenteMain({ pagina }) {

   let main = document.createElement('main');
   main.classList.add('main');

   //---------------------------------------
   // BANNERS 
   //---------------------------------------
   let container_benners = document.createElement('div')
   container_benners.classList.add('container_benners', 'face')

   let banners = document.querySelector('.banners')
   if (banners) {
      container_benners.appendChild(banners)
   }
   //---------------------------------
   //CATEGORIA
   //---------------------------------
   let carrossel_categoria = document.createElement('div')
   carrossel_categoria.classList.add('carrossel_categoria')
   carrossel_categoria.appendChild(componenteCarrossel({ pagina: pagina }))

   //-------------------------
   //LISTAS DE PRODUTOS 
   //-------------------------
   let containerMain = document.createElement('div');
   containerMain.classList.add('container_main', 'face');
   containerMain.dataset.lista = 'primeira'

   main.appendChild(container_benners)
   main.appendChild(carrossel_categoria)
   main.appendChild(containerMain);

   if (pagina == 'categoria' || pagina == 'pesquisa' || pagina == 'detalhes'
      || pagina == 'lista' || pagina == 'favoritos') {
      container_benners.classList.add('ocultar')
      carrossel_categoria.classList.add('ocultar')
      main.classList.add('main_activo')
   }

   if (pagina == 'lista' || pagina == 'favoritos') {
      containerMain.classList.add('grid_list')
   }


   return main;
}
