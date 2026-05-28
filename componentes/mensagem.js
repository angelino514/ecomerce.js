
export function mensagemAdd() {

   // CONTAINER PRINCPAL
   const container_sms = document.createElement('div')
   container_sms.classList.add('container_sms')

   // TEXTO MENSAGEM 
   const mensagem = document.createElement('p')
   mensagem.classList.add('mensagem')

   // ORDEM CORRETA
   container_sms.appendChild(mensagem)

   return container_sms
}


export function exbirMensagem({ botao }) {

   const container_sms = document.querySelector('.container_sms')
   container_sms.classList.add('container_sms_flex')
   
   const textoMensagem = document.querySelector('.mensagem')

    const listaMensagem = {
      msgCarrinho : 'Ítem Idicionado ao carrinho' ,
      msgFavorito : 'Item adicionado aos favoritos'
    }

    textoMensagem.textContent = listaMensagem[botao]

    setTimeout(()=>{
      container_sms.classList.remove('container_sms_flex')
    } , 2000)
}
