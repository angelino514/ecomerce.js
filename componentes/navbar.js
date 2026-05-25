import { caminhosPaginasNavbar } from "../modulos/caminhosPaginas.js";


export function componenteNavbarMobile({ pagina }) {

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

   // EVENTO
   homeBtn.addEventListener('click', () => {
      caminhosPaginasNavbar({ accao: pagina, pagina: pagina, botao: homeBtn.dataset.nome })
   })

   let homeIcon = document.createElement('img');
   homeIcon.classList.add('svgs')

   let homeText = document.createElement('span');
   homeText.classList.add('text_span_link');
   homeText.textContent = 'inicio';

   // BOTÃO PESQUISA
   let searchBtn = document.createElement('button');
   searchBtn.classList.add('link_mobile', 'evento', 'search');
   searchBtn.dataset.nome = 'pesquisa';

   // EVENTO
   searchBtn.addEventListener('click', () => {
      caminhosPaginasNavbar({ accao: pagina, pagina: pagina, botao: searchBtn.dataset.nome })
   })

   let searchIcon = document.createElement('img');
   searchIcon.classList.add('svgs')

   let searchText = document.createElement('span');
   searchText.classList.add('text_span_link');
   searchText.textContent = 'Pesquisar';

   // BOTÃO FAVORITO
   let favBtn = document.createElement('button');
   favBtn.classList.add('link_mobile', 'evento');
   favBtn.dataset.nome = 'favoritos';

   // EVENTO
   favBtn.addEventListener('click', () => {
      caminhosPaginasNavbar({ accao: pagina, pagina: pagina, botao: favBtn.dataset.nome })
   })

   let favIcon = document.createElement('img');
   favIcon.classList.add('svgs')

   let favText = document.createElement('span');
   favText.classList.add('text_span_link', 'evento');
   favText.textContent = 'favoritos';

   // BOTÃO CARRINHO
   let cartBtn = document.createElement('button');
   cartBtn.classList.add('link_mobile', 'button_relative', 'evento');
   cartBtn.dataset.nome = 'lista';

   // EVENTO
   cartBtn.addEventListener('click', () => {
      caminhosPaginasNavbar({ accao: pagina, pagina: pagina, botao: cartBtn.dataset.nome })
   })

   let cartIcon = document.createElement('img');
   cartIcon.classList.add('svgs')

   let cartNumber = document.createElement('span');
   cartNumber.classList.add('numeros_absulute', 'abslute_mobile' , 'numero_carrinho');
   cartNumber.textContent = '0';

   let cartText = document.createElement('span');
   cartText.classList.add('text_span_link');
   cartText.textContent = 'carrinho';

   // CAMINHOS DOS SVGS
   if (pagina == 'index') {
      homeIcon.src = 'svgs/home.svg'
      searchIcon.src = 'svgs/search.svg'
      favIcon.src = 'svgs/favorito.svg'
      cartIcon.src = 'svgs/cart.svg'
   }

   if (pagina == 'categoria' || pagina == 'pesquisa' || pagina == 'lista') {
      homeIcon.src = '../svgs/home.svg'
      searchIcon.src = '../svgs/search.svg'
      favIcon.src = '../svgs/favorito.svg'
      cartIcon.src = '../svgs/cart.svg'
   }

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