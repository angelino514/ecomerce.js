
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

  if (pagina == 'pesquisa' || pagina == 'categoria') {
    window.location.href = `detalhes.html?dados=${encodeURIComponent(dados)}&pagina=${pagina}`
  }
}


// URL DAS PAGONAS ACTIVADAS COM OS BOTOES DO NAVBAR 
export function caminhosPaginasNavbar({ accao, pagina, botao }) {

  const rotas = {
    index: 'index.html',
    pesquisa: 'search.html',
    favoritos: 'favorito.html',
    lista: 'list.html'
  }

  if (pagina == 'index') {
    if (botao == 'pesquisa' || botao == 'favoritos' || botao == 'lista') {
      window.location.href = 'itens/' + rotas[botao]
    }
  }

  if (pagina == 'pesquisa' || pagina == 'favoritos' || pagina == 'lista') {
    if (botao == 'index') {
      window.location.href = '../' + rotas[botao]
    }

    else {
      window.location.href = rotas[botao]
    }
  }

}     

