import { componentesHeader } from "./componentes/header.js";
import { componenteMain } from "./componentes/main.js";
import { criarProdutos } from "./modulos/criarprodutos.js";
import { componenteNavbarMobile } from "./componentes/navbar.js";
import { componenteFooter } from "./componentes/footer.js";
import { itensVendas } from "./bancoDados.js";
import { navegacaoNavbar } from "./modulos/evento.js";
import { caminhoPaginaDetalhes } from "./modulos/caminhosPaginas.js";
import { carrinho } from "./modulos/carrinho.js";
import { actualizarNumeroItens } from "./modulos/actualizar.js";



const paginaActual = 'index'
const root = document.querySelector('.root')
if (root) {
    root.appendChild(componentesHeader({ pagina: paginaActual }))
    root.appendChild(componenteMain({ pagina: paginaActual }))
    root.appendChild(componenteNavbarMobile({ pagina: paginaActual }))
    root.appendChild(componenteFooter())

    navegacaoNavbar({ pagina: paginaActual })
    actualizarNumeroItens()
}

const container_main = document.querySelector('.container_main')
if (container_main) {
    criarProdutos({ produtos: itensVendas, pagina: paginaActual })


    const promocoes = itensVendas.filter(p => p.promocao == true)
    const carrousel_promo = document.querySelectorAll('.carrousel_promo')
    for (let i = 0; i < promocoes.length; i++) {

        const img_promo = carrousel_promo[i].querySelector('.img_promo')
        img_promo.src = 'imgs/' + promocoes[i].img
        img_promo.alt = promocoes[i].iten

        carrousel_promo[i].querySelector('.title_promo').textContent = promocoes[i].iten
        carrousel_promo[i].querySelector('.txt_promo').textContent = ` Desconto de ${5}%`


        const btn_promo = carrousel_promo[i].querySelector('.btn_promo')
        btn_promo.dataset.id = promocoes[i].id
        btn_promo.textContent = 'Comprar Agora'

        // EVENTO DETALHES 
        btn_promo.addEventListener('click', () => {
            caminhoPaginaDetalhes({ dados: btn_promo.dataset.id, pagina: paginaActual })
        })
    }

}