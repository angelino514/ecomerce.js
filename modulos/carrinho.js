function pegarCarrinho() {
  return JSON.parse(localStorage.getItem('carrinho')) || []
}
 
export let carrinho = pegarCarrinho()

export function guardarCarrinho(carrinho) {
   localStorage.setItem("carrinho", JSON.stringify(carrinho))
}