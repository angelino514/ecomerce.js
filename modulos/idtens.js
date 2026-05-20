// =====================================================
// ENVIAR DETALHES DA PAGINA COM BASE NA PAGINA ENVIADA
// =====================================================
export function idItens({ id , pagina }) {
   if (pagina == 'index') {
      window.location.href =`itens/detalhes.html?id=${id}&pagina=${pagina}`
   } 
}