import { categorias } from "../modulos/categorias.js";
import { sugestoesPesquisa } from "./sugestoesPesquisa.js";
import { filtarCategorias } from "../modulos/categorias.js";

export function componentesHeader({ pagina }) {
   // HEADER
   let header = document.createElement('header');
   header.classList.add('header');
   header.dataset.pagina = pagina

   // SECTION FACE
   let face = document.createElement('section');
   face.classList.add('face');

   // LOGO
   let logo = document.createElement('div');
   logo.classList.add('logo');

   //BUTTON NAVEGACAO 
   let back_button = document.createElement('button')
   back_button.dataset.nome = 'voltar'
   back_button.classList.add('nav_button', 'button_list', 'evento')

   let back_icon = document.createElement('span')
   back_icon.classList.add('material-symbols-outlined')
   back_icon.textContent = 'arrow_back'
   back_button.addEventListener('click' , ()=>{
      history.back()
   })

   let e_store = document.createElement('a');
   e_store.classList.add('E-STORE');
   e_store.textContent = 'E-STORE';

   // SEARCH
   let container_input = document.createElement('div');
   container_input.classList.add('container_input', 'search', 'search_dastop')
   container_input.appendChild(sugestoesPesquisa({ pagina: pagina }))

   // BUTTONS CONTAINER
   let container_buttons_list = document.createElement('div');
   container_buttons_list.classList.add('container_buttons_list');

   // FAVORITO
   let favorite = document.createElement('button');
   favorite.classList.add('button_list', 'evento');
   favorite.dataset.nome = 'favorito';

   let iconeFavorito = document.createElement('span');
   iconeFavorito.classList.add('material-symbols-outlined');
   iconeFavorito.textContent = 'favorite';

   // CARRINHO
   let carrinho = document.createElement('button');
   carrinho.classList.add('button_list', 'button_relative', 'evento');
   carrinho.dataset.nome = 'carrinho';

   let carrinhoIcone = document.createElement('span');
   carrinhoIcone.classList.add('material-symbols-outlined');
   carrinhoIcone.textContent = 'shopping_cart';

   let numero_itens = document.createElement('span');
   numero_itens.classList.add('numeros_absulute');
   numero_itens.textContent = '0';


   // NAVBAR SCROLL DO HEADER
   let navbar_header = document.createElement('nav')
   navbar_header.classList.add('navbar_header')

   // CONTAINER NAVBAR SCROLL DO HEADER 
   let container_navbar = document.createElement('div')
   container_navbar.classList.add('container_navbar', 'face')

   categorias().forEach(iten => {
      let link_scroll = document.createElement('a')
      link_scroll.classList.add('link_scroll')
      link_scroll.textContent = iten.categoria

      link_scroll.addEventListener('click', () => {
         filtarCategorias({ valor: link_scroll.textContent, pagina: pagina })
      })
      container_navbar.appendChild(link_scroll)
   })

   // ---------------------------
   // APPEND (ORDEM CORRETA)
   // ---------------------------
   // a DENTRO DA LOGO
   // SE A PAGINA FOR CARRINHO OU PESQUISA
   if (pagina == 'carrinho' || pagina == 'pesquisa' || pagina == 'categoria' || pagina == 'detalhes') {
      logo.appendChild(back_button)
      back_button.appendChild(back_icon)
   }
   logo.appendChild(e_store);

   // OCULTAR O CONTAINER INPUT NA PAGINA INDEX PARA TELAS DE DISPOSITIVOS MOBILE
   // SE A PAGINA FOR PAGINA INCIAL
   if (pagina == 'index') {
      container_input.classList.add('ocultar_mobile')
      favorite.classList.add('ocultar_mobile')
   }

   // SE A PAGINA FOR PESQUISA
   if (pagina == 'pesquisa') {
      // INPUT MOBILE
      e_store.classList.add('ocultar_mobile')
      navbar_header.classList.add('ocultar')
      container_buttons_list.classList.add('ocultar_mobile')
   }

   // SE A PAGINA FOR CATEGORIA
   if (pagina == 'categoria') {
      container_input.classList.add('ocultar')
      container_buttons_list.classList.add('ocultar_mobile')
   }

   //   SE A PAGINA FOR DETALHES
   if (pagina == 'detalhes') {
      favorite.classList.add('ocultar')
      carrinho.classList.add('ocultar')
      container_buttons_list.classList.add('ocultar')
      container_input.classList.add('ocultar')
      navbar_header.classList.add('ocultar')
   }

   // favorito
   favorite.appendChild(iconeFavorito);

   // carrinho
   carrinho.appendChild(carrinhoIcone);
   carrinho.appendChild(numero_itens);

   // container buttons
   container_buttons_list.appendChild(favorite);
   container_buttons_list.appendChild(carrinho);

   // section face
   face.appendChild(logo);
   face.appendChild(container_input);
   face.appendChild(container_buttons_list);


   // NAVBAR SCROLL HEADER 
   navbar_header.appendChild(container_navbar)

   // header
   header.appendChild(face);
   header.appendChild(navbar_header)

   // retorno final
   return header;
}