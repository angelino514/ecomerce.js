//GUARDAR DADOS 
export function guardarDados(numero) {
   localStorage.setItem("numero", numero)
}

// LEITURA DE DADOS 
export function leituraDados() {
   return localStorage.getItem("numero")
}