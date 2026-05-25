import { itensVendas } from "../bancoDados.js";
import { carrinho } from "../modulos/carrinho.js";
import { guardarCarrinho } from "../modulos/carrinho.js";
import { favoritos } from "../modulos/favoritos.js";
import { guardarFavoritos } from "../modulos/favoritos.js";


// ELEMENTOS DINAMICOS DA LISTA
export function criarItemCarrinho({ pagina }) {

   const container_list = document.createElement('div')
   container_list.classList.add('container_list')

   const qualquer = []


   // SE A PAGINA FOR LISTA DE CARRINHO
   if (pagina == 'lista') {
      carrinho.forEach(iten => {
         qualquer.push(iten)
      })
   }

   // SE A PAGINA FOR LISTA DE FAVORITOS
   else if (pagina == 'favoritos') {
      favoritos.forEach(iten => {
         qualquer.push(iten)
      })
   }

   qualquer.forEach(iten_lista => {

      let dcs = itensVendas.find(p => p.id == iten_lista.id)
      if (!dcs) return

      // CONTAINER PRINCIPAL
      const contListPr = document.createElement('div')
      contListPr.classList.add('cont_list_pr')
      contListPr.dataset.id = iten_lista.id
      contListPr.dataset.tamanho = iten_lista.tamanho
      contListPr.dataset.cor = iten_lista.cor

      const cont_lt_face = document.createElement('div')
      cont_lt_face.classList.add('cont_lt_face', 'face')

      // ===========================
      // CONTAINER DA IMAGEM
      // ===========================
      const contLtImg = document.createElement('div')
      contLtImg.classList.add('cont_lt_img')

      const img = document.createElement('img')
      img.classList.add('img_lt')
      img.src = '../imgs/' + dcs.img
      img.alt = dcs.iten

      contLtImg.appendChild(img)



      // ===========================
      // CONTAINER INFORMACOES
      // ===========================
      const contInfDt = document.createElement('div')
      contInfDt.classList.add('cont_inf_dt')


      // CONTAINER ITENS
      const contLtItns = document.createElement('div')
      contLtItns.classList.add('cont_lt_itns')


      // INFORMACOES DO ITEM
      const itenDtLt = document.createElement('div')
      itenDtLt.classList.add('iten_dt_lt')


      // NOME
      const nome = document.createElement('h2')
      nome.classList.add('n_itn_lt')
      nome.textContent = dcs.iten


      // DESCRICAO
      const descricao = document.createElement('p')
      descricao.classList.add('txt_itn_lt')


      descricao.textContent = dcs.itenDesc


      // COR E TAMANHO
      const opcoes = document.createElement('div')
      opcoes.classList.add('itn_esc_op')

      opcoes.textContent = `Cor :${iten_lista.cor} Tamanho :${iten_lista.tamanho}`


      // ADICIONAR INFORMACOES
      itenDtLt.appendChild(nome)
      itenDtLt.appendChild(descricao)
      itenDtLt.appendChild(opcoes)


      // TOTAL
      const total = document.createElement('span')
      total.classList.add('sp_lt_tt')
      total.textContent = `${dcs.preco * iten_lista.quantidade}Kz`


      // ADICIONAR NO CONTAINER DOS ITENS
      contLtItns.appendChild(itenDtLt)
      contLtItns.appendChild(total)


      // ===========================
      // BOTOES
      // ===========================
      const contLtBtns = document.createElement('div')
      contLtBtns.classList.add('cont_lt_btns')

      if(pagina == 'favoritos'){
         contLtBtns.classList.add('espaco_itens')
      }

      // DADOS DO ELEMENTO PAI
      let dados = contListPr

      contLtBtns.appendChild(criarControleQuantidade({
         id: dados.dataset.id,
         cor: dados.dataset.cor,
         tamanho: dados.dataset.tamanho,
         pagina: pagina
      }))



      const btnRemover = document.createElement('button')
      btnRemover.textContent = 'Remover'

      contLtBtns.appendChild(btnRemover)


      // ===========================
      // MONTAGEM FINAL
      // ===========================
      contInfDt.appendChild(contLtItns)
      contInfDt.appendChild(contLtBtns)

      cont_lt_face.appendChild(contLtImg)
      cont_lt_face.appendChild(contInfDt)

      contListPr.appendChild(cont_lt_face)

      container_list.appendChild(contListPr)
   })

   return container_list
}

