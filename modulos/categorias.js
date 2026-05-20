import { itensVendas } from "../bancoDados.js"
import { caminhoPaginaCategoria } from "./caminhosPaginas.js"
import { resultadoCategoria} from  "../scripts/categoria.js"

export function categorias(){
     const lisatCategoria = []

     for (let i = 0; i < itensVendas.length; i++) {
        if(!lisatCategoria.some(obj => obj.categoria === itensVendas[i].categoria)){
         lisatCategoria.push(itensVendas[i])
        }
     }

     return lisatCategoria
}


// FILTAR CATEGORIA COM BASE NA PAGINA 
export function filtarCategorias({valor , pagina }){
   if(pagina == 'index'){
      caminhoPaginaCategoria({dados : valor , pagina : pagina})
   }

   else if( pagina == 'categoria'){
      resultadoCategoria({ valor : valor , pagina : pagina })
   }
}