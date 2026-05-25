import { carrinho } from "./carrinho.js"
import { itensVendas } from "../bancoDados.js"
import { guardarCarrinho } from "./carrinho.js"
import { favoritos } from "./favoritos.js"
import { guardarFavoritos } from "./favoritos.js"



// INFORMACOES DE COMPRA && ADICONAR AO CARRINHO E FAVORITOS
export function addProdutosCompra({ id, cor, tamanho, accao }) {


   let itenPreco = itensVendas.find(p => p.id == id)
   if (!itenPreco) return

   if (accao == 'carrinho') {
      let existeItem = carrinho.find(p =>
         p.id == id &&
         p.cor == cor &&
         p.tamanho == tamanho
      )

      if (existeItem) {
         existeItem.quantidade += 1
      }

      else {
         carrinho.push({ id: id, cor: cor, tamanho: tamanho, preco: itenPreco.preco, quantidade: 1 })
      }
   }

   else if (accao == 'favorito') {

      let existeItem = favoritos.find(p =>
         p.id == id &&
         p.cor == cor &&
         p.tamanho == tamanho
      )

      if (existeItem) {
         existeItem.quantidade += 1
      }

      else {
         favoritos.push({ id: id, cor: cor, tamanho: tamanho, preco: itenPreco.preco, quantidade: 1 })
      }
   }

   guardarFavoritos(favoritos)
   guardarCarrinho(carrinho)
}


