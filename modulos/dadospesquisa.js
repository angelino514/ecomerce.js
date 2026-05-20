//=======================================
// BUSCAR DADOS NA LISTA DE VENDAS
//=======================================
import { itensVendas } from "../bancoDados.js";
import { criarProdutos } from "./criarprodutos.js";
import { caminhoPaginas } from "./caminhosPaginas.js";
import { resultadoPesuisa } from "../scripts/search.js";


// ENVIAR DADOS PESQUISA E URL DA PAGINA DE PESQUISA
export function dadosPesquisa({valor , pagina }){

  // SE A PAGINA FOR A PAGINA SERA RENDERECIONADO PARA A PAGINA PESQUISA
    if(pagina == 'index'){
 
      console.log(valor)
      caminhoPaginas({dados : valor , pagina : pagina})
    }
  
    // SE A PAGINA FOR DA PESQUISA  OS DADOS SERAO DA PAGINA PESQUISA
    else if( pagina == 'pesquisa'){
      resultadoPesuisa({valor : valor , pagina : pagina})
    }
}

