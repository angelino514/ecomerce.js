export function componenteFooter() {

   // FOOTER
   let footer = document.createElement('footer');
   footer.classList.add('footer');

   // CONTEÚDO PRINCIPAL
   let footerContent = document.createElement('div');
   footerContent.classList.add('footer-content', 'face');

   // -------------------------
   // SECTION 1 - E-STORE
   // -------------------------
   let section1 = document.createElement('div');
   section1.classList.add('footer-section');

   let title1 = document.createElement('h3');
   title1.textContent = 'E-STORE';
   title1.classList.add('title_footer')

   let desc = document.createElement('p');
   desc.textContent = 'Loja online criada para oferecer produtos variados com qualidade e bons preços.';

   section1.appendChild(title1);
   section1.appendChild(desc);

   // -------------------------
   // SECTION 2 - INFORMAÇÕES
   // -------------------------
   let section2 = document.createElement('div');
   section2.classList.add('footer-section');

   let title2 = document.createElement('h3');
   title2.textContent = 'Informações';
   title2.classList.add('title_footer')

   let ul = document.createElement('ul');

   let infoItems = [
      'Sobre nós',
      'Ajuda',
      'Política de Privacidade',
      'Termos de Uso'
   ];

   infoItems.forEach(text => {
      let li = document.createElement('li');
      li.textContent = text;
      ul.appendChild(li);
   });

   section2.appendChild(title2);
   section2.appendChild(ul);

   // -------------------------
   // SECTION 3 - CONTACTOS
   // -------------------------
   let section3 = document.createElement('div');
   section3.classList.add('footer-section');

   let title3 = document.createElement('h3');
   title3.textContent = 'Contactos';
   title3.classList.add('title_footer')

   let email = document.createElement('p');
   email.textContent = 'Email: suporte@estore.com';

   let telefone = document.createElement('p');
   telefone.textContent = 'Telefone: +244 900 000 000';

   let local = document.createElement('p');
   local.textContent = 'Luanda, Angola';

   section3.appendChild(title3);
   section3.appendChild(email);
   section3.appendChild(telefone);
   section3.appendChild(local);

   // -------------------------
   // SECTION 4 - REDES SOCIAIS
   // -------------------------
   let section4 = document.createElement('div');
   section4.classList.add('footer-section');

   let title4 = document.createElement('h3');
   title4.textContent = 'Redes Sociais';
   title4.classList.add('title_footer')

   let redes = document.createElement('p');
   redes.textContent = 'Facebook | Instagram | WhatsApp';

   section4.appendChild(title4);
   section4.appendChild(redes);

   // -------------------------
   // FOOTER BOTTOM
   // -------------------------
   let footerBottom = document.createElement('div');
   footerBottom.classList.add('footer-bottom');

   let copy = document.createElement('p');
   copy.textContent = '© 2026 E-STORE. Todos os direitos reservados.';

   footerBottom.appendChild(copy);

   // -------------------------
   // MONTAGEM FINAL
   // -------------------------
   footerContent.appendChild(section1);
   footerContent.appendChild(section2);
   footerContent.appendChild(section3);
   footerContent.appendChild(section4);

   footer.appendChild(footerContent);
   footer.appendChild(footerBottom);

   return footer;
}