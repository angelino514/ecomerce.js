/* =========================================
   CONTADOR GLOBAL DE IDS DOS PRODUTOS
   (garante IDs únicos automaticamente)
========================================= */

let index = 0

/* =========================================
   DESCONTO GLOBAL APLICADO A PRODUTOS
========================================= */
export const desconto = 5

/* =========================================
   BASE DE DADOS PRINCIPAL DOS PRODUTOS
   (catálogo da loja)
========================================= */
const itensVendas = [
   {
      id: ++index, iten: "Calça social", img: "/IMGS/" + "image 1.png", imgs: ["IMGS/image 2.png", "IMGS/calca_com_bolsos-removebg-preview.png"], preco: 13780, categoria: "calças masculinas", itenDesc: "Adidas Stan Smith é muito mais do que um simples tênis é um verdadeiro clássico da moda urbana. Com um design minimalista e elegante, ele combina facilmente com qualquer estilo, desde looks casuais até composições mais sofisticadas.", destaque: true, promocao: false, tamanho: ["s", "l", "xl"], cores: ["preta"]
   }
   ,

   {
      id: ++index, iten: "Calça com bolsos", img: "/IMGS/" + "image 3.png", imgs: ["IMGS/image 5.png", "IMGS/image 6.png", "IMGS/image 7.png"], preco: 9180, categoria: "calças masculinas", itenDesc: "Adidas Stan Smith é muito mais do que um simples tênis é um verdadeiro clássico da moda urbana. Com um design minimalista e elegante, ele combina facilmente com qualquer estilo, desde looks casuais até composições mais sofisticadas.", destaque: true, promocao: true, tamanho: ["s", "l", "xl"], cores: ["preta"]
   }

   ,

   {
      id: ++index, iten: "Conjunto masculino", img: "/IMGS/" + "image13.png", imgs: ["IMGS/image13.png", "IMGS/image14.png", "IMGS/image15.png"], preco: 25850, categoria: "conjunto masculino", itenDesc: "Adidas Stan Smith é muito mais do que um simples tênis é um verdadeiro clássico da moda urbana. Com um design minimalista e elegante, ele combina facilmente com qualquer estilo, desde looks casuais até composições mais sofisticadas.", destaque: true, promocao: false, tamanho: ["s", "l", "xl"], cores: ["preta"]
   }

   ,

   {
      id: ++index, iten: "Conjunto masculino estiloso", img: "/IMGS/" + "image16.png", imgs: ["IMGS/image16.png", "IMGS/image17.png", "IMGS/image18.png", "IMGS/image18.png"], preco: 38900, categoria: "conjunto masculino", itenDesc: "Adidas Stan Smith é muito mais do que um simples tênis é um verdadeiro clássico da moda urbana. Com um design minimalista e elegante, ele combina facilmente com qualquer estilo, desde looks casuais até composições mais sofisticadas.", destaque: true, promocao: false, tamanho: ["s", "l", "xl"], cores: ["preta", "branco e azul", "sinzenta"]
   }

   ,

   {
      id: ++index, iten: "Conjunto masculino estiloso", img: "/IMGS/" + "image19.png", imgs: ["IMGS/image20.png", "IMGS/image16.png", "IMGS/image21.png", "IMGS/image22.png", "IMGS/image23.png"], preco: 7690, categoria: "casacos e moletons", itenDesc: "Adidas Stan Smith é muito mais do que um simples tênis é um verdadeiro clássico da moda urbana. Com um design minimalista e elegante, ele combina facilmente com qualquer estilo, desde looks casuais até composições mais sofisticadas.", destaque: true, promocao: true, tamanho: ["s", "l", "xl"], cores: ["preta", "branco e azul", "sinzenta"]
   }

   ,
   {
      id: ++index, iten: "Conjunto masculino estiloso", img: "/IMGS/" + "image25.png", imgs: ["IMGS/image25.png", "IMGS/image26.png", "IMGS/image27.png"], preco: 6730, categoria: "camisas e tcher-t", itenDesc: "Adidas Stan Smith é muito mais do que um simples tênis é um verdadeiro clássico da moda urbana. Com um design minimalista e elegante, ele combina facilmente com qualquer estilo, desde looks casuais até composições mais sofisticadas.", destaque: true, promocao: false, tamanho: ["s", "l", "xl"], cores: ["preta", "branco", "sinzenta"]
   }

   ,
   {
      id: ++index, iten: "Conjunto masculino estiloso", img: "/IMGS/" + "image28.png", imgs: ["IMGS/image28.png", "IMGS/image29.png", "IMGS/image30.png"], preco: 6730, categoria: "casacos e moletons", itenDesc: "Adidas Stan Smith é muito mais do que um simples tênis é um verdadeiro clássico da moda urbana. Com um design minimalista e elegante, ele combina facilmente com qualquer estilo, desde looks casuais até composições mais sofisticadas.", destaque: true, promocao: false, tamanho: ["s", "l", "xl", "2xl"], cores: ["preta", "Azul"]
   }

   ,
   {
      id: ++index, iten: "Conjunto masculino estiloso", img: "/IMGS/" + "image31.png", imgs: ["IMGS/image31.png", "IMGS/image32.png", "IMGS/image33.png"], preco: 6730, categoria: "camisas e tcher-t", itenDesc: "Adidas Stan Smith é muito mais do que um simples tênis é um verdadeiro clássico da moda urbana. Com um design minimalista e elegante, ele combina facilmente com qualquer estilo, desde looks casuais até composições mais sofisticadas.", destaque: true, promocao: false, tamanho: ["s", "l", "xl", "2xl"], cores: ["castanho", "creme"]
   }

   ,

   {
      id: ++index, iten: "Conjunto masculino estiloso", img: "/IMGS/" + "image34.png", imgs: ["IMGS/image34.png", "IMGS/image35.png", "IMGS/image36.png", "IMGS/image37.png"], preco: 6730, categoria: "calças masculinas", itenDesc: "Adidas Stan Smith é muito mais do que um simples tênis é um verdadeiro clássico da moda urbana. Com um design minimalista e elegante, ele combina facilmente com qualquer estilo, desde looks casuais até composições mais sofisticadas.", destaque: true, promocao: false, tamanho: ["s", "l", "xl", "2xl"], cores: ["castanho", "creme"]
   }
   ,

   {
      id: ++index, iten: "Camisa Casual para Homen", img: "/IMGS/" + "image39.png", imgs: ["IMGS/image39.png", "IMGS/image40.png"], preco: 6730, categoria: "camisas e tcher-t", itenDesc: "Adidas Stan Smith é muito mais do que um simples tênis é um verdadeiro clássico da moda urbana. Com um design minimalista e elegante, ele combina facilmente com qualquer estilo, desde looks casuais até composições mais sofisticadas.", destaque: true, promocao: false, tamanho: ["s", "l", "xl", "2xl"], cores: ["castanho", "creme"]
   }
   ,


   {
      id: ++index, iten: "conjunto masculio lion baller", img: "/IMGS/" + "image41.png", imgs: ["IMGS/image41.png", "IMGS/image42.png"], preco: 6730, categoria: "conjunto masculino", itenDesc: "Adidas Stan Smith é muito mais do que um simples tênis é um verdadeiro clássico da moda urbana. Com um design minimalista e elegante, ele combina facilmente com qualquer estilo, desde looks casuais até composições mais sofisticadas.", destaque: true, promocao: false, tamanho: ["s", "l", "xl", "2xl"], cores: ["castanho", "vermelho"]
   }
   ,

   {
      id: ++index, iten: "conjunto feminino zandaya baller", img: "/IMGS/" + "image43.png", imgs: ["IMGS/image43.png", "IMGS/image44.png", "IMGS/image45.png"], preco: 6730, categoria: "conjunto femenino", itenDesc: "Adidas Stan Smith é muito mais do que um simples tênis é um verdadeiro clássico da moda urbana. Com um design minimalista e elegante, ele combina facilmente com qualquer estilo, desde looks casuais até composições mais sofisticadas.", destaque: true, promocao: false, tamanho: ["s", "l", "xl", "2xl"], cores: ["castanho", "vermelho"]
   }

   ,

   {
      id: ++index, iten: "Conjunto femenino Tween girl", img: "/IMGS/" + "image46.png", imgs: ["IMGS/image46.png", "IMGS/image47.png", "IMGS/image48.png"], preco: 14800, categoria: "conjunto femenino", itenDesc: "Adidas Stan Smith é muito mais do que um simples tênis é um verdadeiro clássico da moda urbana. Com um design minimalista e elegante, ele combina facilmente com qualquer estilo, desde looks casuais até composições mais sofisticadas.", destaque: false, promocao: false, tamanho: ["s", "l", "xl", "2xl"], cores: ["castanho", "verde", "vinho"]
   }

   ,

   {
      id: ++index, iten: "Blusa Lior trayer", img: "/IMGS/" + "image49.png", imgs: ["IMGS/image49.png", "IMGS/image50.png", "IMGS/image51.png"], preco: 2500, categoria: "blusas de alça", itenDesc: "Adidas Stan Smith é muito mais do que um simples tênis é um verdadeiro clássico da moda urbana. Com um design minimalista e elegante, ele combina facilmente com qualquer estilo, desde looks casuais até composições mais sofisticadas.", destaque: false, promocao: true, tamanho: ["s", "l", "xl", "2xl"], cores: ["castanha", "vermelha", "branca", "preta"]
   }

   ,

   {
      id: ++index, iten: "conjunto femenino Lior trayer", img: "/IMGS/" + "image52.png", imgs: ["IMGS/image52.png", "IMGS/image53.png", "IMGS/image54.png"], preco: 7600, categoria: "conjunto femenino", itenDesc: "Adidas Stan Smith é muito mais do que um simples tênis é um verdadeiro clássico da moda urbana. Com um design minimalista e elegante, ele combina facilmente com qualquer estilo, desde looks casuais até composições mais sofisticadas.", destaque: true, promocao: true, tamanho: ["s", "l", "xl", "2xl"], cores: ["rosa", "rosa bebe", "creme"]
   }

   ,

   {
      id: ++index, iten: "Calça Wide jeans", img: "/IMGS/" + "image55.png", imgs: ["IMGS/image55.png", "IMGS/image56.png", "IMGS/image58.png", "IMGS/image57.png"], preco: 7600, categoria: "calças femeninas", itenDesc: "Adidas Stan Smith é muito mais do que um simples tênis é um verdadeiro clássico da moda urbana. Com um design minimalista e elegante, ele combina facilmente com qualquer estilo, desde looks casuais até composições mais sofisticadas.", destaque: false, promocao: true, tamanho: ["s", "l", "xl", "2xl"], cores: ["Azul"]
   }

   ,

   {
      id: ++index, iten: "Calções femenino bayama lior", img: "/IMGS/" + "image60.png", imgs: ["IMGS/image60.png", "IMGS/image59.png"], preco: 7600, categoria: "calções femininos", itenDesc: "Adidas Stan Smith é muito mais do que um simples tênis é um verdadeiro clássico da moda urbana. Com um design minimalista e elegante, ele combina facilmente com qualquer estilo, desde looks casuais até composições mais sofisticadas.", destaque: true, promocao: true, tamanho: ["s", "l", "xl", "2xl"], cores: ["Azul", "rosa", "vermelho", "branco", "sinzenta", "castanho"]
   }

   ,

   {
      id: ++index, iten: "Conjunto de pijama", img: "/IMGS/" + "image61.png", imgs: ["IMGS/image61.png", "IMGS/image62.png", "IMGS/image63.png"], preco: 7600, categoria: "roupas para dormir", itenDesc: "Adidas Stan Smith é muito mais do que um simples tênis é um verdadeiro clássico da moda urbana. Com um design minimalista e elegante, ele combina facilmente com qualquer estilo, desde looks casuais até composições mais sofisticadas.", destaque: true, promocao: true, tamanho: ["s", "l", "xl", "2xl"], cores: ["Azul", "rosa", "vermelho", "branco", "sinzenta", "castanho"]
   }

   ,

   {
      id: ++index, iten: "Vestido branco liso", img: "/IMGS/" + "image64.png", imgs: ["IMGS/image64.png", "IMGS/image65.png", "IMGS/image66.png"], preco: 7600, categoria: "vestidos", itenDesc: "Adidas Stan Smith é muito mais do que um simples tênis é um verdadeiro clássico da moda urbana. Com um design minimalista e elegante, ele combina facilmente com qualquer estilo, desde looks casuais até composições mais sofisticadas.", destaque: true, promocao: true, tamanho: ["s", "l", "xl", "2xl"], cores: ["branco"]
   }

   ,

   {
      id: ++index, iten: "conjunto femenino", img: "/IMGS/" + "image67.png", imgs: ["IMGS/image67.png", "IMGS/image68.png", "IMGS/image69.png", "IMGS/image70.png"], preco: 7600, categoria: "conjunto femenino", itenDesc: "Adidas Stan Smith é muito mais do que um simples tênis é um verdadeiro clássico da moda urbana. Com um design minimalista e elegante, ele combina facilmente com qualquer estilo, desde looks casuais até composições mais sofisticadas.", destaque: false, promocao: true, tamanho: ["s", "l", "xl", "2xl"], cores: ["branco"]
   }


   ,

   {
      id: ++index, iten: "Vestido apertado", img: "/IMGS/" + "image71.png", imgs: ["IMGS/image71.png", "IMGS/image72.png"], preco: 7600, categoria: "vestidos", itenDesc: "Adidas Stan Smith é muito mais do que um simples tênis é um verdadeiro clássico da moda urbana. Com um design minimalista e elegante, ele combina facilmente com qualquer estilo, desde looks casuais até composições mais sofisticadas.", destaque: false, promocao: true, tamanho: ["s", "l", "xl", "2xl"], cores: ["branco"]
   }
]

export { itensVendas }



/* =========================================
   BANNERS DA PÁGINA INICIAL
   (slider / marketing)
========================================= */
const itensBanners = [

   { img: 'IMGS/banner1.png', texto: "Nosso compromisso é entregar o teu produto com segurança" }
   ,
   { img: 'IMGS/banner2.png', texto: "Faça compra com segurança aqui no EVAN" }
   ,
   { img: 'IMGS/banner3.png', texto: "Agora posso comprar tudo apartir do meu telemóvel" }
   ,
   { img: 'IMGS/banner4.png', texto: "Temos novidades para si a melhor preço" }
]

/* exporta banners */
export { itensBanners }