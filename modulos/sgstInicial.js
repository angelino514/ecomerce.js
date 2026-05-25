export function sugestoesIniciais({ itens, pagina }) {

   itens.forEach(iten => {

      // CONTEUDO PRINCIPAL
      const container_in = document.createElement('div')
      container_in.classList.add('container_in')

      // FACE 
      const face_in = document.createElement('div')
      face_in.classList.add('face')

      // BUTTON (  IMG && TEXTO )
      const btn_sg_in = document.createElement('button')
      btn_sg_in.classList.add('btn_sg_in')

      // IMG
      const img_sg_in = document.createElement('img')
      img_sg_in.classList.add('img_sg_in')
      img_sg_in.src = '../imgs/' + iten.img
      img_sg_in.alt = iten.iten

      const span_txt_in = document.createElement('span')
      span_txt_in.classList.add('span_txt_in')
      span_txt_in.textContent = iten.categoria


      btn_sg_in.appendChild(img_sg_in)
      btn_sg_in.appendChild(span_txt_in)

      face_in.appendChild(btn_sg_in)
      container_in.appendChild(face_in)

      document.querySelector('.container_main').appendChild(container_in)
   })



}