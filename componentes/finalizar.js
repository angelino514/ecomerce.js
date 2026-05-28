import { itensVendas } from "../bancoDados.js";
import { carrinho } from "../modulos/carrinho.js";
import { favoritos } from "../modulos/favoritos.js";


export function criarContainerFinalizar({ pagina, id, cor, tamanho }) {

   let lista = () => {
      if (pagina == 'lista') {
         return carrinho
      }

      if (pagina == 'favoritos') {
         return favoritos
      }

      if (pagina == 'detalhes') {
         const item = itensVendas.find(p => p.id == id)
         if (!item) return
         const pedido = []
         pedido.push({ iten: item.iten, cor: cor, tamanho: tamanho, preco: item.preco, quantidade: 1 })

         return pedido
      }
   }

   let total = 0
   let subtotal = 0
   let frete = 0
   lista().forEach(element => {
       subtotal += element.preco * element.quantidade
       frete += element.quantidade * 800
   })
   total = subtotal + frete

   // CONTAINER PRINCIPAL
   const container_finalizar = document.createElement('div');
   container_finalizar.classList.add('container_finalizar');

   // FACE
   const face = document.createElement('div');
   face.classList.add('face');

   // ============================
   // dO_container_fn
   // ============================

   const dO_container_fn = document.createElement('div');
   dO_container_fn.classList.add('dO_container_fn');


   // cont_formulario
   const cont_formulario = document.createElement('div');
   cont_formulario.classList.add('cont_formulario');



   // ============================
   // dw_itn_fm
   // ============================

   const dw_itn_fm = document.createElement('div');
   dw_itn_fm.classList.add('dw_itn_fm');


   // TITULO
   const tilte_fn = document.createElement('div');
   tilte_fn.classList.add('tilte_fn');

   const ico = document.createElement('span');
   ico.classList.add('icone');

   const txtEndereco = document.createElement('span');
   txtEndereco.textContent = 'Endereco de entrega';

   tilte_fn.appendChild(ico);
   tilte_fn.appendChild(txtEndereco);



   // INPUT NOME
   const dO_cont_itn_nome = document.createElement('div');
   dO_cont_itn_nome.classList.add('dO_cont_itn');


   const labelNome = document.createElement('label');
   labelNome.setAttribute('for', 'nome');
   labelNome.textContent = 'Nome completo';

   const inputNome = document.createElement('input');
   inputNome.classList.add('int_fm_itn');
   inputNome.type = 'text';
   inputNome.id = 'nome';
   inputNome.placeholder = 'Nome completo';

   const nome_mensagem = document.createElement('span')
   nome_mensagem.classList.add('span_inps_msg')

   dO_cont_itn_nome.appendChild(labelNome);
   dO_cont_itn_nome.appendChild(inputNome);
   dO_cont_itn_nome.appendChild(nome_mensagem)



   // INPUT ENDERECO
   const dO_cont_itn_endereco = document.createElement('div');
   dO_cont_itn_endereco.classList.add('dO_cont_itn');

   const labelEndereco = document.createElement('label');
   labelEndereco.setAttribute('for', 'Endereco');
   labelEndereco.textContent = 'Endereco';

   const inputEndereco = document.createElement('input');
   inputEndereco.type = 'text';
   inputEndereco.classList.add('int_fm_itn');
   inputEndereco.id = 'Endereco';
   inputEndereco.placeholder = 'Rua, número e complemento';

   const ende_mensagem = document.createElement('span')
   ende_mensagem.classList.add('span_inps_msg')

   dO_cont_itn_endereco.appendChild(labelEndereco);
   dO_cont_itn_endereco.appendChild(inputEndereco);
   dO_cont_itn_endereco.appendChild(ende_mensagem)


   // APPEND dw_itn_fm
   dw_itn_fm.appendChild(tilte_fn);
   dw_itn_fm.appendChild(dO_cont_itn_nome);
   dw_itn_fm.appendChild(dO_cont_itn_endereco);




   // ============================
   // dO_whatsap
   // ============================

   const dO_whatsap = document.createElement('div');
   dO_whatsap.classList.add('dO_whatsap');


   // cont_itn_wtp
   const cont_itn_wtp = document.createElement('div');
   cont_itn_wtp.classList.add('cont_itn_wtp');

   const itn_wtp_h2 = document.createElement('h2');
   itn_wtp_h2.classList.add('itn_wtp_h2');

   const spanWtp1 = document.createElement('span');

   const spanWtp2 = document.createElement('span');
   spanWtp2.textContent = 'Contacto via WhatsApp';

   itn_wtp_h2.appendChild(spanWtp1);
   itn_wtp_h2.appendChild(spanWtp2);

   const pWhatsapp = document.createElement('p');

   pWhatsapp.textContent =
      'Insira seu numero para receber actualizacao do pedido e suporte prioritario em tempo real';

   cont_itn_wtp.appendChild(itn_wtp_h2);
   cont_itn_wtp.appendChild(pWhatsapp);




   // INPUT WHATSAPP
   const dO_cont_itn_wtp = document.createElement('div');
   dO_cont_itn_wtp.classList.add('dO_cont_itn');

   const labelWhatsapp = document.createElement('label');
   labelWhatsapp.setAttribute('for', 'whatsapp');

   const inputWhatsapp = document.createElement('input');
   inputWhatsapp.type = 'text';
   inputWhatsapp.classList.add('int_fm_itn');
   inputWhatsapp.id = 'whatsapp';
   inputWhatsapp.placeholder = '+244 940 000 000';

   const wtp_mensagem = document.createElement('span')
   wtp_mensagem.classList.add('span_inps_msg')

   dO_cont_itn_wtp.appendChild(labelWhatsapp);
   dO_cont_itn_wtp.appendChild(inputWhatsapp);
   dO_cont_itn_wtp.appendChild(wtp_mensagem)




   // APPEND WHATSAPP
   dO_whatsap.appendChild(cont_itn_wtp);
   dO_whatsap.appendChild(dO_cont_itn_wtp);




   // ============================
   // dO_cmpt
   // ============================

   const dO_cmpt = document.createElement('div');
   dO_cmpt.classList.add('dO_cmpt');


   // int_cmpt_cont
   const int_cmpt_cont = document.createElement('div');
   int_cmpt_cont.classList.add('int_cmpt_cont');

   const h2Cmpt = document.createElement('h2');

   const spanCmpt1 = document.createElement('span');

   const spanCmpt2 = document.createElement('span');
   spanCmpt2.textContent = 'Comprovativo de pagamento';

   h2Cmpt.appendChild(spanCmpt1);
   h2Cmpt.appendChild(spanCmpt2);

   const txt_cmp = document.createElement('p');
   txt_cmp.classList.add('txt_cmp');

   txt_cmp.textContent =
      'Para agilizar o processamento do seu pedido, faca upload do comprovante de transferencia bancaria.';

   int_cmpt_cont.appendChild(h2Cmpt);
   int_cmpt_cont.appendChild(txt_cmp);




   // INPUT FILE
   const dO_cont_itn_cmpt = document.createElement('div');
   dO_cont_itn_cmpt.classList.add('dO_cont_itn');

   const labelCmpt = document.createElement('label');
   labelCmpt.setAttribute('for', 'dO_cmpt');
   labelCmpt.classList.add('int_lb_cmpt');

   const inputCmpt = document.createElement('input');
   inputCmpt.type = 'file';
   inputCmpt.id = 'dO_cmpt';

   dO_cont_itn_cmpt.appendChild(labelCmpt);
   dO_cont_itn_cmpt.appendChild(inputCmpt);




   // APPEND COMPROVATIVO
   dO_cmpt.appendChild(int_cmpt_cont);
   dO_cmpt.appendChild(dO_cont_itn_cmpt);




   // APPEND FORMULARIO
   cont_formulario.appendChild(dw_itn_fm);
   cont_formulario.appendChild(dO_whatsap);
   cont_formulario.appendChild(dO_cmpt);

   dO_container_fn.appendChild(cont_formulario);




   // ============================
   // RESUMO DE PAGAMENTO
   // ============================

   const cont_rs_pd = document.createElement('div');
   cont_rs_pd.classList.add('cont_rs_pd');



   // dO_itn_pd
   const dO_itn_pd = document.createElement('div');
   dO_itn_pd.classList.add('dO_itn_pd');

   const h2Resumo = document.createElement('h2');
   h2Resumo.textContent = 'Resumo do pagamento';

   const list_pd = document.createElement('div');
   list_pd.classList.add('list_pd');

   dO_itn_pd.appendChild(h2Resumo);
   dO_itn_pd.appendChild(list_pd);




   // cont_int_rs_inf
   const cont_int_rs_inf = document.createElement('div');
   cont_int_rs_inf.classList.add('cont_int_rs_inf');




   // SUBTOTAL
   const do_int_rs_sub = document.createElement('div');
   do_int_rs_sub.classList.add('do_int_rs');

   const subtotalTxt = document.createElement('span');
   subtotalTxt.classList.add('spn_rs_inf');
   subtotalTxt.textContent = 'Subtotal';

   const subtotalValor = document.createElement('span');
   subtotalValor.classList.add('spn_rs_inf');
   subtotalValor.textContent =  `${subtotal}Kz` ?? 0

   do_int_rs_sub.appendChild(subtotalTxt);
   do_int_rs_sub.appendChild(subtotalValor);




   // FRETE
   const do_int_rs_frete = document.createElement('div');
   do_int_rs_frete.classList.add('do_int_rs');

   const freteTxt = document.createElement('span');
   freteTxt.classList.add('spn_rs_inf');
   freteTxt.textContent = 'frete';

   const freteValor = document.createElement('span');
   freteValor.classList.add('spn_rs_inf');
   freteValor.textContent = `${frete}Kz` ?? 0

   do_int_rs_frete.appendChild(freteTxt);
   do_int_rs_frete.appendChild(freteValor);




   // TOTAL
   const do_int_rs_total = document.createElement('div');
   do_int_rs_total.classList.add('do_int_rs');

   const totalTxt = document.createElement('span');
   totalTxt.classList.add('spn_rs_inf');
   totalTxt.textContent = 'Total';

   const totalValor = document.createElement('span');
   totalValor.classList.add('spn_rs_inf');
   totalValor.textContent =  `${total}Kz` ?? 0

   do_int_rs_total.appendChild(totalTxt);
   do_int_rs_total.appendChild(totalValor);




   // BOTAO
   const btn_conf = document.createElement('button');
   btn_conf.classList.add('btn_conf');

   btn_conf.addEventListener('click', () => {
      mensagemInputs()
   })

   btn_conf.textContent = 'confirmar pagamento';




   // APPEND RESUMO
   cont_int_rs_inf.appendChild(do_int_rs_sub);
   cont_int_rs_inf.appendChild(do_int_rs_frete);
   cont_int_rs_inf.appendChild(do_int_rs_total);
   cont_int_rs_inf.appendChild(btn_conf);

   cont_rs_pd.appendChild(dO_itn_pd);
   cont_rs_pd.appendChild(cont_int_rs_inf);




   // ============================
   // APPEND FINAL
   // ============================

   face.appendChild(dO_container_fn);
   face.appendChild(cont_rs_pd);

   container_finalizar.appendChild(face);

   return container_finalizar;

}

// EXIBIR MENSAGEM DE CAMPO VAZIO
function mensagemInputs() {
   const int_fm_itn = document.querySelectorAll('.int_fm_itn')

   for (let i = 0; i < int_fm_itn.length; i++) {
      if (int_fm_itn[i].value == '') {
         exporMensagem({ origem: int_fm_itn[i].closest('.dO_cont_itn') })
      }

      else { removerMensagem({ origem: int_fm_itn[i].closest('.dO_cont_itn') }) }
   }
}

function exporMensagem({ origem }) {
   let span_inps_msg = origem.querySelector('.span_inps_msg')
   span_inps_msg.classList.add('span_inps_msg')
   span_inps_msg.textContent = 'Campo Obritório'
}

function removerMensagem({ origem }) {
   let span_inps_msg = origem.querySelector('.span_inps_msg')
   span_inps_msg.textContent = ''
}
