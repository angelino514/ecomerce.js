//===========================
// CAMNIHOS PAGINAS (URLS DAS PAGINAS)
//===========================

// URL DA PESQUISA 
export function caminhoPaginas({ dados, pagina }) {
  if (pagina == 'index') {
    window.location.href = `itens/search.html?dados=${encodeURIComponent(dados)}&pagina=${pagina}`
  }
}

// URL CATEGORIA
export function caminhoPaginaCategoria({ dados, pagina }) {
  if (pagina == 'index') {
    window.location.href = `itens/categoria.html?dados=${encodeURIComponent(dados)}&pagina=${pagina}`
  }
}


// URL DETALHES 
export function caminhoPaginaDetalhes({ dados, pagina }) {
  if (pagina == 'index') {
    window.location.href = `itens/detalhes.html?dados=${encodeURIComponent(dados)}&pagina=${pagina}`
  }

  if(pagina == 'pesquisa' || pagina == 'categoria'){
     window.location.href = `detalhes.html?dados=${encodeURIComponent(dados)}&pagina=${pagina}`
  }
}