// CONTROLO DE QUANTIDADE ( EVENTOS ENCREMENTAR && DECREMENTAR )
function criarControleQuantidade({ id, cor, tamanho, pagina }) {

   // CARRINHO

   let lista = pagina == 'lista'
      ? carrinho
      : favoritos

   let item = lista.find(p =>
      p.id == id &&
      p.cor == cor &&
      p.tamanho == tamanho
   )


   let preco = itensVendas.find(p => p.id == id)
   if (!preco) return
   if (!item) return


   const container_encremento = document.createElement('div');
   container_encremento.classList.add('container_encremento');
   container_encremento.dataset.id = id
   container_encremento.dataset.cor = cor
   container_encremento.dataset.tamanho = tamanho

   if (pagina == 'favoritos') {
      container_encremento.classList.add('ocultar')
   }

   // QUANTIDADE
   const numero_quantidade = document.createElement('p')
   numero_quantidade.classList.add('numero_quantidade')
   numero_quantidade.textContent = item.quantidade

   function quantidadesItens({ botao, origem }) {

      const sp_quantidade = origem.querySelector('.sp_lt_tt')

      if (botao == 'encrementar') {
         item.quantidade += 1
         sp_quantidade.textContent = `${item.quantidade * preco.preco}Kz`
      }

      else if (botao == 'decrementar') {
         if (item.quantidade >= 1) {
            item.quantidade -= 1
            sp_quantidade.textContent = `${item.quantidade * preco.preco}Kz`
         }

         if (item.quantidade == 0) {
            let indice = carrinho.findIndex(p => p.id == id && p.cor == cor && p.tamanho == tamanho)
            if (indice !== -1) {
               carrinho.splice(indice, 1)
               origem.remove()
            }
         }
      }


      // ACTULIZAR QUANTIDADE DE ITENS NO CARRINHO E NUMEROS 
      numero_quantidade.textContent = item.quantidade
      guardarCarrinho(carrinho)
      guardarFavoritos(favoritos)
   }

   // BOTÃO +
   const btnMais = document.createElement('button');
   btnMais.classList.add('button_quantidade', 'encrementar');
   btnMais.textContent = '+';

   // EVENTO ENCRENTAR 
   btnMais.addEventListener('click', () => {
      quantidadesItens({
         botao: 'encrementar',
         origem: container_encremento.closest('.cont_lt_btns').closest('.cont_inf_dt').closest('.cont_lt_face').closest('.cont_list_pr')
      })

      // ACTUALIZAR EM TEMPO REAL 
      actualizarEmTempoReal()
   })

   // BOTÃO -
   const btnMenos = document.createElement('button');
   btnMenos.classList.add('button_quantidade', 'decrementar');
   btnMenos.textContent = '-';

   // EVENTO DECREMENTAR 
   btnMenos.addEventListener('click', () => {
      quantidadesItens({
         botao: 'decrementar',
         origem: container_encremento.closest('.cont_lt_btns').closest('.cont_inf_dt').closest('.cont_lt_face').closest('.cont_list_pr')
      })

      // ACTUALIZAR EM TEMPO REAL 
      actualizarEmTempoReal()
   })

   // ORDEM (IMPORTANTE)
   container_encremento.appendChild(btnMais);
   container_encremento.appendChild(numero_quantidade)
   container_encremento.appendChild(btnMenos);

   return container_encremento;
}



