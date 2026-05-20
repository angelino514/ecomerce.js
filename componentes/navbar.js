
export function componenteNavbarMobile({pagina}) {

   // NAV
   let nav = document.createElement('nav');
   nav.classList.add('navbar_mobile');
   nav.dataset.nome = 'navbar_mobile'

   // CONTAINER FACE
   let face = document.createElement('div');
   face.classList.add('face');

   // BOTÃO HOME
   let homeBtn = document.createElement('button');
   homeBtn.classList.add('link_mobile', 'evento');
   homeBtn.dataset.nome = 'index';

   let homeIcon = document.createElement('span');
   homeIcon.classList.add('material-symbols-outlined');
   homeIcon.textContent = 'home';

   let homeText = document.createElement('span');
   homeText.classList.add('text_span_link');
   homeText.textContent = 'inicio';

   // BOTÃO PESQUISA
   let searchBtn = document.createElement('button');
   searchBtn.classList.add('link_mobile', 'evento', 'search');
   searchBtn.dataset.nome = 'pesquisa';

   let searchIcon = document.createElement('span');
   searchIcon.classList.add('material-symbols-outlined');
   searchIcon.textContent = 'search';

   let searchText = document.createElement('span');
   searchText.classList.add('text_span_link');
   searchText.textContent = 'Pesquisar';

   // BOTÃO FAVORITO
   let favBtn = document.createElement('button');
   favBtn.classList.add('link_mobile', 'evento');
   favBtn.dataset.nome = 'favorito';

   let favIcon = document.createElement('span');
   favIcon.classList.add('material-symbols-outlined');
   favIcon.textContent = 'favorite';

   let favText = document.createElement('span');
   favText.classList.add('text_span_link', 'evento');
   favText.textContent = 'favoritos';

   // BOTÃO CARRINHO
   let cartBtn = document.createElement('button');
   cartBtn.classList.add('link_mobile', 'button_relative', 'evento');
   cartBtn.dataset.nome = 'carrinho';

   let cartIcon = document.createElement('span');
   cartIcon.classList.add('material-symbols-outlined');
   cartIcon.textContent = 'shopping_cart';

   let cartNumber = document.createElement('span');
   cartNumber.classList.add('numeros_absulute', 'abslute_mobile');
   cartNumber.textContent = '0';

   let cartText = document.createElement('span');
   cartText.classList.add('text_span_link');
   cartText.textContent = 'carrinho';

   // ------------------------
   // APPEND (ORDEM CORRETA)
   // ------------------------
   homeBtn.appendChild(homeIcon);
   homeBtn.appendChild(homeText);

   searchBtn.appendChild(searchIcon);
   searchBtn.appendChild(searchText);

   favBtn.appendChild(favIcon);
   favBtn.appendChild(favText);

   cartBtn.appendChild(cartIcon);
   cartBtn.appendChild(cartNumber);
   cartBtn.appendChild(cartText);

   face.appendChild(homeBtn);
   face.appendChild(searchBtn);
   face.appendChild(favBtn);
   face.appendChild(cartBtn);

   nav.appendChild(face);

   return nav;
}