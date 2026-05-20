import { getImagePath } from "../modulos/verficarelemento.js";
import { categorias } from "../modulos/categorias.js";
import { filtarCategorias } from "../modulos/categorias.js";



// CARROSEL ITENS
function componenteCarrossel({ pagina }) {

   // CONTAINER PRINCIPAL
   let container = document.createElement('div');
   container.classList.add('container_carrossel', 'face');

   // BOTÃO LEFT
   let btnLeft = document.createElement('button');
   btnLeft.classList.add('buttons_carrossel');

   let iconLeft = document.createElement('span');
   iconLeft.classList.add('material-symbols-outlined');
   iconLeft.textContent = 'arrow_left';

   btnLeft.appendChild(iconLeft);

   // BOTÃO RIGHT
   let btnRight = document.createElement('button');
   btnRight.classList.add('buttons_carrossel', 'rith');

   let iconRight = document.createElement('span');
   iconRight.classList.add('material-symbols-outlined');
   iconRight.textContent = 'arrow_right';

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
      img.src = iten.img

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

   if (pagina == 'categoria' || pagina == 'pesquisa' || pagina == 'detalhes') {
      container_benners.classList.add('ocultar')
      carrossel_categoria.classList.add('ocultar')
      main.classList.add('main_activo')
   }

   return main;
}