export function infoCarrinho() {

   // CONTAINER
   const infCbc = document.createElement('div')
   infCbc.classList.add('inf_cbc')


   // TITULO
   const titulo = document.createElement('h2')
   titulo.classList.add('inf_cbc_h2')
   titulo.textContent = 'Seu carrinho'


   // TEXTO
   const texto = document.createElement('p')
   texto.classList.add('inf_txt_cbc')
   texto.textContent = 'Seu carrinho '


   // ADICIONAR ELEMENTOS
   infCbc.appendChild(titulo)
   infCbc.appendChild(texto)


   return infCbc
}

export function criarResumoPedido() {

   // ELEMENTO PAI
   const container_resumo = document.createElement('div')
   container_resumo.classList.add('container_resumo')


   // =========================
   // cont_resumo
   // =========================

   const cont_resumo = document.createElement('div')
   cont_resumo.classList.add('cont_resumo')


   // h2
   const titulo = document.createElement('h2')
   titulo.textContent = 'Resumo de pedido'

   cont_resumo.appendChild(titulo)


   // =========================
   // ITEM 1
   // =========================

   const item1 = document.createElement('div')
   item1.classList.add('itn_resumo')

   const span1 = document.createElement('span')
   span1.classList.add('spn_itn_resumo')
   span1.textContent = 'subtotal'

   const span2 = document.createElement('span')
   span2.classList.add('spn_itn_resumo', 'subtotal')


   item1.appendChild(span1)
   item1.appendChild(span2)

   cont_resumo.appendChild(item1)


   // =========================
   // ITEM 2
   // =========================

   const item2 = document.createElement('div')
   item2.classList.add('itn_resumo')

   const span3 = document.createElement('span')
   span3.classList.add('spn_itn_resumo')
   span3.textContent = 'Frete'

   const span4 = document.createElement('span')
   span4.classList.add('spn_itn_resumo', 'frete')
   span4.textContent = '2000kz'

   item2.appendChild(span3)
   item2.appendChild(span4)

   cont_resumo.appendChild(item2)


   // =========================
   // ITEM 3
   // =========================

   const item3 = document.createElement('div')
   item3.classList.add('itn_resumo', 'dO_total')

   const span5 = document.createElement('span')
   span5.classList.add('spn_itn_resumo')
   span5.textContent = 'Total'

   const span6 = document.createElement('span')
   span6.classList.add('spn_itn_resumo')
   span6.textContent = '9000kz'

   item3.appendChild(span5)
   item3.appendChild(span6)

   cont_resumo.appendChild(item3)


   // ADICIONANDO cont_resumo NO PAI
   container_resumo.appendChild(cont_resumo)


   // =========================
   // CONTAINER DOS BOTÕES
   // =========================

   const container_btns = document.createElement('div')
   container_btns.classList.add('container_btns')

   // BOTÃO 1
   const btn1 = document.createElement('button')
   btn1.classList.add('btns_resumos', 'continuar')
   btn1.textContent = 'Continuarc comprando'

   container_btns.appendChild(btn1)

   // BOTÃO 2
   const btn2 = document.createElement('button')
   btn2.classList.add('btns_resumos', 'finalizar')
   btn2.textContent = 'Finalizar compra'

   container_btns.appendChild(btn2)

   // ADICIONANDO BOTÕES NO PAI
   container_resumo.appendChild(container_btns)


   return container_resumo
}

export function actualizarEmTempoReal() {

   let subtotal = 0
   let spn_subtotal = document.querySelector('.subtotal')
   if (spn_subtotal) {
      carrinho.forEach(cn => {
         subtotal += cn.quantidade * cn.preco
         spn_subtotal.textContent = `${subtotal}Kz`
      })
   }

   let numero_carrinho = document.querySelectorAll('.numero_carrinho')

   numero_carrinho.forEach(nc => {
      if (nc) {
         nc.textContent = carrinho.length
      }
   })
}