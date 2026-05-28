import { itensVendas } from "../bancoDados.js";
import { carrinho } from "../modulos/carrinho.js";
import { guardarCarrinho } from "../modulos/carrinho.js";
import { favoritos } from "../modulos/favoritos.js";
import { guardarFavoritos } from "../modulos/favoritos.js";
import { deleteIcon, searchIconI } from "../modulos/icones.js";
import { menuAltIcon } from "../modulos/icones.js";
import { actualizarNumeroItens } from "../modulos/actualizar.js";
import { opcesLista } from "../modulos/caminhosPaginas.js";
import { closeIcon } from "../modulos/icones.js";

// ELEMENTOS DINAMICOS DA LISTA
export function criarItemCarrinho({ pagina }) {


   const div_principal = document.createElement('div')
   div_principal.classList.add('div_principal')

   div_principal.appendChild(infoCarrinho({ pagina: pagina }))

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

      if (pagina == 'favoritos') {
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
      btnRemover.innerHTML = deleteIcon()

      // EVENTO REMOVER ITEN DA LISTA
      btnRemover.addEventListener('click', () => {
         removeItensLista({
            id: dados.dataset.id,
            cor: dados.dataset.cor,
            tamanho: dados.dataset.tamanho,
            pagina: pagina,
            origem: btnRemover.closest('.cont_lt_btns').closest('.cont_inf_dt').closest('.cont_lt_face').closest('.cont_list_pr')
         })

         actualizarEmTempoReal({ pagina: pagina })
         actualizarNumeroItens()
      })

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

   div_principal.appendChild(container_list)

   return div_principal
}



// REMOVER ITENS DA LISTA 
function removeItensLista({ id, cor, tamanho, pagina, origem }) {

   let itenExcluido = pagina == 'lista'
      ? carrinho
      : favoritos

   let indice = itenExcluido.findIndex(p =>
      p.id == id &&
      p.cor == cor &&
      p.tamanho == tamanho
   )

   if (indice !== -1) {
      itenExcluido.splice(indice, 1)

      origem.remove()
   }

   guardarCarrinho(carrinho)
   guardarFavoritos(favoritos)
}

// CONTROLO DE QUANTIDADE ( EVENTOS ENCREMENTAR && DECREMENTAR )
function criarControleQuantidade({ id, cor, tamanho, pagina }) {

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

               actualizarNumeroItens()
            }
         }
      }


      // ACTULIZAR QUANTIDADE DE ITENS NO CARRINHO E NUMEROS 
      numero_quantidade.textContent = item.quantidade
      guardarCarrinho(carrinho)
      guardarFavoritos(favoritos)

      actualizarEmTempoReal({ pagina: pagina })
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
      actualizarEmTempoReal({ pagina: pagina })
   })

   // ORDEM (IMPORTANTE)
   container_encremento.appendChild(btnMais);
   container_encremento.appendChild(numero_quantidade)
   container_encremento.appendChild(btnMenos);

   return container_encremento;
}



export function infoCarrinho({ pagina }) {

   let inf_h2 = pagina == 'lista'
      ? 'Carrinho'
      : 'Favoritos'

   // CONTAINER
   const infCbc = document.createElement('div')
   infCbc.classList.add('inf_cbc')

   const cont_inf_c = document.createElement('div')
   cont_inf_c.classList.add('cont_inf_c')

   // TITULO
   const titulo = document.createElement('h2')
   titulo.classList.add('inf_cbc_h2')
   titulo.textContent = inf_h2


   const botao_inf = document.createElement('button')
   botao_inf.classList.add('botao_inf')
   botao_inf.innerHTML = menuAltIcon()

   botao_inf.addEventListener('click', () => {

      const container_resumo = document.querySelector('.container_resumo')
      container_resumo.classList.add('mobile_flex')

      setTimeout(() => {
         container_resumo.classList.add('flex_fadIn')
      }, 100)

   })

   // ADICIONAR ELEMENTOS
   cont_inf_c.appendChild(titulo)

   infCbc.appendChild(cont_inf_c)
   infCbc.appendChild(botao_inf)

   return infCbc
}



export function criarResumoPedido({ pagina }) {

   // ELEMENTO PAI
   const container_resumo = document.createElement('div')
   container_resumo.classList.add('container_resumo')


   // =========================
   // cont_resumo
   // =========================

   const cont_resumo = document.createElement('div')
   cont_resumo.classList.add('cont_resumo')


   // CONTAINER BUTTON
   const div_btn_rm_res = document.createElement('div')
   div_btn_rm_res.classList.add('div_btn_rm_res')

   // BOTAO REMOVER 
   const btn_remover_res = document.createElement('button')
   btn_remover_res.classList.add('.btn_remover_res')
   btn_remover_res.innerHTML = closeIcon()

   btn_remover_res.addEventListener('click', () => {
      const container_resumo = document.querySelector('.container_resumo')
      container_resumo.classList.remove('mobile_flex', 'flex_fadIn')
   })

   div_btn_rm_res.appendChild(btn_remover_res)

   cont_resumo.appendChild(div_btn_rm_res)

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
   span6.classList.add('spn_itn_resumo', 'totalResumo')

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
   btn1.textContent = 'Continuar comprando'


   btn1.addEventListener('click', () => {
      window.location.href = '../index.html'
   })

   container_btns.appendChild(btn1)

   // BOTÃO 2
   const btn2 = document.createElement('button')
   btn2.classList.add('btns_resumos', 'btn_rs_fin')
   btn2.textContent = 'Finalizar compra'
   btn2.dataset.botao = 'finalizarCompra'


   btn2.addEventListener('click', () => {
      opcesLista({
         pagina: pagina ,
         id : undefined,
         cor : undefined ,
         tamanho : undefined
      })
   })

   container_btns.appendChild(btn2)

   // ADICIONANDO BOTÕES NO PAI
   container_resumo.appendChild(container_btns)

   return container_resumo
}


// INFORMACOES DOS ITENS ( PRECO \ TOTAL E FRETE )
export function actualizarEmTempoReal({ pagina }) {

   const spn_subtotal = document.querySelector('.subtotal')
   const spn_frete = document.querySelector('.frete')
   const totalResumo = document.querySelector('.totalResumo')

   let listaOpcoes = pagina == 'lista'
      ? carrinho : favoritos

   let subtotal = 0
   let frete = 0

   listaOpcoes.forEach(lp => {
      subtotal += lp.preco * lp.quantidade
      frete += lp.quantidade * 800

   })

   spn_subtotal.textContent = `${subtotal}Kz` ?? 0
   spn_frete.textContent = `${frete}Kz` ?? 0
   totalResumo.textContent = `${subtotal + frete}Kz` ?? 0

}