function pegarFavoritos() {
   return JSON.parse(localStorage.getItem('favoritos')) || []
}

export let favoritos = pegarFavoritos()

export function guardarFavoritos(favoritos) {
   localStorage.setItem("favoritos", JSON.stringify(favoritos))
}
