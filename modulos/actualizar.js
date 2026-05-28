import { guardarDados } from "./contador.js"
import { leituraDados } from "./contador.js"
import { carrinho } from "./carrinho.js"

export function actualizarNumeroItens() {
   guardarDados(carrinho.length)
   document.querySelectorAll('.numero_carrinho').forEach(nc => {
      nc.textContent = leituraDados() ?? 0
   })
}
